import {useEffect, useState} from "react";
import {Input} from "~/components/ui/input";

export function SearchInput(props: { className?: string, callback: (value: string) => void }) {
    const [input, setInput] = useState<string>("");
    useEffect(() => {
        if (!input) return;
        const timeout = setTimeout(() => {
            props.callback(input)
        }, 1000)

        return () => clearTimeout(timeout)
    }, [input]);
    return <Input className={props.className} placeholder={"Search for projects, roles and tools used..."}
                  onChange={e => setInput(e.target.value)}
                  value={input}/>
}