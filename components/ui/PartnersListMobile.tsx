import Image from "apps/website/components/Image.tsx";
import { PartnersListProps } from "site/types/PartnersListProps.ts";
import { clx } from "site/sdk/clx.ts";
import { hexToRgba } from "site/utils/hexToRgba.ts";
import Slider from "site/components/ui/Slider.tsx";
import { useId } from "site/sdk/useId.ts";
import Icon from "site/components/ui/Icon.tsx";
import { useScript } from "deco/hooks/useScript.ts";

export interface Props {
    partnersList: PartnersListProps[];
}

const PartnersList = ({ partnersList }: Props) => {
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
            <main class={clx(
                "scroll-animate",
                "-mt-52 w-full flex justify-center relative",
                "sm:-mt-16 lg:partners-list lg:justify-end lg:h-[300px] lg:mt-0"
            )}>
                <section id={id} class={clx(
                    "max-w-[90%] pb-2 w-full mx-auto relative",
                    "lg:absolute lg:-top-32 lg:carousel lg:overflow-auto lg:whitespace-nowrap"
                )}>
                    <div class="max-w-[90%] pb-2 w-full mx-auto flex relative lg:hidden">
                        <Slider class="carousel carousel-center w-full" rootId={id}>
                            {partnersList.map(({ bgOpened, description, partnerLogo, title }, index) => (
                                <Slider.Item class="carousel-item carousel-center w-full" index={index}>
                                    <div
                                        class="flex flex-col justify-between px-9 py-8 h-[345px] w-full"
                                        style={{ backgroundColor: hexToRgba(bgOpened, 100) }}
                                    >
                                        <Image 
                                            alt={partnerLogo.alt}
                                            src={partnerLogo.image}
                                            width={partnerLogo.width}
                                            height={partnerLogo.height}
                                        />

                                        <div class="">
                                            <h4 class="font-poppins text-white text-[32px] leading-relaxed">{title}</h4>
                                            <p class="font-poppins text-white text-base">{description}</p>
                                        </div>
                                    </div>
                                </Slider.Item>
                            ))}
                        </Slider>
                        <Slider.PrevButton class="absolute -translate-y-1/2 top-1/2 -left-3 disabled:hidden z-20">
                            <Icon id="RoundedLeftArrow" width={28} height={27} strokeWidth={1} />
                        </Slider.PrevButton>
                        <Slider.NextButton class="absolute -translate-y-1/2 top-1/2 -right-3 disabled:hidden z-20">
                            <Icon id="RoundedRightArrow" width={28} height={27} strokeWidth={1} />
                        </Slider.NextButton>
                    </div>
                </section>
            </main>
            <script
                type="module"
                dangerouslySetInnerHTML={{
                    __html: useScript(setup)
                }}
            />
        </>
    )
}

export default PartnersList;