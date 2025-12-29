import type {Route} from "./+types/home";
import Hero from "~/components/hero";
import {DnaIcon, LayersIcon} from "lucide-react";
import Projects from "~/components/projects";
import {Separator} from "~/components/ui/separator";
import type {NavItemProps} from "~/components/ui/nav-item";
import {Navigation} from "~/components/ui/nav";
import {RepoStarCounter} from "~/components/ui/repo-starcounter";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "David Cappell Portfolio"},
        {name: "description", content: "Learn about my (personal) projects and contact me!"},
    ];
}

const navItems : NavItemProps[] = [{
    content: "About",
    link: "#about",
    icon: DnaIcon,
    useSameTab: true,
}, {
    content: "Projects",
    link: "#projects",
    icon: LayersIcon,
    useSameTab: true,
}, {
    content: RepoStarCounter,
    link: "https://github.com/dayyeeet/dayyeeet.github.io",
}
]

export default function Home() {
    return <div className={"bg-background"}>
        <Navigation items={navItems} />
        <Hero/>
        <Separator className={"mb-10"} orientation={"horizontal"}/>
        <Projects/>
        <Separator className={"mb-10"} orientation={"horizontal"}/>
    </div>;
}
