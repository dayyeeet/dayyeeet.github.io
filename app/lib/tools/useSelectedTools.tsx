import {createContext, type Dispatch, type ReactNode, type SetStateAction, useContext, useState} from "react";
import type {ToolId} from "~/content/projects";

type SelectedToolsContextProps = {
    selectedTools: ToolId[],
    setSelectedTools: Dispatch<SetStateAction<ToolId[]>> | undefined
}

const SelectedToolsContext = createContext<SelectedToolsContextProps>({
    selectedTools: [],
    setSelectedTools: undefined,
});

type HookResult = {
    toggleSelected: (tool: ToolId) => void
} & Omit<SelectedToolsContextProps, "setSelectedTools">

function useToolSelector(): HookResult {
    const {selectedTools, setSelectedTools} = useContext(SelectedToolsContext);
    const toggleSelected = (tool: ToolId) => {
        if(!setSelectedTools) {
            return;
        }
        setSelectedTools(prev => {
            if(prev.includes(tool)) {
                return prev.filter((it) => it !== tool);
            }
            return [tool, ...prev];
        })
    }
    return {
        selectedTools,
        toggleSelected,
    }
}

function SelectedToolsProvider({children}: {children: ReactNode}) {
    const [selectedTools, setSelectedTools] = useState<ToolId[]>([]);
    return <SelectedToolsContext.Provider value={{
        selectedTools,
        setSelectedTools,
    }}>{children}</SelectedToolsContext.Provider>
}

export { SelectedToolsContext, SelectedToolsProvider, useToolSelector };