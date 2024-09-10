import { ImageWidget, RichText } from "apps/admin/widgets.ts";

/** @title {{name}} */
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
    }
    /**
     * @title Imagem de fundo
     */
    bgImage: ImageWidget;
    /**
     * @title Nome da empresa
     */
    name: string;
    /**
     * @title Título
     */
    title: RichText;
    /**
     * @title Descrição
     */
    description: RichText;
}