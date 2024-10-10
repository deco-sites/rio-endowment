import { ImageWidget, RichText } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { useScript } from "@deco/deco/hooks";
/** @title {{alt}} */
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
    /**
     * @title Título
     */
    title: RichText;
    /**
     * @title Texto do Card
     */
    description: RichText;
    /**
     * @title Imagem Desktop
     */
    desktopImage: ImageProps;
    /**
     * @title Imagem Tablet
     */
    tabletImage: ImageProps;
    /**
     * @title Imagem Mobile
     */
    mobileImage: ImageProps;
}
const ColoredInfoCard = ({ description, desktopImage, mobileImage, tabletImage, title }: Props) => {
    function setup() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const element = entry.target;
                if (entry.isIntersecting) {
                    element.classList.add("animate-fade-up");
                }
            });
        }, { threshold: 0.1 });
        const elements = document.querySelectorAll(".scroll-animate");
        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }
    return (<>
            <main class="mb-20 lg:mb-72 lg:max-w-7xl lg:mx-auto">
                <div class="scroll-animate font-poppins py-8 px-4 flex flex-col gap-2 [&_span]:leading-none [&_span]:tracking-tighter sm:pl-12" dangerouslySetInnerHTML={{ __html: title }}/>

                <div class="flex flex-col gap-5 w-full md:flex-row md:justify-center">
                    <Image width={desktopImage.width} alt={desktopImage.alt} height={desktopImage.height} src={desktopImage.image} class="hidden lg:block"/>
                    <Image width={tabletImage.width} alt={tabletImage.alt} height={tabletImage.height} src={tabletImage.image} class="hidden w-full sm:block lg:hidden"/>
                    <Image width={mobileImage.width} alt={mobileImage.alt} height={mobileImage.height} src={mobileImage.image} class="sm:hidden"/>
                    <div class="scroll-animate bg-blue-100 py-8 px-11 font-poppins flex flex-col gap-6 md:justify-center" dangerouslySetInnerHTML={{ __html: description }}/>
                </div>
            </main>
            <script type="module" dangerouslySetInnerHTML={{
            __html: useScript(setup)
        }}/>
        </>);
};
export default ColoredInfoCard;
