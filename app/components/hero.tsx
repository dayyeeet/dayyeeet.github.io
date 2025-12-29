export default function Hero() {
    return <section id={"about"} className={"w-full space-y-6 overflow-hidden px-5 sm:px-20 pt-5 sm:pt-20 py-2"}>
        <div>
            <h1 className={"text-5xl grow font-bold tracking-tight first:mt-0 text-slate-200"}>
                David Cappell
            </h1>
            <h2 className={"mt-4 sm:text-xl text-lg font-regular tracking-wider text-secondary leading-0"}>
                Full Stack Engineer
            </h2>
        </div>
        <p className={"leading-relaxed text-foreground/70 text-md sm:text-lg tracking-wider sm:max-w-[50%]"}>
            A computer science and media student specializing in React and strong
            focus on backend technologies.
        </p>
    </section>
}