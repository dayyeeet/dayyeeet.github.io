import {Project} from "~/components/project";
import React from "react";
import {projects} from "~/content/projects";
import {useToolSelector} from "~/lib/tools/useSelectedTools";

export default function Projects() {
    const {selectedTools} = useToolSelector()
    return <section id={"projects"}
                    className={"py-5 space-y-6 grid grid-cols-1 md:grid-cols-2 sm:gap-20space-y-6 grid grid-cols-1 md:grid-cols-2 sm:gap-20"}>
        {projects.filter(it => selectedTools.length == 0 || it.tools.find(tool => selectedTools.includes(tool.name))).map(it => (
            <Project key={it.name} {...it}/>
        ))}
    </section>
}