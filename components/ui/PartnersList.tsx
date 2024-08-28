import Image from "apps/website/components/Image.tsx";
import { useState } from "preact/hooks";
import { PartnersListProps } from "site/types/PartnersListProps.ts";
import { clx } from "site/sdk/clx.ts";
import { hexToRgba } from "site/utils/hexToRgba.ts";

export interface Props {
    partnersList: PartnersListProps[];
}

const PartnerItem = ({ bgClosed, bgOpened, description, partnerLogo, title }: PartnersListProps) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div
            class={clx(
                "px-7 py-2.5 h-[430px]",
                "transition-all duration-[600ms] overflow-hidden"
            )}
            onClick={handleClick}
            style={{
                backgroundColor: isOpen ? hexToRgba(bgOpened, 100) : hexToRgba(bgClosed, 85),
                width: isOpen ? 466 : 155
            }}
        >
            <Image 
                alt={partnerLogo.alt}
                src={partnerLogo.image}
                width={partnerLogo.width}
                height={partnerLogo.height}
                class="block mx-auto "
            />

            <div class="transition-opacity duration-700 mt-32" style={{ opacity: isOpen ? 100 : 0 }}>
                <h4 class="text-white text-[32px] leading-relaxed">{title}</h4>
                <p class="text-white text-base">{description}</p>
            </div>
        </div>
    )
}

const PartnersList = ({ partnersList }: Props) => (
    <main class="partners-list w-full flex justify-end relative h-[300px]">
        <section class="carousel max-w-[90%] pb-2 w-full overflow-auto whitespace-nowrap absolute -top-32">
            <div class="flex gap-5">
                {partnersList.map(({ bgClosed, bgOpened, description, partnerLogo, title }) => (
                    <PartnerItem
                        bgClosed={bgClosed}
                        bgOpened={bgOpened}
                        description={description}
                        partnerLogo={partnerLogo}
                        title={title}
                    />
                ))}
            </div>
        </section>
    </main>
)

export default PartnersList;