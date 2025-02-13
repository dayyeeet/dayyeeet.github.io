import {FluidBackground} from "~/components/shader/background-shader";

export default function Hero() {
    return <div id={"about"} className={"w-full h-screen flex items-center justify-center overflow-hidden"}>
        {/**<FluidBackground/>*/}
        <div
            className={"w-full h-full bg-linear-to-b from-transparent via-transparent to-background absolute top-0 left-0"}/>
        <div className={"w-full z-20 space-y-6 px-10 sm:px-20"}>
            <div className={"text-foreground text-5xl xl:text-7xl tracking-tight font-bold"}>
                Hi, I&apos;m David Cappell
            </div>
            <div className={"text-foreground/70 text-2xl xl:text-3xl tracking-tight max-w-3/4 sm:max-w-2/3 md:max-w-1/2"}>
                A computer science student specializing in full-stack development with React and strong focus on backend
                technologies.
            </div>
        </div>
    </div>

}