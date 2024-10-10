import Image from "apps/website/components/Image.tsx";
import { useState } from "preact/hooks";
import { clx } from "site/sdk/clx.ts";
import { useId } from "site/sdk/useId.ts";
import { ImageWidget, RichText, TextArea } from "apps/admin/widgets.ts";

/** @title {{name}} */
export interface PartnersListProps {
    /**
     * @title Logo do Parceiro
     */
    partnerLogo: {
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
    }
    /**
     * @title Imagem de fundo
     */
    bgImage: ImageWidget;
    /**
     * @title Nome da empresa
     */
    name: string;
    /**
     * @title Título
     */
    title: string;
    /**
     * @title Descrição
     */
    description: TextArea;
}

export interface Props {
    partnersList: PartnersListProps[];
}

const PartnerItem = ({ bgImage, description, partnerLogo, title, name }: PartnersListProps) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleClick = () => {        
        setIsOpen(!isOpen);
    }

    return (
        <div
            class={clx(
                "px-7 py-2.5 h-[430px] bg-center bg-no-repeat bg-cover",
                "transition-all duration-[600ms] overflow-hidden"
            )}
            onClick={handleClick}
            style={{
                width: isOpen ? 466 : 155,
                backgroundImage: `url(${bgImage})`
            }}
        >
            <Image 
                alt={name}
                src={partnerLogo.image}
                width={partnerLogo.width}
                height={partnerLogo.height}
                class="block mr-auto"
            />

            <div class="transition-opacity duration-700 mt-32" style={{ opacity: isOpen ? 100 : 0 }}>
                <div class="text-white text-3xl/relaxed whitespace-break-spaces">{title}</div>
                <div class="text-white text-base/snug whitespace-break-spaces">{description}</div>
            </div>
        </div>
    )
}

const PartnersList = ({ partnersList }: Props) => {
    const id = useId();

    return (
        <main class={clx(
            "-mt-52 w-full flex justify-center relative",
            "sm:-mt-16 lg:partners-list lg:justify-center lg:h-[300px] lg:mt-0"
        )}>
            <section id={id} class={clx(
                "hidden w-fit max-w-[90%] pb-2 mx-auto relative justify-start",
                "lg:absolute lg:-top-20 carousel lg:flex lg:overflow-auto lg:whitespace-nowrap"
            )}>
                <div class="hidden gap-5 lg:flex">
                    {partnersList.map(({ bgImage, description, partnerLogo, title, name }) => (
                        <PartnerItem
                            bgImage={bgImage}
                            description={description}
                            partnerLogo={partnerLogo}
                            title={title}
                            name={name}
                        />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default PartnersList;