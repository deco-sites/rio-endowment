import { Color, ImageWidget } from "apps/admin/widgets.ts";

/** @title {{title}} */
export interface PartnersListProps {
    /**
     * @title Logo do Parceiro
     */
    partnerLogo: {
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
         * @title Texto alternativo
         */
        alt: string
    }
    /**
     * @title Cor de fundo para quando o card estiver fechado
     */
    bgClosed: Color;
    /**
     * @title Cor de fundo para quando o card estiver aberto
     */
    bgOpened: Color;
    /**
     * @title Título
     */
    title: string;
    /**
     * @title Descrição
     */
    description: string;
}