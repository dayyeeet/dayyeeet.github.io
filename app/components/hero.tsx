import {PseudoCode} from "~/components/ui/pseudo-code";
import GitHubIcon from "~/components/icons/github-icon";
import {Mail} from "lucide-react";

export default function Hero() {
    return <div id={"about"} className={"w-full h-screen flex items-center justify-center overflow-hidden"}>
        {/**<FluidBackground/>*/}
        <div
            className={"w-full h-full bg-linear-to-b from-transparent via-transparent to-background absolute top-0 left-0"}/>
        <div className={"w-full z-20 space-y-6 px-10 sm:px-20"}>
            <PseudoCode pre={["bg-sky-600 w-24"]} post={["bg-sky-600 w-24"]} children={((start) => (
                <div className={"space-y-4 relative"}>
                    <PseudoCode className={"sm:pb-0"} pre={["bg-amber-600 w-32", "bg-red-400 w-42", "bg-amber-600 w-8"]}
                                post={["bg-amber-600 w-32"]} startDelay={start} children={(start) => (
                        <div className={"pb-5 h-[20rem] sm:h-auto"}>
                            <div className={"absolute w-[80vw] right-0 sm:mx-auto sm:relative"}>
                                <div className={"text-foreground text-5xl xl:text-7xl tracking-tight font-semibold"}>
                                    Hi, I&apos;m <span
                                    className={"underline decoration-sky-500 font-bold"}>David Cappell</span>
                                </div>
                                <div
                                    className={"text-foreground/70 text-2xl mt-5 xl:text-3xl tracking-tight sm:max-w-2/3 md:max-w-1/2"}>
                                    A computer science and media student specializing in full-stack development with
                                    React
                                    and
                                    strong
                                    focus on
                                    backend
                                    technologies.
                                </div>
                                <div className={"mt-5 flex items-center justify-start gap-3"}>
                                    <a href={"https://github.com/dayyeeet"}>
                                        <GitHubIcon className={"w-8 h-8 text-foreground"}/>
                                    </a>
                                    <a href={"mailto:david@cappell.net"}>
                                        <Mail className={"w-8 h-8 text-foreground"}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}/>
                    <PseudoCode startDelay={0.7 + (start ?? 0)}
                                pre={["bg-sky-600 w-28", "bg-teal-700 w-64", "bg-sky-600 w-8"]}/>
                </div>
            ))}/>
        </div>
    </div>
}