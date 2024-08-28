import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Slider from "site/components/ui/Slider.tsx";
import { useId } from "site/sdk/useId.ts";
import { useScript } from "deco/hooks/useScript.ts";

interface ClassesSliderProps {
    image: ImageWidget;
    width: number;
    height: number;
    alt: string;
    classTitle: string;
}

export interface Props {
    sliderTitle: string;
    sliderItems: ClassesSliderProps[];
}

const ClassesSlider = ({ sliderItems, sliderTitle }: Props) => {
    const id = useId();

    const activeSlideScale = () => {
        const activeDot = Array.from(document.querySelectorAll(".classes-slider-dot")).filter((dot: any) => {
            return dot.disabled === true;
        })[0].value

        // Array.from(document.querySelectorAll(".classes-slider-item")).filter((slide: any) => {
        //     slide.value.toString() === activeDot ? slide.style.transform = "scale(1.15)" : slide.style.transform = "scale(1)" ;
        // })[0]
    }

    return (
        <main id={id} class="flex flex-col items-center max-w-[1200px] mx-auto mt-36">
            <h1 class="font-medium font-poppins text-blue-100 text-3xl mb-14">{sliderTitle}</h1>

            <div class="flex gap-8 mb-8">
                {sliderItems.map((item, index) => (
                    <div hx-on:click={useScript(activeSlideScale)}>
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
                    {sliderItems.map(({ alt, height, image, width }, index) => (
                        <Slider.Item class="classes-slider-item carousel-item items-center transition-all" value={index} index={index}>
                            <Image
                                alt={alt}
                                src={image}
                                width={width}
                                height={height}
                            />
                        </Slider.Item>
                    ))}
                </Slider>
            </div>
        </main>
    )
}

export default ClassesSlider;