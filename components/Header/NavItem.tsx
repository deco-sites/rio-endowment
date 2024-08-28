import type { NavItemProps } from "site/types/NavItemProps.ts"

const NavItem = ({ link, navText }: NavItemProps) => (
	<li class="font-medium text-blue-100 text-base leading-snug transition-all hover:font-bold">
		<a href={link} alt={navText}>{navText}</a>
	</li>
);

export default NavItem;