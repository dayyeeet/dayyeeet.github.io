import type {Route} from "./+types/home";
import Hero from "~/components/hero";
import {FloatingNav} from "~/components/ui/floating-navbar";
import {DnaIcon, LayersIcon, SendIcon} from "lucide-react";
import Projects from "~/components/projects";
import {Separator} from "~/components/ui/separator";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "David Cappell Portfolio"},
        {name: "description", content: "Learn about my (personal) projects and contact me!"},
    ];
}

const navItems = [{
    name: "About",
    link: "about",
    icon: <DnaIcon className={"w-10 text-foreground"}/>,
}, {
    name: "Projects",
    link: "projects",
    icon: <LayersIcon className={"w-10 text-foreground"}/>,
}, {
    name: "Contact",
    link: "contact",
    icon: <SendIcon className={"w-10 text-foreground"}/>,
}]

export default function Home() {
    return <div className={"bg-background"}>
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Separator className={"mb-10"} orientation={"horizontal"}/>
        <Projects/>
        <Separator className={"mb-10"} orientation={"horizontal"}/>
    </div>;
}
