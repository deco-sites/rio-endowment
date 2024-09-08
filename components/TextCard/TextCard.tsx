import { ImageWidget, RichText } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { clx } from "site/sdk/clx.ts";

/** @title {{cardTitle}} */
interface Card {
    /**
     * @title Ícone
     */
    icon: ImageWidget;
    /**
     * @title Largura
     */
    width: number;
    /**
     * @title Altura
     */
    height: number;
    /**
     * @title Título do card
     */
    cardTitle: string;
    /**
     * @title Texto do card
     */
    cardText: string;
}

export interface Props {
    /**
     * @title Texto da sessão
     */
    text: RichText;
    /**
     * @title Cards
     */
    cards: Card[];
}

const TextCard = ({ text, cards }: Props) => (
    <main class="px-4 max-w-6xl mx-auto mb-24 md:mb-40">
        <h1 class="font-poppins font-semibold text-blue-100 text-5xl leading-9 mb-8 sm:flex">
            Seleção de <span class="block w-fit px-2.5 bg-green-400 h-10 ">alunos</span>
        </h1>
        <div
            class="font-poppins mb-8 flex lg:mb-14 max-w-[938px]"
            dangerouslySetInnerHTML={{ __html: text }}
        />
        <div class={clx(
            "flex flex-col items-center gap-12",
            "sm:flex-row sm:flex-wrap sm:justify-center",
            "xl:justify-between"
        )}>
            {cards.map(({ cardText, cardTitle, height, icon, width }, index) => (
                <div class={clx(
                    `flex flex-col items-center justify-center rounded-full px-8 size-[300px]`,
                    (index + 1)  % 2 === 0 ? "bg-blue-100" : "bg-white-300"
                )}>
                    <Image
                        src={icon}
                        width={width}
                        height={height}
                        alt={cardTitle}
                        class="mb-5"
                    />
                    <p class={clx(
                        "font-poppins font-medium text-base text-center",
                        "[&_span]:leading-none [&_span]:tracking-tighter",
                        (index + 1) % 2 === 0 ? "text-green-100" : "text-blue-100"
                    )}>
                        {cardTitle}
                    </p>
                    <p class={clx(
                        "font-poppins font-medium text-base text-center",
                        (index + 1) % 2 === 0 ? "text-white" : "text-gray-700"
                    )}>
                        {cardText}
                    </p>
                </div>
            ))}
        </div>
    </main>
);

export default TextCard;