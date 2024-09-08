import { ImageWidget, TextArea } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { clx } from "site/sdk/clx.ts";

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
     * @title Alunos
     * @maxItems 6
     */
    cards: CardProps[];
}

// deno-lint-ignore no-explicit-any
function splitArray(arr: Array<any>, subArrSize: any): number[][] {
    const newArr: number[][] = [];
  
    for (let i = 0; i < arr.length; i += subArrSize) {
      const subArr = arr.slice(i, i + subArrSize);
      newArr.push(subArr);
    }
  
    return newArr;
  }
  

const MentorReview = ({ title, cards }: Props) => {
    const columnCards = splitArray(cards, 2);    

    return (
        <main class="flex flex-col gap-14 px-4 mb-24 md:mb-40">
            <h1 class="font-poppins font-medium text-3xl text-center text-blue-100">{title}</h1>
            <div class={clx(
                "flex flex-col px-6 gap-6 justify-center lg:flex-row",
                "lg:grid lg:grid-cols-[320px_320px_320px] lg:gap-x-4"
            )}>
                {columnCards.map((item, index) => (
                    <div class={clx(
                        "flex flex-col gap-6 items-center",
                        index === 1 ? "lg:mt-14" : ""
                    )}>
                        {item?.map((card: any) => (
                            <div
                            class={clx(
                                "py-4 px-8 border border-gray-400 h-auto rounded-2xl max-w-[451px]",
                                "lg:max-w-80",
                            )}
                            >
                                <p class="text-5xl/tight text-blue-100">“</p>
                                <p class="text-black-100 text-xl/6 tracking-tighter mb-6">
                                    {card?.quote}
                                </p>
                                <div class="flex items-center gap-3.5">
                                    <Image
                                        alt={card?.name}
                                        src={card?.photo.image}
                                        width={card?.photo.width}
                                        height={card?.photo.height}
                                        class="rounded-full" 
                                    />
                                    <span class="flex flex-col gap-2">
                                        <p class="text-xs/4 text-black-200">{card?.name}</p>
                                        <p class="text-xs/4 text-gray-800">{card?.position}</p>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </main>
    );
}

export default MentorReview; 