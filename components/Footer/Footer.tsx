import Image from "apps/website/components/Image.tsx";
import { clx } from "site/sdk/clx.ts";

import type { ImageWidget, RichText } from "apps/admin/widgets.ts";
import type { NavItemProps } from "site/types/NavItemProps.ts";
import type { SocialProps } from "site/types/SocialProps.ts";


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
	};
    /**
     * @title Slogan
     */
    slogan: string;
    /**
     * @title Redes Sociais
     */
    social?: SocialProps[];
    /**
     * @title Itens de Navegação
     */
    navItems: NavItemProps[];
    /**
     * @title Texto de Direitos Autorais
     */
    copyright?: RichText;
}

export default function Footer({ logo, slogan, social, navItems, copyright }: Props) {
  return (
    <footer class="w-screen pt-8 px-8 pb-14 bg-white">
        <div class="flex justify-between w-full max-w-[90%]">
            <Image
                alt={logo.alt}
                src={logo.src}
                title={logo.alt}
                width={logo.width}
                height={logo.height}
            />

            <span class="text-xl text-center w-full text-blue-100">{slogan}</span>

            <div class="flex gap-3.5">
                {social?.map((item) => (
                    <a href={item.href} title={item.icon.alt}>
                        <img
                            src={item.icon.src}
                            alt={item.icon.alt}
                            width={item.icon.width}
                            height={item.icon.height}
                        />
                    </a>
                ))}
            </div>
        </div>
		<div class="flex justify-center gap-6 items-center">
			{navItems.map(({ link, navText }) => (
                <a class="font-medium text-base" href={link} title={navText} >{navText}</a>
			))}
		</div>

        <span class={clx(
            "flex w-full max-w-[86%] mr-auto",
            "bg-gradient-to-r from-blue-200 from-[8.49%] via-pink-100 via-[48.91%] to-green-100 to-100%"
        )} />

        <p>{copyright}</p>
    </footer>
  );
}
