import { ImageWidget, RichText } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface InfoCardProps {
    image: ImageWidget;
    width: number;
    height: number;
    cardTitle: string;
    description: RichText;
}

export interface Props {
    title: RichText;
    cards: InfoCardProps[];
}

const Reports = ({ cards, title }: Props) => (
    <div class="block mb-48">
        <h1 class="font-poppins text-3xl/relaxed mb-20" dangerouslySetInnerHTML={{ __html: title}}/>

        <div class="flex gap-10 justify-center">
            {cards.map(({ cardTitle, description, height, image, width }) => (
                <div class="flex flex-col rounded-3xl overflow-hidden">
                    <Image
                        src={image}
                        width={width}
                        height={height}
                        alt={cardTitle}
                    />
                    <div class="flex flex-col gap-6 pt-5 px-7 pb-6 bg-white-200 max-w-[456px]">
                        <h3 class="font-bold text-3xl text-blue-100 leading-9">{cardTitle}</h3>
                        <span class="font-poppins text-xl" dangerouslySetInnerHTML={{ __html: description }} />
                    </div>
                </div>
            ))}
        </div>
    </div>
)

export default Reports;