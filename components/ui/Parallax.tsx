import { ImageWidget } from "apps/admin/widgets.ts";
import { clx } from "site/sdk/clx.ts";

/** @title Parallax */
export interface Props {
    /**
     * @title Texto
     */
    text: string;
    /**
     * @title Texto do Botão
     */
    ctaText: string;
    /**
     * @title Link do Botão
     */
    ctaLink: string;
    /**
     * @title Imagem de Fundo
     */
    bgImage: ImageWidget;
}

const Parallax = ({ bgImage, ctaLink, ctaText, text }: Props) =>(
    <main
        class={clx(
            "flex flex-col gap-9 py-10 px-8 mb-28",
            "bg-fixed bg-no-repeat bg-cover bg-opacity-50 bg-black/50 overflow-y-scroll",
            "lg:pt-20 lg:px-28 lg:pb-10 lg:mb-20"
        )}
        style={{ backgroundImage: `url(${bgImage})` }}
    >
        <h2 class="font-poppins text-white text-4xl/none max-w-[656px]">{text}</h2>
        <a
            class="w-fit text-white text-base/5 py-2.5 px-4 border border-white rounded-full"
            href={ctaLink}
        > 
            {ctaText}
        </a>
    </main>
)

export default Parallax;