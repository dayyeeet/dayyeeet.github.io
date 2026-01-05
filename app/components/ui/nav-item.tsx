import {Button} from "~/components/ui/button";
import type {LucideIcon} from "lucide-react";
import {
    type ComponentPropsWithoutRef,
    forwardRef,
    type ForwardRefExoticComponent,
    type PropsWithoutRef,
    type RefAttributes
} from "react";
import {cn} from "~/lib/utils";

type NavLinkAnchorProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & { styled?: boolean }
export type NavLinkAnchor = ForwardRefExoticComponent<PropsWithoutRef<NavLinkAnchorProps> & RefAttributes<HTMLAnchorElement>>

export type ComponentNavLinkProps =
    { link: NavLinkAnchor }
    & Omit<NavItemProps, "link" | "content" | "useSameBrowserTab">
type LinkWrappableElement = ((props: ComponentNavLinkProps) => JSX.Element)

type NavItemProps = {
    link: string,
    content: string | LinkWrappableElement,
    icon?: LucideIcon,
    useSameBrowserTab?: boolean,
}

function NavItem({content, useSameBrowserTab, link, ...props}: NavItemProps) {
    const isStandardLink = typeof content === "string";
    const RenderedChildren = content as LinkWrappableElement
    const linkContent = <>
        {props.icon && <props.icon className="w-10 text-secondary group-focus:text-primary"/>}
        {content}
    </>
    const Link = forwardRef<HTMLAnchorElement, NavLinkAnchorProps>((props, ref) => (
        <a target={useSameBrowserTab ? undefined : "_blank"} rel={useSameBrowserTab ? "tag" : "noreferrer"} href={link} {...props} ref={ref}
           className={cn(props.className, props.styled && "flex items-center gap-2 cursor-pointer group")}/>))
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

