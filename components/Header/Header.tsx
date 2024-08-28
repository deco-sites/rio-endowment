import { useDevice } from "deco/hooks/useDevice.ts";
import { useScript } from "deco/hooks/useScript.ts";
import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Navbar from "site/components/Header/Navbar.tsx";
import type { NavItemProps } from "site/types/NavItemProps.ts"
import HeaderCTA from "site/components/Header/HeaderCTA.tsx";
import type { Props as CTAButtonProps } from "site/components/Header/HeaderCTA.tsx";

export interface Props {
	/** @title {{alt}} */
	logo: {
		/**
		 * @title Imagem do Logo
		*/
		src: ImageWidget;
		/**
		 * @title Texto alternativo 
		*/
		alt: string;
		/**
		 * @title Largura 
		*/
		width: number;
		/** 
		 * @title Altura 
		*/
		height: number;
	}
	/**
	 * @title Items do Menu
	 */
	navItems: NavItemProps[];
	/**
	 * @title Informações do botão
	 */
	ctaButton: CTAButtonProps;
}

const script = () => {
	globalThis?.addEventListener("scroll", () => {
		if (globalThis.scrollY <= 150) {
			document.getElementById("header-container")!.style.backgroundColor = "transparent";
			document.getElementById("header-container")!.style.boxShadow = "0px 0px 0px 0px transparent";
		} else {
			document.getElementById("header-container")!.style.backgroundColor = "#fff";
			document.getElementById("header-container")!.style.boxShadow = "0px 5px 20px 0px #1C1C1E14";
		}
	});
}

export default function Header({ logo, navItems, ctaButton }: Props) {
	const device = useDevice();

	return (
		<header
			id="header-container"
			class="fixed top-0 left-0 w-screen flex justify-between items-center py-2.5 px-14 z-20 bg-transparent transition-colors"
			hx-on:click={useScript(script)}
			hx-swap="innerHTML"
		>
			{device === "desktop" && (
				<>
					<Image
						alt={logo.alt}
						src={logo.src}
						title={logo.alt}
						width={logo.width}
						height={logo.height}
					/>
					<div class="flex items-center gap-10">
						<Navbar
							navItems={navItems}
						/>
						<HeaderCTA
							ctaText={ctaButton.ctaText}
							link={ctaButton.link}
							isExternal={ctaButton.isExternal}
						/>
					</div>
				</>
			)}
			<script type="module" dangerouslySetInnerHTML={{ __html: useScript(script) }} />
		</header>
	)
}