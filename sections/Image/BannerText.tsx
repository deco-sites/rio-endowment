import Image from "apps/website/components/Image.tsx";
import { ImageWidget, HTMLWidget } from "apps/admin/widgets.ts";
import { clx } from "site/sdk/clx.ts";

/** @title Banner com Texto */
export interface Props {
    /**
     * @title Banner
     */
    image: ImageWidget;
    /**
     * @title Largura
     */
    width: number;
    /**
     * @title Altura
     */
    height: number;
    /**
     * @title Texto alternativo do banner
     */
    alt: string;
    /**
     * @title Texto de destaque
     * @format rich-text
     */
    text: HTMLWidget;
}

const BannerText = ({ alt, image, text, height, width }: Props) => (
    <main class="flex h-fit relative -z-10">
        <Image
            alt={alt}
            src={image}
            width={width}
            height={height}
            class="block mx-auto"
        />
        <div
            class={clx(
                "w-full px-[72px] absolute -translate-y-1/2 top-1/2",
                "[&_strong]:font-semibold font-poppins font-light leading-tight"
            )}
            dangerouslySetInnerHTML={{ __html: text }}
        />
    </main>
);

export default BannerText;