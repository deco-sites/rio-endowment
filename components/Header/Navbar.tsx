import NavItem from "site/components/Header/NavItem.tsx";
import type { Props as NavItemProps } from "site/components/Header/NavItem.tsx";
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
            {navItems?.map((item, index) => (
                <NavItem key={id + index} link={item.link} navText={item.navText} />
            ))}
        </ul>
    )
};

export default Navbar;