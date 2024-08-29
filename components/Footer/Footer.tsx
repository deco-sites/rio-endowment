import Image from "apps/website/components/Image.tsx";
import { clx } from "site/sdk/clx.ts";

import type { RichText } from "apps/admin/widgets.ts";
import type { NavItemProps } from "site/types/NavItemProps.ts";
import type { SocialProps } from "site/types/SocialProps.ts";
import type { FooterLogo } from "site/types/FooterLogo.ts";


export interface Props {
  /** @title {{alt}} */
	logo: FooterLogo;
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
    <footer class="pt-8 px-8 pb-14 bg-white border-t border-white-100 ">
        <section class="max-w-[1221px] mx-auto">
            <div class="flex justify-between items-center w-full max-w-[90%] mb-11">
                <Image
                    alt={logo?.alt}
                    src={logo?.src}
                    title={logo?.alt}
                    width={logo?.width}
                    height={logo?.height}
                />

                <span class="font-poppins text-xl text-center w-full text-blue-100">{slogan}</span>

                <div class="flex gap-3.5">
                    {social?.map(({ alt, height, href, src, width }) => (
                        <a href={href} title={alt}>
                            <Image
                                src={src}
                                alt={alt}
                                title={alt}
                                width={width}
                                height={height}
                            />
                        </a>
                    ))}
                </div>
            </div>
            <div class="flex justify-center gap-6 items-center mb-9">
                {navItems?.map(({ link, navText }) => (
                    <a class="font-poppins font-medium text-base text-blue-100" href={link} title={navText} >{navText}</a>
                ))}
            </div>

            <span class={clx(
                "flex w-full max-w-[85%] ml-auto h-0.5 mb-5",
                "bg-gradient-to-r from-pink-100 from-[8.49%] via-green-100 via-[48.91%] to-blue-200 to-100%"
            )} />

            <div class="font-poppins" dangerouslySetInnerHTML={{ __html: copyright! }}/>
        </section>
    </footer>
  );
}