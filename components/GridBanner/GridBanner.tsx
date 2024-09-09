import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { useScript } from "deco/hooks/useScript.ts";
import { clx } from "site/sdk/clx.ts";

/** @title {{alt}} */
interface BannerProps {
    /** 
     * @title Imagem
     */
    image: ImageWidget;
    /** 
     * @title Texto Alternativo
     */
    alt: string;
    /** 
     * @title Altura
     */
    height: number;
    /** 
     * @title Largura
     */
    width: number;
    /** 
     * @title Link
     * @description Caso o banner não tenha redirecionameto, pode manter o campo vazio
     */
    link?: string;
}

/** @title Linha de Banners */
interface LineProps {
    /** 
     * @title Banner
     */
    images: BannerProps[];
    /** 
     * @title Selecione o alinhamento vertical das imagens
     */
    verticalAlign: "start" | "center" | "end";
}

/** @title Grade de Banners */
export interface Props {
    /**
     * @title Título 
     */
    sectionTitle: string;
    /**
     * @title Descrição 
     */
    sectionDescription: string;
    /**
     * @title Linha de Banners 
     * @description Adicione uma linha para inserir suas imagens
     */
    lines: LineProps[];
}

const GridBanner = ({ lines, sectionDescription, sectionTitle }: Props) => {
    function setup () {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-up');
                } else {
                    entry.target.classList.remove('animate-fade-up');
                }
            });
        });

        document.querySelectorAll('.scroll-animate').forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }

    return (
        <>
            <section class="block mb-32 px-4 lg:px-0">
                <h1 class={clx(
                    "scroll-animate",
                    "font-medium text-center text-blue-100 text-2xl/7",
                    "lg:text-3xl/relaxed"
                )}>
                    {sectionTitle}
                </h1>
                <p class="scroll-animate text-black-100 text-center text-sm/5 mb-14 lg:text-xl/loose">{sectionDescription}</p>
        
                <div class="flex flex-col gap-5">
                    {lines.map(({ images, verticalAlign }) => (
                        <div class="scroll-animate flex gap-x-2 gap-y-6 justify-center flex-wrap lg:gap-5" style={{ alignItems: verticalAlign }}>
                            {images.map(({ alt, height, image, width, link }) => (
                                <a href={link} alt={alt}>
                                    <Image
                                        alt={alt}
                                        src={image}
                                        width={width}
                                        height={height}
                                    />
                                </a>
                            ))}
                        </div>
                    ))}
                </div>
            </section>
            
            <script
                type="module"
                dangerouslySetInnerHTML={{
                    __html: useScript(setup)
                }}
            />
        </>
    );
}

export default GridBanner;