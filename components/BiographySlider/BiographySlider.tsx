import { Color, ImageWidget, TextArea } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Slider from "site/components/ui/Slider.tsx";
import { useId } from "site/sdk/useId.ts";
import Icon from "site/components/ui/Icon.tsx";
import { clx } from "site/sdk/clx.ts";
import { useScript } from "deco/hooks/useScript.ts";

/** @title {{name}} */
interface SocialMediaProps {
    /**
     * @title Ícone
     */
    icon: ImageWidget;
    /**
     * @title Nome da Rede Social
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

/** @title {{firstName}} */
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
     * @title Primeiro nome
     */
    firstName: string;
    /**
     * @title Sobrenome
     */
    lastName: string;
    /**
     * @title Posição
     */
    position: string;
    /**
     * @title Biografa
     */
    biography: TextArea;
    /**
     * @title Redes Sociais
     */
    socialMediaLogos: SocialMediaProps[];
}

export interface Props {
    titleSection: string;
    bgSection: Color;
    biographies: PartnerProps[];
} 

const BiographySlider = ({ bgSection, biographies, titleSection }: Props) => {
    const id = useId();
    function setup () {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-up');
                } else {
                    entry.target.classList.remove('animate-fade-up');
                }
            });
        });

        document.querySelectorAll('.scroll-animate').forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }

    return (
        <>
            <main
                id={id}
                class="relative w-full mb-28"
            >
                <div class="scroll-animate flex gap-8 ml-6 lg:ml-28 lg:h-[54px]">
                    <h1 class={clx(
                        "font-poppins font-medium text-blue-100 text-2xl/7 mb-8 sm:mb-8",
                        "lg:text-3xl/none"
                    )}>
                        {titleSection}
                    </h1>
                    <span class="flex gap-6">
                        {biographies?.map(({ firstName, position }, index) => (
                            <Slider.Dot
                                additionalClasses={clx(
                                    "hidden sm:block font-semibold font-poppins text-gray-100 group w-24 pb-5",
                                    "disabled:text-blue-300 disabled:border-b-2 disabled:border-pink-200"
                                )}
                                index={index}
                            >
                                <p class="font-poppins text-left text-blue-100 text-base/5 opacity-50 transition-opacity group-disabled:opacity-100">
                                    {firstName}
                                </p>
                                <p class="font-poppins text-left text-xs/none text-gray-200">
                                    {position}
                                </p>
                            </Slider.Dot>
                        ))}
                    </span>
                </div>
        
                <div class="flex" style={{ backgroundColor: bgSection }}>
                    <Slider
                        class="carousel carousel-center gap-6 px-4 py-11 lg:max-w-7xl lg:mx-auto"
                        rootId={id}
                    >
                        {biographies.map(({ firstName, lastName, biography, photo, height, socialMediaLogos, width }, index) => (
                            <Slider.Item
                                class={clx(
                                    "carousel-item w-fit flex-col gap-8",
                                    "lg:gap-[76px] lg:flex-row"
                                )}
                                index={index}
                            >
                                <Image
                                    alt={firstName}
                                    src={photo}
                                    width={width}
                                    height={height}
                                    class="scroll-animate rounded-[32px] mx-auto"
                                />
                                <div class="scroll-animate flex flex-col gap-6  ">
                                    <h2 class="font-poppins text-blue-400 text-[40px]/none">{firstName} {lastName}, </h2>
                                    <span class="text-blue-400 text-base/tight" dangerouslySetInnerHTML={{ __html: biography }} />
                                    <span>
                                        {socialMediaLogos?.map(({ height, icon, name, width, link }) => (
                                            <a class="w-fit" href={link}>
                                                <Image
                                                    alt={name}
                                                    src={icon}
                                                    width={width}
                                                    height={height}
                                                />
                                            </a>
                                        ))}
                                    </span>
                                </div>
                            </Slider.Item>
                        ))}
                    </Slider>
                    <Slider.PrevButton class="absolute top-1/3 left-5 disabled:hidden z-20 lg:hidden">
                        <Icon id="BigLeftArrow" width={21} height={38} /> 
                    </Slider.PrevButton>
                    <Slider.NextButton class="absolute top-1/3 right-5 disabled:hidden z-20 lg:hidden ">
                        <Icon id="BigRightArrow" width={21} height={38} />
                    </Slider.NextButton>
                </div>
            </main>
            <script
                type="module"
                dangerouslySetInnerHTML={{
                    __html: useScript(setup)
                }}
            />
        </>
    )
};

export default BiographySlider;