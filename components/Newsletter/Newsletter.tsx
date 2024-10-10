import { RichText } from "apps/admin/widgets.ts";
import { useScript } from "@deco/deco/hooks";
export interface Props {
    title: RichText;
    description: RichText;
    ctaText: string;
    ctaLink: string;
}
const Newsletter = ({ ctaLink, ctaText, description, title }: Props) => {
    function setup() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const element = entry.target;
                if (entry.isIntersecting) {
                    element.classList.add("animate-fade-up");
                }
            });
        }, { threshold: 0.1 });
        const elements = document.querySelectorAll(".scroll-animate");
        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }
    return (<>
            <main class="p-8 bg-gradient-to-b from-white from-0% via-green-200 via-[66.13%] to-green-300 to-100%">
                <h1 class="scroll-animate font-poppins font-medium text-[40px]/tight" dangerouslySetInnerHTML={{ __html: title }}/>
                <div class="scroll-animate font-poppins font-medium text-base px-5" dangerouslySetInnerHTML={{ __html: description }}/>
                <a class="scroll-animate block w-fit font-medium text-blue-100 leading-5 px-4 py-2.5 mt-5 mx-auto border border-blue-100 rounded-full" href={ctaLink} alt={title}>
                    {ctaText}
                </a>
            </main>
            <script type="module" dangerouslySetInnerHTML={{
            __html: useScript(setup)
        }}/>
        </>);
};
export default Newsletter;
