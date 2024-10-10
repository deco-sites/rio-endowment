import { ImageWidget } from "apps/admin/widgets.ts";
import { clx } from "site/sdk/clx.ts";
import { useScript } from "@deco/deco/hooks";
/** @title {{name}} */
interface MediaProps {
    /**
     * @title Logo
     */
    image: ImageWidget;
    /**
     * @title Nome do Portal
     */
    name: string;
    /**
     * @title Link do Artigo
     */
    link: string;
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
 * @title Mídia
 */
export interface Props {
    /**
     * @title Título
     */
    title: string;
    /**
     * @title Artigos
     */
    images: MediaProps[];
}
const Media = ({ images, title }: Props) => {
    function setup() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const element = entry.target;
                if (entry.isIntersecting) {
                    element.classList.add('move-right');
                }
                else {
                    element.classList.remove('move-right');
                }
            });
        }, { threshold: [0.45] });
        const elementsR = document.querySelectorAll('.move-initial-r');
        elementsR.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }
    return (<>
            <main class="px-10 mx-auto mb-20 lg:max-w-[1920px] lg:mx-auto">
                <h1 class="move-initial-r font-poppins text-center text-xs/10 text-gray-300 mb-8 sm:text-sm lg:text-base">{title}</h1>
                <div class={clx("grid grid-cols-2 items-center justify-center gap-y-9", "sm:grid-cols-3 lg:grid-cols-4")}>
                    {images.map(({ image, link, name, height, width }) => (<a class="move-initial-r w-fit mx-auto h-fit max-h-full" href={link} title={name} target="_blank">
                            <img width={width} height={height} class="max-h-full" src={image} alt={name}/>
                        </a>))}
                </div>        
            </main>
            <script type="module" dangerouslySetInnerHTML={{
            __html: useScript(setup)
        }}/>
        </>);
};
export default Media;
