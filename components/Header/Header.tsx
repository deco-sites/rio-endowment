import { useDevice } from "deco/hooks/useDevice.ts";
import { useScript } from "deco/hooks/useScript.ts";
import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Navbar from "site/components/Header/Navbar.tsx";
import type { NavItemProps } from "site/types/NavItemProps.ts"
import HeaderCTA from "site/components/Header/HeaderCTA.tsx";
import type { Props as CTAButtonProps } from "site/components/Header/HeaderCTA.tsx";
import Icon from "site/components/ui/Icon.tsx";

export interface Props {
	/** @title {{alt}} */
	logoDesktop: {
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
	/** @title {{alt}} */
	logoMobile: {
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

export default function Header({ logoDesktop, logoMobile, navItems, ctaButton }: Props) {
	const device = useDevice();

	return (
		<>
			{device === "desktop" && (
				<header
					id="header-container"
					class="fixed top-0 left-0 w-screen flex justify-between items-center py-2.5 px-14 z-20 bg-transparent transition-colors"
					hx-on:click={useScript(script)}
					hx-swap="innerHTML"
				>
					<a href="/">
						<Image
							alt={logoDesktop.alt}
							src={logoDesktop.src}
							title={logoDesktop.alt}
							width={logoDesktop.width}
							height={logoDesktop.height}
						/>
					</a>
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
					<script type="module" dangerouslySetInnerHTML={{ __html: useScript(script) }} />
				</header>
			)}

			{device !== "desktop" && (
				<header class="fixed top-0 left-0 z-40 w-full bg-white py-4 px-5 shadow-header-mobile grid grid-cols-[24px_1fr_24px] items-center">
					<div class="drawer">
						<input id="menu-drawer" type="checkbox" class="drawer-toggle" />
						<div class="drawer-content">
							<label for="menu-drawer" class="drawer-button w-full">
								<Icon id="Hamburger"  width={24} height={16} />
							</label>
						</div>
						<div class="drawer-side z-40 items-center">
							<label for="menu-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
							<div class="flex flex-col gap-12 bg-white w-full min-h-[90%] rounded-[40px] p-8">
								<label for="menu-drawer" aria-label="close sidebar" class="w-fit ml-auto">
									<Icon id="XMark" width={16} height={16} />
								</label>
								<ul class="flex flex-col gap-6">
									{navItems.map(({ navText, link }) => (
										<li>
											<a class="font-medium text-2xl text-blue-100" href={link}>{navText}</a>
										</li>
									))}
								</ul>
								<HeaderCTA
									ctaText={ctaButton.ctaText}
									link={ctaButton.link}
									isExternal={ctaButton.isExternal}
								/>
							</div>
						</div>
					</div>
					<div class="w-full">
						<a href="/">
							<Image
								alt={logoMobile.alt}
								src={logoMobile.src}
								title={logoMobile.alt}
								width={logoMobile.width}
								height={logoMobile.height}
								class="block mx-auto"
							/>
						</a>
					</div>
				</header>
			)}
		</>
	)
}