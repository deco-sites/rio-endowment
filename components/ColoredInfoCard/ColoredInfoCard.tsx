import { ImageWidget, RichText } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface ImageProps {
    /** 
     * @title Imagem
     */
    image: ImageWidget;
    /** 
     * @title Texto Alternativo
     */
    alt: string;
    /** 
     * @title Altura
     */
    height: number;
    /** 
     * @title Largura
     */
    width: number;
}

export interface Props {
    title: RichText;
    description: RichText;
    desktopImage: ImageProps;
    tabletImage: ImageProps;
    mobileImage: ImageProps;
}

const ColoredInfoCard = ({ description, desktopImage, mobileImage, tabletImage, title }: Props) => (
    <main>
        <div class="font-poppins py-8 px-4 flex flex-col gap-2 [&_span]:tracking-tighter" dangerouslySetInnerHTML={{ __html: title }} />

        <div class="flex flex-col gap-5 w-full md:flex-row-reverse md:justify-center">
            <div class="bg-blue-100 py-8 px-11 font-poppins flex flex-col gap-6" dangerouslySetInnerHTML={{ __html: description }} />
            <Image
                width={desktopImage.width}
                alt={desktopImage.alt}
                height={desktopImage.height}
                src={desktopImage.image}
                class="hidden lg:block"
            />
            <Image
                width={tabletImage.width}
                alt={tabletImage.alt}
                height={tabletImage.height}
                src={tabletImage.image}
                class="hidden sm:block lg:hidden"
            />
            <Image
                width={mobileImage.width}
                alt={mobileImage.alt}
                height={mobileImage.height}
                src={mobileImage.image}
                class="sm:hidden"
            />
        </div>
    </main>
);

export default ColoredInfoCard;