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
    text: string;
    /**
     * @title Texto da descritivo
     */
    description: RichText;
    /**
     * @title Cards
     */
    cards: Card[];
}

const Investment = ({ text, description, cards }: Props) => (
    <main class="px-4 mb-24 md:mb-40">
        <h1 class="font-poppins font-semibold text-5xl text-center text-blue-100 mb-8">
            {text}
        </h1>
        <div class="font-poppins mb-14 max-w-2xl mx-auto" dangerouslySetInnerHTML={{ __html: description }} />

        <div class="flex flex-wrap justify-center gap-8 lg:gap-3.5">
            {cards.map(({ cardText, cardTitle, height, icon, width }, index) => (
                <div class={clx(
                    `flex flex-col items-center px-8 justify-center rounded-badge h-[408px] max-w-[380px]`,
                    (index + 1)  % 2 === 0 ? "bg-gray-500" : "bg-blue-100"
                )}>
                    <Image
                        src={icon}
                        width={width}
                        height={height}
                        alt={cardTitle}
                        class="mb-8"
                    />
                    <p class={clx(
                        "font-poppins font-medium text-2xl text-center mb-3",
                        (index + 1) % 2 === 0 ? "text-blue-100" : "text-white"
                    )}>
                        {cardTitle}
                    </p>
                    <p class={clx(
                        "font-poppins text-base text-center",
                        (index + 1) % 2 === 0 ? "text-blue-100" : "text-white"
                    )}>
                        {cardText}
                    </p>
                </div>
            ))}
        </div>
    </main>
);

export default Investment;