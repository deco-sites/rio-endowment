import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Slider from "site/components/ui/Slider.tsx";
import { useId } from "site/sdk/useId.ts";
import { useDevice } from "deco/hooks/useDevice.ts";
import { clx } from "site/sdk/clx.ts";
import { useScript } from "deco/hooks/useScript.ts";

/** @title {{classTitle}} */
interface ClassesSliderProps {
    /**
     * @title Nome da turma
     */
    classTitle: string;
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
    /**
     * @title Link da Turma
     */
    link: string;
}

/** @title Turmas */
export interface Props {
    /**
     * @title Título
     */
    sliderTitle: string;
    /**
     * @title Turmas
     */
    sliderItems: {
        /**
         * @title Turmas - Desktop
         */
        desktop: ClassesSliderProps[];
        /**
         * @title Turmas - Tablet
         */
        tablet: ClassesSliderProps[];
        /**
         * @title Turmas - Mobile
         */
        mobile: ClassesSliderProps[];
    };
}

const ClassesSlider = ({ sliderItems, sliderTitle }: Props) => {
    const id = useId();
    const device = useDevice();

    // function scale() {
    //   const observer = new IntersectionObserver(
    //     (entries) => {
    //       entries.forEach((entry) => {
    //         const imgElement = entry.target;
    //         if (entry.intersectionRatio >= 0.8) {
    //           imgElement.classList.add('scale-up');
    //         } else {
    //           imgElement.classList.remove('scale-up');
    //         }
    //       });
    //     },
    //     { threshold: [0.8] }
    //   );
    
    //   const images = document.querySelectorAll('.scale-in');
    //   images.forEach((img) => observer.observe(img));
    
    //   return () => observer.disconnect();
    // }

    return (
        <>
            <main id={id} class={clx(
                "flex flex-col items-center px-4 mt-28 mb-24",
                "lg:max-w-[1200px] lg:mx-auto lg:mt-36 lg:mb-32 lg:p-0"
            )}>
                <h1 class={clx(
                    "font-medium font-poppins text-blue-100 text-2xl text-center mb-8",
                    "lg:text-3xl lg:mb-14"
                )}>
                    {sliderTitle}
                </h1>

                {device === "desktop" && (
                    <>
                        <div class="flex gap-8 mb-8">
                            {sliderItems.desktop.map((item, index) => (
                                <div>
                                    <Slider.Dot
                                        additionalClasses="classes-slider-dot px-2 pb-2.5 font-semibold font-poppins text-gray-100 border-b border-gray-100 disabled:text-blue-300 disabled:border-blue-300"
                                        index={index}
                                    >
                                        {item.classTitle}
                                    </Slider.Dot>
                                </div>
                            ))}
                        </div>

                        <div class="grid grid-cols-[48px_1fr_48px] grid-rows-[1fr_48px_1fr_64px]">
                            <Slider class="carousel carousel-center col-span-full row-span-full space-x-14 px-56 h-[445px]" rootId={id}>
                                {sliderItems.desktop.map(({ alt, height, image, width, link }, index) => (
                                    <Slider.Item class="scale-in classes-slider-item carousel-item items-center transition-all" value={index} index={index}>
                                        <a class="block" href={link}>
                                            <Image
                                                alt={alt}
                                                src={image}
                                                width={width}
                                                height={height}
                                                class="scale-in"
                                            />
                                        </a>
                                    </Slider.Item>
                                ))}
                            </Slider>
                        </div>
                    </>
                )}

                {device === "tablet" && (
                    <div class="flex">
                        <Slider class="carousel carousel-center col-span-full row-span-full space-x-14 px-56 h-[445px]" rootId={id}>
                            {sliderItems.tablet.map(({ alt, height, image, width, link }, index) => (
                                <Slider.Item class="scale-in classes-slider-item carousel-item items-center transition-all" value={index} index={index}>
                                    <a class="block" href={link}>
                                        <Image
                                            alt={alt}
                                            src={image}
                                            width={width}
                                            height={height}
                                            class="scale-in"
                                        />
                                    </a>
                                </Slider.Item>
                            ))}
                        </Slider>
                    </div>
                )}

                {device === "mobile" && (
                    <div class="flex">
                        <Slider class="carousel carousel-center space-x-8" rootId={id}>
                            {sliderItems.mobile.map(({ alt, height, image, width, link }, index) => (
                                <Slider.Item class="scale-in classes-slider-item carousel-item items-center transition-all" value={index} index={index}>
                                    <a class="block" href={link}>
                                        <Image
                                            alt={alt}
                                            src={image}
                                            width={width}
                                            height={height}
                                            class="scale-in"
                                        />
                                    </a>
                                </Slider.Item>
                            ))}
                        </Slider>
                    </div>
                )}
            </main>
            {/* <script
                type="module"
                dangerouslySetInnerHTML={{
                __html: useScript(scale),
                }}
            /> */}
        </>
    )
}

export default ClassesSlider;