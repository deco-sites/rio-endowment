import { Color, ImageWidget, TextArea } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Slider from "site/components/ui/Slider.tsx";
import { useId } from "site/sdk/useId.ts";
import Icon from "site/components/ui/Icon.tsx";
import { clx } from "site/sdk/clx.ts";
import { useDevice } from "deco/hooks/useDevice.ts";

/** @title {{name}} */
interface FirmLogoProps {
    /**
     * @title Logo
     */
    logo: ImageWidget;
    /**
     * @title Nome da Empresa
     */
    name: string;
    /**
     * @title Largura
     */
    width: number;
    /**
     * @title Altura
     */
    height: number;
    /**
     * @title Link
     * @description Caso não tenha link de direcionamento, mantenha o campo vazio
     */
    link?: string;
}

/** @title {{name}} */
interface PartnerProps {
    /**
     * @title Citação destacada
     */
    photo: ImageWidget;
    /**
     * @title Largura
     */
    width: number;
    /**
     * @title Altura
     */
    height: number;
    /**
     * @title Citação destacada
     */
    quoteHighlight: string;
    /**
     * @title Citação principal
     */
    quoteMain: TextArea;
    /**
     * @title Logo da empresa
     */
    firmLogo: FirmLogoProps;
    /**
     * @title Nome do Sócio
     */
    name: string;
    /**
     * @title Posição do Sócio
     */
    position: string;
}

export interface Props {
    titleSection: string;
    bgSection: Color;
    partners: PartnerProps[];
}

const PartnerSlider = ({ bgSection, partners, titleSection }: Props) => {
    const id = useId();
    const device = useDevice();

    return (
        <main
            id={id}
            class={clx(
                "partner-slider relative",
                "flex flex-col w-full pt-8 px-4 pb-16 gap-20 mb-28",
                "lg:gap-14 lg:pt-9 lg:pb-28"
            )}
            style={{ backgroundColor: bgSection }}
        >
            <h1 class={clx(
                "font-poppins font-medium text-white text-center text-2xl/7",
                "lg:text-3xl lg:leading-relaxed"
            )}>
                {titleSection}
            </h1>
    
            <div class="flex">
                <Slider
                    class={clx(
                        "carousel carousel-center gap-6",
                        "lg:space-x-14 lg:px-56 lg:gap-0"
                    )}
                    rootId={id}
                >
                    {partners.map(({ firmLogo, name, position, quoteHighlight, quoteMain, photo, height, width }, index) => (
                        <Slider.Item
                            class={clx(
                                "classes-slider-item carousel-item w-fit flex-col-reverse gap-8 px-1.5",
                                "lg:gap-6 lg:flex-row"
                            )}
                            index={index}
                        >
                            <Image
                                alt={name}
                                src={photo}
                                width={width}
                                height={height}
                                class={device !== "desktop" ? "w-full" : ""}
                            />
                            <div class="flex flex-col gap-6 lg:max-w-[491px] lg:justify-between">
                                <span class="flex items-start pr-2">
                                    <div class="block pt-0.5 w-5">
                                        <Icon id="Quotes" width={20} height={15} />
                                    </div>
                                    <h2 class="font-light font-poppins text-white text-right text-[28px]/9 indent-[74px] tracking-tighter lg:text-left">
                                        {quoteHighlight}
                                    </h2>
                                </span> 

                                <p class="font-poppins font-light text-white text-base/snug px-3">
                                    {quoteMain}
                                </p>

                                <div class="flex justify-between items-center mt-8 lg:mt-0">
                                    {firmLogo.link ? (
                                        <a href={firmLogo.link}>
                                            <Image
                                                alt={firmLogo.name}
                                                src={firmLogo.logo}
                                                width={firmLogo.width}
                                                height={firmLogo.height}
                                            />
                                        </a>
                                    ) : (
                                        <Image
                                            alt={firmLogo.name}
                                            src={firmLogo.logo}
                                            width={firmLogo.width}
                                            height={firmLogo.height}
                                        />
                                    )}

                                    <span class="flex flex-col gap-1 font-poppins text-right text-white max-w-44">
                                        <h5 class="font-semibold text-base/snug">
                                            {name}
                                        </h5>
                                        <p class="font-light text-xs">
                                            {position}
                                        </p>
                                    </span>
                                </div>
                            </div>
                        </Slider.Item>
                    ))}
                </Slider>
                <Slider.PrevButton class="absolute top-1/2 left-5 disabled:hidden z-20">
                    <Icon id="BigLeftArrow" width={21} height={38} />
                </Slider.PrevButton>
                <Slider.NextButton class="absolute top-1/2 right-5 disabled:hidden z-20">
                    <Icon id="BigRightArrow" width={21} height={38} />
                </Slider.NextButton>
            </div>
        </main>
    )
};

export default PartnerSlider;