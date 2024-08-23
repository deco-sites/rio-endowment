import { ImageWidget } from "apps/admin/widgets.ts";

export interface SocialProps {
    /** @title {{alt}} */
    icon: {
        /**
         * @title Imagem do Logo
         */
        src: ImageWidget;
        /**
         * @title Texto alternativo 
         */
        alt: string;
        /**
         * @title Largura 
         */
        width: number;
        /** 
         * @title Altura 
         */
        height: number;
    };
    /** @title Link da Rede Social */
    href: string;
}