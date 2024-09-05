import Image from "apps/website/components/Image.tsx";
import { ImageWidget, HTMLWidget } from "apps/admin/widgets.ts";
import { clx } from "site/sdk/clx.ts";
import { useDevice } from "deco/hooks/useDevice.ts";

/** @title {{alt}} */
interface Banner {
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

/** @title Banner com Texto */
export interface Props {
    /**
     * @title Banner Desktop
     */
    desktopBanner: Banner;
    /**
     * @title Banner Tablet
     */
    tabletBanner: Banner;
    /**
     * @title Banner Mobile
     */
    mobileBanner: Banner;
}

const BannerText = ({ desktopBanner, mobileBanner, tabletBanner }: Props) => {
    const device = useDevice();

    return (
        <main class="flex h-fit relative -z-10 mt-20 lg:mt-0">
            {device === "desktop" && (
                <>
                    <Image
                        alt={desktopBanner.alt}
                        src={desktopBanner.image}
                        width={desktopBanner.width}
                        height={desktopBanner.height}
                        class="block mx-auto"
                    />
                    <div
                        class={clx(
                            "w-full absolute -translate-y-1/2 top-1/2 px-[72px]",
                            "[&_strong]:font-semibold font-poppins font-light leading-tight"
                        )}
                        dangerouslySetInnerHTML={{ __html: desktopBanner.text }}
                    />
                </>
            )}
            
            {device === "tablet" && (
                <>
                    <Image
                        alt={tabletBanner.alt}
                        src={tabletBanner.image}
                        width={tabletBanner.width}
                        height={tabletBanner.height}
                        class="block mx-auto"
                    />
                    <div
                        class={clx(
                            "w-full px-6 absolute top-28",
                            "[&_strong]:font-semibold font-poppins font-light leading-tight"
                        )}
                        dangerouslySetInnerHTML={{ __html: tabletBanner.text }}
                    />
                </>
            )}
            
            {device === "mobile" && (
                <>
                    <Image
                        alt={mobileBanner.alt}
                        src={mobileBanner.image}
                        width={mobileBanner.width}
                        height={mobileBanner.height}
                        class="block mx-auto"
                    />
                    <div
                        class={clx(
                            "w-full px-6 absolute top-28",
                            "[&_strong]:font-semibold font-poppins font-light leading-tight"
                        )}
                        dangerouslySetInnerHTML={{ __html: mobileBanner.text }}
                    />
                </>
            )}
        </main>
    )
};

export default BannerText;