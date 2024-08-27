import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Slider from "site/components/ui/Slider.tsx";
import { useId } from "site/sdk/useId.ts";

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
    const id = useId()

    return (
        <main>
            <h1>{sliderTitle}</h1>

            <div class="flex gap-8">
                {sliderItems.map((item, index) => (
                    <Slider.Dot additionalClasses="disabled:font-bold" index={index}>
                        {item.classTitle}
                    </Slider.Dot>
                ))}
            </div>
            <Slider class="carousel carousel-center" rootId={id}>

                {sliderItems.map(({ alt, height, image, width }, index) => (
                    <Slider.Item class="carousel-item" index={index}>
                        <Image
                            alt={alt}
                            src={image}
                            width={width}
                            height={height}
                        />
                    </Slider.Item>
                ))}
            </Slider>
        </main>
    )
}

export default ClassesSlider;