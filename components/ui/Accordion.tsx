import { ImageWidget, RichText } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { clx } from "site/sdk/clx.ts";

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
     */
    link: string;
}

interface CardProps {
    photo: {
        image: ImageWidget;
        width: number;
        height: number;
    }
    name: string;
    position: RichText;
    socialMedias: SocialMediaProps[];
}

export interface Props {
    title: string;
    description?: string;
    cards: CardProps[];
    initOpen: boolean;
    cardFormat: "simple" | "image-highlight";
}

const Accordion = ({ title, description, cards, cardFormat, initOpen }: Props) => (
    <main class="max-w-7xl mx-auto mt-28">
        <div class="collapse collapse-arrow">
            <input type="checkbox" name="my-accordion-2" checked={initOpen} />
            <div class="collapse-title pb-8">
                <p class="font-semibold font-poppins text-4xl/10 text-blue-100 mb-3">
                    {title}
                </p>
                <p class="font-poppins text-lg/7 text-gray-900">
                    {description}
                </p>
            </div>
            <div class="collapse-content flex justify-center flex-wrap gap-14 sm:justify-start">
                {cards.map(({ name, photo, position, socialMedias }) => (
                    <>
                        {cardFormat === "simple" && (
                            <div class="flex flex-col gap-6 w-full py-4 px-8 border border-gray-300/50 rounded-2xl max-w-[345px]">
                                <div class="flex gap-6 items-center">
                                    <Image
                                        alt={name}
                                        src={photo.image}
                                        width={photo.width}
                                        height={photo.height}
                                        class="rounded-full border border-gray-400"
                                    />

                                    <p class="font-semibold font-poppins text-lg/6 text-blue-100">
                                        {name}
                                    </p>
                                </div>
                                <div class="font-poppins" dangerouslySetInnerHTML={{ __html: position }} />
                                <div class="flex items-center gap-4">
                                    {socialMedias?.map(({ height, icon, name, width, link }) => (
                                        <a class="w-fit" href={link}>
                                            <Image
                                                alt={name}
                                                src={icon}
                                                width={width}
                                                height={height}
                                            />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                        {cardFormat === "image-highlight" && (
                            <div class="flex flex-col gap-6 w-full rounded-2xl max-w-[312px] overflow-hidden shadow-card">
                                <div class="flex gap-6 items-center">
                                    <Image
                                        alt={name}
                                        src={photo.image}
                                        width={photo.width}
                                        height={photo.height}
                                    />

                                </div>
                                <div class="flex flex-col gap-2.5 bg-white -mt-14 rounded-2xl py-12 px-6">
                                    <p class="font-semibold font-poppins text-lg/6 text-blue-100">
                                        {name}
                                    </p>
                                    <div class="font-poppins" dangerouslySetInnerHTML={{ __html: position }} />
                                    <div class="flex items-center gap-4">
                                        {socialMedias?.map(({ height, icon, name, width, link }) => (
                                            <a class="w-fit" href={link}>
                                                <Image
                                                    alt={name}
                                                    src={icon}
                                                    width={width}
                                                    height={height}
                                                />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                        </div>
                        )}
                    </>
                ))}
            </div>
            <span class={clx(
                "w-full h-0.5",
                "bg-gradient-to-r from-pink-100 from-[8.49%] via-green-100 via-[48.91%] to-blue-200 to-100%"
            )} />
        </div>
    </main>
);

export default Accordion