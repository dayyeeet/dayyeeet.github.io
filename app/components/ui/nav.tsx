import {NavItem, type NavItemProps} from "~/components/ui/nav-item";

type NavigationProps = {
    items: NavItemProps[]
}

function Navigation({...props}: NavigationProps) {
    return (
        <ul className={"w-full px-5 py-5 flex items-center justify-end gap-10"}>
            {props.items.map((item, index) => {
                return <li key={index}><NavItem {...item}/></li>
            })}
        </ul>
    )
}

export {Navigation}