import { RichText } from "apps/admin/widgets.ts";

export interface Props {
    title: RichText;
    description: RichText;
}

const Page404 = ({ title, description }: Props) => (
    <main class="flex flex-col h-full my-52 items-center">
        <div class="mb-16" dangerouslySetInnerHTML={{ __html: title }} />
        <p class="text-9xl/none blur-sm">404</p>
        <div class="mt-8" dangerouslySetInnerHTML={{ __html: description }} />
        <a class="text-blue-100 font-medium border border-blue-100 rounded-lg py-2 px-3.5 mt-6" href="/">
            Voltar para o inicio
        </a>
    </main>
);

export default Page404;