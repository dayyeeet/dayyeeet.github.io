import {Badge} from "~/components/ui/badge";
import React from "react";
import {type ToolId, toolInstance, toolsWeighted} from "~/content/projects";
import {useToolSelector} from "~/lib/tools/useSelectedTools";

export default function Tools() {
    const {selectedTools, toggleSelected} = useToolSelector();
    const Tool = ({tool, amount}: typeof toolsWeighted[0]) => {
        const Icon = toolInstance(tool as ToolId).icon;
        return <Badge onClick={() => toggleSelected(tool as ToolId)}
                      variant={selectedTools.includes(tool as ToolId) ? "secondary" : amount > 1 ? "default" : "outline"}
                      className={"flex gap-3 capitalize cursor-pointer"}>
            <Icon/>
            {tool}
        </Badge>
    }
    return <section id={"tools"} className={"flex flex-wrap gap-2 xl:max-w-[50%]"}>
        {toolsWeighted.map((tool) => (
            <Tool {...tool}/>
        ))}
    </section>
}