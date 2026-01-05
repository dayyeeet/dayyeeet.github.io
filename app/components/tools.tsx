import {Badge} from "~/components/ui/badge";
import React, {createContext, type Dispatch, type SetStateAction, useContext, useState} from "react";
import {type ToolId, toolInstance, toolsWeighted} from "~/content/projects";
import {useToolSelector} from "~/lib/tools/useSelectedTools";

export const SelectedToolsContext = createContext<{selectedTools: ToolId[], setSelectedTools: Dispatch<SetStateAction<ToolId[]>> | undefined}>({
    selectedTools: [],
    setSelectedTools: undefined,
});

export default function Tools() {
    const { selectedTools, toggleSelected } = useToolSelector();
    const Tool = ({tool, amount}: typeof toolsWeighted[0]) => {
        const Icon = toolInstance(tool as ToolId).icon;
        return <Badge onClick={() => toggleSelected(tool as ToolId)} variant={selectedTools.includes(tool as ToolId) ? "secondary" : amount > 1 ? "default" : "outline"}
                      className={"flex gap-3 capitalize"}>
            <Icon/>
            {tool}
        </Badge>
    }
    return <section id={"tools"} className={"flex flex-wrap gap-2 cursor-pointer sm:max-w-[50%]"}>
        {toolsWeighted.map((tool) => (
            <Tool {...tool}/>
        ))}
    </section>
}