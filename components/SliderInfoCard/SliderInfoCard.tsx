import { ImageWidget, RichText } from "apps/admin/widgets.ts";
import { useId } from "site/sdk/useId.ts";
import Image from "apps/website/components/Image.tsx";
import Slider from "site/components/ui/Slider.tsx";
import { useDevice } from "@deco/deco/hooks";
import { type Section } from "@deco/deco/blocks";
interface ImageProps {
    /**
     * @title Imagem
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
     * @title Texto alternativo
     */
    alt: string;
}
/** @title Card */
interface InfoCardProps {
    /**
     * @title Imagem Mobile
     */
    imageMobile: ImageProps;
    /**
     * @title Imagem Desktop
     */
    imageDesktop: ImageProps;
    /**
     * @title Texto
     */
    text: Section;
}
export interface Props {
    /**
     * @title Título
     */
    title: RichText;
    /**
     * @title Cards
     */
    infoCards: InfoCardProps[];
}
const SliderInfoCard = ({ title, infoCards }: Props) => {
    const id = useId();
    const device = useDevice();
    return (<main id={id} class="px-4 mb-24 max-w-7xl mx-auto">
            <div class="mt-[76px] mb-8 [&_span]:leading-none [&_span]:tracking-tighter" dangerouslySetInnerHTML={{ __html: title }}/>
            {device !== "desktop" ? (<div class="flex flex-col gap-14">
                    {infoCards.map(({ imageMobile, text }) => (<div class="bg-gray-500 rounded-[40px] overflow-hidden">
                            <Image class="sm:w-full" alt={imageMobile.alt} src={imageMobile.image} width={imageMobile.width} height={imageMobile.height}/>
                            <div class="pl-8 py-8 pr-7">
                                <text.Component {...text.props}/>
                            </div>
                        </div>))}
                </div>) : (<>
                    <Slider class="carousel carousel-center gap-14" rootId={id}>
                        {infoCards.map(({ imageDesktop, text }, index) => (<Slider.Item class="carousel-item w-full max-w-[936px]" index={index}>
                                <div class="flex bg-gray-500 rounded-[40px] overflow-hidden">
                                    <Image alt={imageDesktop.alt} src={imageDesktop.image} width={imageDesktop.width} height={imageDesktop.height}/>
                                    <div class="pl-8 py-8 pr-7">
                                        <text.Component {...text.props}/>
                                    </div>
                                </div>
                            </Slider.Item>))}
                    </Slider>
                </>)}
        </main>);
};
export default SliderInfoCard;
