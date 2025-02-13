import React from "react";
import {cn} from "~/lib/utils";
import {motion} from "framer-motion";

export const PseudoCodeElement = (props: { className?: string }) => {
    return <span className={cn("rounded h-6", props.className)}/>
}

type PseudoCodeProps = {
    pre?: string[];
    post?: string[];
    children?: (startDelay?: number) => React.ReactNode;
    startDelay?: number;
    className?: string;
}

export const PseudoCode = (props: PseudoCodeProps) => {
    return <motion.div transition={{
        duration: 0.3,
        delay: props.startDelay
    }} animate={{opacity: 1}} className={"space-y-4 opacity-0"}>
        <motion.div transition={{
            duration: 0.5,
            delay: 0.1 + (props.startDelay ?? 0),
        }} animate={{opacity: 1}} className={"flex gap-2 items-center opacity-0"}>
            {props.pre?.map((element, i) => <PseudoCodeElement key={i} className={element}/>)}
        </motion.div>
        {props.children ? <motion.div transition={{
            duration: 0.5,
            delay: 0.4 + (props.startDelay ?? 0),
        }} animate={{opacity: 1, marginLeft: "calc(var(--spacing) * 10)"}} className={cn("space-y-4 opacity-0", props.className)}>
            {props.children( 0.4 + (props.startDelay ?? 0))}
        </motion.div> : null}

        <motion.div transition={{
            duration: 0.2,
            delay: 0.8 + (props.startDelay ?? 0),
        }} animate={{opacity: 1}} className={"flex gap-2 items-center opacity-0"}>
            {props.post?.map((element, i) => <PseudoCodeElement key={i} className={element}/>)}
        </motion.div>
    </motion.div>
}