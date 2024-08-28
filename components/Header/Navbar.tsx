import NavItem from "site/components/Header/NavItem.tsx";
import type { NavItemProps } from "site/types/NavItemProps.ts";
import { useId } from "site/sdk/useId.ts";

export interface Props {
    /**
     * @title Items de Navegação
     */
    navItems: NavItemProps[];
}

const Navbar = ({ navItems }: Props) => {
    const id = useId();
    
    return (
        <ul class="flex items-center gap-6">
            {navItems?.map(({ link, navText }, index) => (
                <NavItem key={id + index} link={link} navText={navText} />
            ))}
        </ul>
    )
};

export default Navbar;