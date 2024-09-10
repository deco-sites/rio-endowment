import { RichText } from "apps/admin/widgets.ts";

export interface Props {
    title: RichText;
    description: RichText;
    ctaText: string;
    ctaLink: string;
}

const DonateDisclaimer = ({ ctaLink, ctaText, description, title }: Props) => (
    <main class="px-4 my-24 mx-auto max-w-7xl md:px-54 md:my-32">
        <div class="font-poppins mb-3" dangerouslySetInnerHTML={{ __html: title }} />
        <div class="font-poppins mb-8" dangerouslySetInnerHTML={{ __html: description }} />
        <a href={ctaLink} class="text-xl/5 px-6 py-4 w-fit text-blue-100 rounded-full border border-blue-100">
            {ctaText}
        </a>
    </main>
);

export default DonateDisclaimer;