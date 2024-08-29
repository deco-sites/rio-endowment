import { RichText } from "apps/admin/widgets.ts";

export interface Props {
    title: RichText;
    description: RichText;
    ctaText: string;
    ctaLink: string;
}

const Newsletter = ({ ctaLink, ctaText, description, title }: Props) => (
    <main class="py-8  bg-gradient-to-b from-white from-0% via-green-200 via-[66.13%] to-green-300 to-100%">
        <h1 class="font-medium text-[40px] leading-tight" dangerouslySetInnerHTML={{ __html: title }} />
        <div class="font-poppins font-medium text-base" dangerouslySetInnerHTML={{ __html: description }} />
        <a
            class="block w-fit font-medium text-blue-100 leading-5 px-4 py-2.5 mt-5 mx-auto border border-blue-100 rounded-full"
            href={ctaLink}
            alt={title}
        >
            {ctaText}
        </a>
    </main>
);

export default Newsletter;