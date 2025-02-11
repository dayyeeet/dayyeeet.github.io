import type {Route} from "./+types/home";
import Hero from "~/components/Hero";
import {FloatingNav} from "~/components/ui/floating-navbar";
import {BookMarkedIcon} from "lucide-react";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "David Cappell Portfolio"},
        {name: "description", content: "Learn about my (personal) projects and contact me!"},
    ];
}

const navItems = [{
    name: "About",
    link: "about",
    icon: <BookMarkedIcon className={"w-10 text-foreground"}/>,
}, {
    name: "Projects",
    link: "projects",
    icon: <BookMarkedIcon className={"w-10 text-foreground"}/>,
}, {
    name: "About",
    link: "about",
    icon: <BookMarkedIcon className={"w-10 text-foreground"}/>,
}]

export default function Home() {
    return <div className={"bg-background"}>
        <FloatingNav navItems={navItems}/>
        <Hero/>
    </div>;
}
