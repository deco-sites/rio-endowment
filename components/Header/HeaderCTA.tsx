/** @title Botão Doe Agora */
export interface Props {
    /**
     * @title Texto do botão
     */
    ctaText: string;
    /**
     * @title Link do botão
     */
    link: string;
    /**
     * @title É um link externo?
     * @default false
     */
    isExternal?: boolean;
}

const HeaderCTA = ({ ctaText, link, isExternal }: Props) => (
    <a
        class="block py-2.5 px-4 font-medium text-blue-100 text-base border border-blue-100 rounded-full"
        href={link}
        title={ctaText}
        target={isExternal ? "_blank" : "_self"}
    >
        {ctaText}
    </a>
)

export default HeaderCTA;