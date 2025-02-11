export default function Hero() {
    return <div id={"about"} className={"w-full h-screen flex items-center justify-center overflow-hidden"}>
        {/**<FluidBackground/>*/}
        <div
            className={"w-full h-full bg-linear-to-b from-transparent via-transparent to-background absolute top-0 left-0"}/>
        <div className={"w-full z-20 space-y-6"}>
            <div className={"text-foreground xl:text-7xl tracking-tight font-bold px-20"}>
                Hi, Im David Cappell
            </div>
            <div className={"text-foreground/70 xl:text-3xl tracking-tight px-20 max-w-1/2"}>
                A Computer Science Student specializing in full-stack development with React and strong focus on backend
                technologies.
            </div>
        </div>
    </div>

}