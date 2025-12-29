import {Button} from "~/components/ui/button";
import type {LucideIcon} from "lucide-react";
import {
    type ComponentPropsWithoutRef, forwardRef, type ForwardRefExoticComponent, type PropsWithoutRef,
    type RefAttributes
} from "react";
import {cn} from "~/lib/utils";

type NavLinkAnchorProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {styled?: boolean} & Pick<NavItemProps, "useSameTab">
export type NavLinkAnchor = ForwardRefExoticComponent<PropsWithoutRef<NavLinkAnchorProps> & RefAttributes<HTMLAnchorElement>>

type LinkWrappableElement = ((props: { link: NavLinkAnchor }) => JSX.Element)

type NavItemProps = {
    link: string,
    content: string | LinkWrappableElement,
    icon?: LucideIcon,
    styled?: boolean,
    useSameTab?: boolean,
}

function NavItem({content, useSameTab, link, ...props}: NavItemProps) {
    const isStandardLink = typeof content === "string";
    const RenderedChildren = content as LinkWrappableElement
    const linkContent = <>
        {props.icon && <props.icon className="w-10"/>}
        {content}
    </>
    const Link = forwardRef<HTMLAnchorElement, NavLinkAnchorProps>((props, ref) => (<a target={props.useSameTab ? undefined : "_blank"} rel={"noreferrer"} href={link} {...props} ref={ref} className={cn(props.className, props.styled && "flex items-center gap-2 cursor-pointer")}/>))
    Link.displayName = "Link"
    const usedLink = <Link
                    styled>
        {linkContent}
    </Link>
    if (isStandardLink) {
        return <Button asChild variant={"link"} size={"lg"} className={"text-foreground p-0"}>
            {usedLink}
        </Button>
    }
    return <RenderedChildren link={Link}/>;
}

export {NavItem};
export type {NavItemProps};

