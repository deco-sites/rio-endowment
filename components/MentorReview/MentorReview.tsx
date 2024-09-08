import { ImageWidget, TextArea } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";


/** @title {{name}} */
interface CardProps {
    /**
     * @title Citação
     */
    quote: TextArea;
    /**
     * @title Foto
     */
    photo: {
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
     * @title Nome
     */
    name: string;
    /**
     * @title Turma
     */
    position: string;
}

export interface Props {
    /**
     * @title Título
     */
    title: string;
    /**
     * @title Mentor
     * @maxItems 2
     */
   cards: CardProps[];
    /**
     * @title Texto do Botão
     */
    ctaText: string;
    /**
     * @title Link do Botão
     */
    ctaLink: string;
}

const MentorReview = ({ title, cards, ctaLink, ctaText }: Props) => (
    <main class="flex flex-col gap-14 px-4 mb-24 md:mb-40">
        <h1 class="font-poppins font-medium text-3xl text-center text-blue-100">{title}</h1>
        <div class="flex flex-col gap-14 justify-center lg:flex-row lg:gap-20">
            {cards.map(({ name, photo, position, quote }) => (
                <div class="py-4 px-8 border border-gray-400 rounded-2xl max-w-[451px]">
                    <p class="text-5xl/tight text-blue-100">“</p>
                    <p class="text-black-100 text-xl/6 tracking-tighter mb-6">
                        {quote}
                    </p>
                    <div class="flex items-center gap-3.5">
                        <Image
                            alt={name}
                            src={photo.image}
                            width={photo.width}
                            height={photo.height}
                            class="rounded-full" 
                        />
                        <span class="flex flex-col gap-2">
                            <p class="text-xs/4 text-black-200">{name}</p>
                            <p class="text-xs/4 text-gray-800">{position}</p>
                        </span>
                    </div>
                </div>
            ))}
        </div>
        <a
            class="font-medium block w-fit mx-auto rounded-full border border-blue-100 px-4 py-2.5 text-bas/5 text-blue-100"
            href={ctaLink}
        >
            {ctaText}
        </a>
    </main>
);

export default MentorReview;