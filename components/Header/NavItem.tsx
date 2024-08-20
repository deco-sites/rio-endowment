/** @title {{navText}} */
export interface Props {
	/** @title Nome de Exibição */
	navText: string;
	/** @title Link */
	link: string;
}

const NavItem = ({ link, navText }: Props) => (
	<li class="font-medium text-blue-100 text-base leading-snug transition-all hover:font-bold">
		<a href={link} alt={navText}>{navText}</a>
	</li>
);

export default NavItem;