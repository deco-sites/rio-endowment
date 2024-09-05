import { ImageWidget, RichText } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { clx } from "site/sdk/clx.ts";

/** @title {{cardTitle}} */
interface InfoCardProps {
    /**
     * @title Link
     */
    link: string;
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
     * @title Ano do relatório
     */
    cardTitle: string;
    /**
     * @title Descrição
     */
    description: RichText;
}

/** @title {{title}} */
export interface Props {
    title: RichText;
    cards: InfoCardProps[];
}

const Reports = ({ cards, title }: Props) => (
    <div class="block mb-20 lg:mb-48">
        <h1 class="font-poppins text-2xl/7 mb-20 px-16 lg:text-3xl/relaxed lg:p-0" dangerouslySetInnerHTML={{ __html: title}}/>

        <div class="flex flex-wrap gap-10 justify-center px-5 lg:p-0">
            {cards.map(({ cardTitle, description, height, link, image, width }) => (
                <a href={link} class="flex flex-col rounded-3xl overflow-hidden">
                    <Image
                        src={image}
                        width={width}
                        height={height}
                        alt={cardTitle}
                    />
                    <div class={clx(
                        "flex flex-col gap-6 px-8 py-5 bg-white-200 max-w-[456px]",
                        "lg:pt-5 lg:px-7 lg:pb-6"
                    )}>
                        <h3 class="font-bold text-3xl/9 text-blue-100">{cardTitle}</h3>
                        <span class="font-poppins text-xl/8" dangerouslySetInnerHTML={{ __html: description }} />
                    </div>
                </a>
            ))}
        </div>
    </div>
)

export default Reports;