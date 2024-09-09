import { ImageWidget } from "apps/admin/widgets.ts";

/** @title Logo - Footer */
export interface FooterLogo {
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
}