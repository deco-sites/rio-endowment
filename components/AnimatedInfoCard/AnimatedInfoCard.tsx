import { ImageWidget, RichText } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { useScript } from "deco/hooks/useScript.ts";

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
    title: string;
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

const AnimatedInfoCard = ({ description, desktopImage, mobileImage, tabletImage, title }: Props) => {
    function setup () {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const element = entry.target;
                    if (entry.isIntersecting) {
                        element.classList.add('move-right');
                        element.classList.add('move-left');
                    } else {
                        element.classList.remove('move-right');
                        element.classList.remove('move-left');
                    }
                });
            },
            { threshold: [0.45] }
        );
        
        const elementsR = document.querySelectorAll('.move-initial-r');
        elementsR.forEach((el) => observer.observe(el));
        const elementsL = document.querySelectorAll('.move-initial-l');
        elementsL.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }

    return (
        <>
            <main class="flex flex-col gap-20 px-4 mb-20 lg:mb-44 lg:flex-row lg:px-0 lg:max-w-[1054px] lg:mx-auto">
                <div class="move-initial-r flex flex-col gap-6 justify-center">
                    <div
                        class="font-poppins font-medium text-blue-100 text-3xl/tight"
                        dangerouslySetInnerHTML={{ __html: title }}
                    />
                    <div class="flex flex-col gap-5 md:justify-center" dangerouslySetInnerHTML={{ __html: description }} />
                </div>

                <Image
                    width={desktopImage.width}
                    alt={desktopImage.alt}
                    height={desktopImage.height}
                    src={desktopImage.image}
                    class="move-initial-l hidden rounded-2xl lg:block transition-shadow duration-500 hover:shadow-infocard-hover"
                />
                <Image
                    width={tabletImage.width}
                    alt={tabletImage.alt}
                    height={tabletImage.height}
                    src={tabletImage.image}
                    class="move-initial-l hidden rounded-2xl sm:block lg:hidden"
                />
                <Image
                    width={mobileImage.width}
                    alt={mobileImage.alt}
                    height={mobileImage.height}
                    src={mobileImage.image}
                    class="move-initial-l rounded-2xl mx-auto sm:hidden"
                />
            </main>
            <script
                type="module"
                dangerouslySetInnerHTML={{
                    __html: useScript(setup)
                }}
            />
        </>
    );
}

export default AnimatedInfoCard;