import { Color, ImageWidget, TextArea } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Slider from "site/components/ui/Slider.tsx";
import { useId } from "site/sdk/useId.ts";
import Icon from "site/components/ui/Icon.tsx";

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

    return (
        <main class="flex flex-col gap-14  w-full pt-9 pb-28" style={{ backgroundColor: bgSection }}>
            <h1 class="font-poppins font-medium text-white text-center text-3xl leading-relaxed">
                {titleSection}
            </h1>
    
            <div class="flex">
                <Slider class="carousel carousel-center col-span-full row-span-full space-x-14 px-56" rootId={id}>
                    {partners.map(({ firmLogo, name, position, quoteHighlight, quoteMain, photo, height, width }, index) => (
                        <Slider.Item class="classes-slider-item carousel-item" index={index}>
                            <Image
                                alt={name}
                                src={photo}
                                width={width}
                                height={height}
                            />
                            <div class="flex flex-col justify-between max-w-[491px]">
                                <span class="flex items-start pr-2">
                                    <Icon id="Quotes" width={20} height={15} class="pt-0.5" />
                                    <h2 class="font-light font-poppins text-white text-3xl/9 indent-[74px]">
                                        {quoteHighlight}
                                    </h2>
                                </span> 

                                <p class="font-poppins font-light text-white text-base/snug px-3">
                                    {quoteMain}
                                </p>

                                <div class="flex justify-between items-center">
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
            </div>
        </main>
    )
};

export default PartnerSlider;