import {Button} from "~/components/ui/button";
import {ButtonGroup} from "~/components/ui/button-group";
import {StarIcon} from "lucide-react";
import GitHubIcon from "~/components/icons/github-icon";
import type {ComponentNavLinkProps} from "~/components/ui/nav-item";
import useStargazers from "~/lib/api/github/useStargazers";
import {Skeleton} from "~/components/ui/skeleton";


function RepoStarCounter({...props}: ComponentNavLinkProps) {
    const {stargazerCount} = useStargazers({
        user: "dayyeeet",
        repo: "dayyeeet.github.io",
    })
    return (
        <ButtonGroup>
            <Button asChild variant={"muted"}>
                <props.link>
                    <StarIcon className={"text-muted-foreground"}/>
                    {stargazerCount != null ?
                        <p className={"inline-block h-full leading-5 text-muted-foreground"}>
                            {stargazerCount > 1000 ? `${stargazerCount / 1000}k` : stargazerCount}
                        </p> : <Skeleton className={"w-5 rounded h-full"}/>}
                </props.link>
            </Button>
            <Button asChild variant={"muted"}>
                <props.link>
                    <GitHubIcon/>
                </props.link>
            </Button>
        </ButtonGroup>
    )
}

export {RepoStarCounter}