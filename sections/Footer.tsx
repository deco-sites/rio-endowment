import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import type { Props as NavItemsProps } from "site/components/Header/Navbar.tsx"

export interface Social {
  icon: {
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
  href: string;
}

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
  slogan: string;
  social?: Social[];
  navItems: NavItemsProps[];
  copyright?: string;
}

export default function Footer({ logo, slogan, social }: Props) {
  return (
    <footer class="w-screen pt-8 px-8 pb-14 bg-white">
        <div>
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
    </footer>
  );
}
