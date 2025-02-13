import React from "react";
import {Badge} from "~/components/ui/badge";
import GitHubIcon from "~/components/icons/github-icon";
import {Tooltip, TooltipContent, TooltipTrigger} from "~/components/ui/tooltip";
import {ArrowUpRightIcon, LinkIcon} from "lucide-react";

export type ProjectProps = {
    name: string;
    tools: { name: string, icon: React.FC }[];
    timeframe: string;
    media: string;
    video?: boolean;
    description: string;
    codeLink: string;
    link: string;
    role: string;
}

export function Project(props: ProjectProps) {
    return <div className={"text-left h-full py-10 sm:m-auto"}>
        <div className={"space-y-4"}>
            <div
                className={"relative w-fit rounded-xl overflow-hidden hover:ring-2 ring-secondary-foreground cursor-pointer border-muted border-2"}>
                {!props.video ?
                    <img className={"aspect-video sm:w-128 object-cover"} src={props.media} alt={props.name}/>
                    :
                    <video className={"aspect-video sm:w-128 object-cover"} controls>
                        <source src={props.media} type={"video/mp4"}/>
                    </video>
                }

                {!props.video ?
                    <a href={props.link}
                       className={"hover:bg-black/40 absolute top-0 left-0 aspect-video sm:w-128 rounded-xl transition-all"}/>
                    : <a href={props.link}
                         className={"rounded-full aspect-square flex items-center justify-center w-10 bg-muted absolute top-5 right-5 cursor-pointer hover:bg-muted/60"}><ArrowUpRightIcon
                        className={"text-muted-foreground aspect-square w-5"}/></a>}
            </div>
            <div className={"space-y-4"}>
                <div className={"flex gap-2 items-center"}>
                    {props.tools.map(value => {
                        return (<Tooltip>
                            <TooltipTrigger>
                                <value.icon/>
                            </TooltipTrigger>
                            <TooltipContent>
                                {value.name}
                            </TooltipContent>
                        </Tooltip>)
                    })}
                </div>
                <div className={"tracking-wide text-xl font-serif"}>
                    {props.role}
                </div>
            </div>
            <div className={"flex items-top gap-3 sm:gap-5 py-3 flex-wrap"}>
                <a href={props.codeLink} className={"flex items-center justify-center"}>
                    <GitHubIcon width={34} height={32} className={"text-foreground hover:text-foreground/70"}/>
                </a>
                <div className={"text-foreground text-2xl sm:text-4xl font-bold tracking-tight"}>
                    {props.name}
                </div>
                <div className={"flex items-center justify-center"}>
                    <Badge variant={"default"}>{props.timeframe}</Badge>
                </div>
            </div>
        </div>

        <div className={"text-foreground/70 text-sm sm:text-xl tracking-wide text-wrap"}>
            {props.description}
        </div>
    </div>
}