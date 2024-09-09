/** @title {{quantity}} */
interface HighlightProps {
    /**
     * @title Quantidade
     */
    quantity: string;
    /**
     * @title Texto
     */
    text: string;
}

export interface Props {
    /**
     * @title Highlights
     */
    highlights: HighlightProps[];
}

const QuantityHighlight = ({ highlights }: Props) => (
    <div class="flex flex-col gap-6 sm:gap-14">
        {highlights.map(({ quantity, text }) => (
            <div>
                <h3 class="font-poppins font-semibold text-3xl/none text-blue-100 md:text-[44px]/none">{quantity}</h3>
                <p class="font-semibold text-sm/5 text-gray-600">{text}</p>
            </div>
        ))}
    </div>
);

export default QuantityHighlight; 