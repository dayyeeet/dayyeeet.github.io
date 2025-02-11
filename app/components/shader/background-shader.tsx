import * as THREE from "three"
import {useMemo, useRef} from "react";
import {Canvas, useFrame} from "@react-three/fiber";
import {motion, useInView} from "framer-motion";


type FluidShaderMaterial = THREE.ShaderMaterial & {
    uniforms: {
        uTime: { value: number };
        uSpeed: { value: number };
        uIntensity: { value: number };
        uDensity: { value: number };
        uDarkness: { value: number };
        uSeed: { value: number };
        uColor: { value: THREE.Vector3 };
    };
};

const config = {
    speed: 0.02,
    intensity: 0.15,
    density: 0.15,
    darkness: 0.2,
    blueStrength: 0.6,
    fps: 30,
};

const color = new THREE.Vector3(6, 48, 66);  // Set black for monochromatic color

function FluidMaterial() {
    const materialRef = useRef<FluidShaderMaterial>(null!);
    const lastUpdate = useRef(0);
    const frameInterval = 1000 / config.fps;

    const randomSeed = useMemo(() => Math.random() * 100, []);

    const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `;

    const fragmentShader = `
    #ifdef GL_ES
    precision mediump float;
    #endif
    
    uniform float uTime;
    uniform float uSpeed;
    uniform float uIntensity;
    uniform float uDensity;
    uniform float uDarkness;
    uniform float uSeed;
    uniform vec3 uColor;
    varying vec2 vUv;
    
    vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
    
    float snoise(vec2 v) {
      const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy) );
      vec2 x0 = v -   i + dot(i, C.xx);
      vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod(i, 289.0);
      vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
        dot(x12.zw,x12.zw)), 0.0);
      m = m*m ;
      m = m*m ;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
      vec3 g;
      g.x  = a0.x  * x0.x  + h.x  * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return clamp(130.0 * dot(m, g), -1.0, 1.0);
    }
    
    vec2 curl(vec2 p) {
      const float h = 0.001;
      float n = snoise(p);
      float a = snoise(p + vec2(h, 0.0));
      float b = snoise(p + vec2(0.0, h));
      return vec2(b - n, n - a) / h;
    }
    
    void main() {
      vec2 p = vUv * uDensity;
      float time = uTime * uSpeed + uSeed;
      
      vec2 flow1 = curl(p + time);
      vec2 flow2 = curl(p * 2.0 - time * 0.5) * 0.5;
      vec2 flow3 = curl(p * 1.5 + time * 0.7) * 0.25;
      vec2 finalFlow = flow1 + flow2 + flow3;
      
      float pattern = snoise(p + finalFlow * uIntensity);
      pattern = pattern * 0.5 + 0.5;
      
      // Smoother and more contrasty noise
      pattern = smoothstep(0.3, 0.7, pattern);
      pattern = pow(pattern, 1.2);
      
      // Remove gray background by enforcing contrast
      vec3 tintedColor = mix(vec3(0.0), uColor, pattern);
      
      gl_FragColor = vec4(tintedColor, 1.0 - uDarkness);
    }

  `;

    const uniforms = useMemo(
        () => ({
            uTime: {value: 0},
            uSpeed: {value: config.speed},
            uIntensity: {value: config.intensity},
            uDensity: {value: config.density},
            uDarkness: {value: config.darkness},
            uSeed: {value: randomSeed},
            uColor: {value: color},
        }),
        [randomSeed],
    );

    useFrame((state) => {
        const currentTime = state.clock.elapsedTime * 1000;
        if (currentTime - lastUpdate.current >= frameInterval) {
            if (materialRef.current) {
                materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
            }
            lastUpdate.current = currentTime;
        }
    });

    return (
        <shaderMaterial
            ref={materialRef}
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            uniforms={uniforms}
        />
    );
}

export function FluidBackground() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, {
        margin: "100px",
        amount: "some",
    });

    return (
        <motion.div
            ref={containerRef}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 2.5, ease: "easeOut"}}
            className={"w-full h-full absolute top-0 left-0"}
        >
            <Canvas
                camera={{position: [0, 0, 1]}}
                className={"absolute top-0 left-0 w-full h-full"}
            >
                <FullscreenQuad isInView={isInView}/>
            </Canvas>
        </motion.div>
    );
}

function FullscreenQuad({isInView}: { isInView: boolean }) {
    return (
        <mesh>
            <planeGeometry args={[2, 2]}/>
            {isInView && <FluidMaterial/>}
        </mesh>
    );
}