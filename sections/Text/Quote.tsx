import { TextArea } from "apps/admin/widgets.ts";

export interface Props {
    /**
     * @title Citação principal
     */
    quoteMain: TextArea;
    /**
     * @title Nome
     */
    name: string;
    /**
     * @title Posição
     */
    position: string;
}

const Quote = ({ name, position, quoteMain }: Props) => (
    <div class="flex flex-col">
        <p class="font-poppins font-medium  text-black-100 text-base/snug mb-3.5 sm:text-xl sm:mb-16 lg:text-3xl lg:tracking-tighter">{quoteMain}</p>
        <span class="font-poppins font-medium  text-black-100 text-sm/5 mb-2">{name}</span>
        <span class="font-poppins font-medium  text-gray-600 text-sm/5 max-w-72">{position}</span>
    </div>
)

export default Quote;