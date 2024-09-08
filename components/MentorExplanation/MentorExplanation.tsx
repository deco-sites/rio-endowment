import { ImageWidget, TextArea } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { clx } from "site/sdk/clx.ts";

 interface PersonProps {
    photo: ImageWidget;
    width: number;
    height: number;
    firstName: string;
    lastName: string;
 }

export interface Props {
    bgMentor: ImageWidget;
    people: PersonProps[];
    trajectories: {
        text: TextArea;
        images: Array<{
            image: ImageWidget;
            width: number;
            height: number;
            name: string;
        }>
    };
    customization: TextArea;
    sessions: TextArea
}

const MentorExplanation = ({ bgMentor, people, customization, sessions, trajectories }: Props) => {
    const MentorGrid = ({ bgMentor, people }: Props) => (
        <div
            class={clx(
                "px-8 py-6 mb-14 flex flex-wrap justify-center gap-x-3.5 gap-y-7 rounded-lg max-w-lg",
                "bg-fixed bg-no-repeat bg-cover bg-center",
                "sm:gap-x-4 sm:py-9 lg:mb-0"
            )}
            style={{ backgroundImage: `url(${bgMentor})` }}
        >
            {people.map(({ height, firstName, lastName, photo, width }) => (
                <div class="grid grid-cols-1 grid-rows-[1fr_28px] size-32 rounded-2xl overflow-hidden">
                    <Image
                        alt={firstName}
                        src={photo}
                        width={width}
                        height={height}
                        class={clx(
                            "row-span-full"
                        )}
                    />
                    <span class="bg-white text-center text-xs/7">
                        {firstName} <strong>{lastName}</strong>
                    </span>
                </div>
            ))}
        </div>
    )


    return (
        <main class="flex flex-wrap gap-x-11 justify-center items-center px-4 mb-24 md:mb-40">
            <MentorGrid
                bgMentor={bgMentor}
                people={people}
            />

            <div class="max-w-lg">
                <div class="mb-8">
                    <h2 class="flex gap-1.5 items-end font-poppins text-base/5 text-blue-200 mb-3">
                        <Image 
                            src="https://deco-sites-assets.s3.sa-east-1.amazonaws.com/rio-endowment/c5aa5aeb-0416-41b5-ab45-18436716391b/imagem_2024-09-08_142452176.png"
                            width={24}
                            height={24}
                        />
                        Trajetórias Diversas
                    </h2>
                    <p class="text-black-100 text-sm px-6 mb-3">
                        {trajectories.text}
                    </p>
                    <div class="flex flex-wrap items-center gap-y-5 gap-x-3 px-7">
                        {trajectories.images.map(({ height, image, width, name }) => (
                            <Image
                                src={image}
                                alt={name}
                                height={height}
                                width={width}
                                class="h-fit"
                            />
                        ))}
                    </div>
                </div>
                <div class="mb-8">
                    <h2 class="flex gap-1.5 items-end font-poppins text-base/5 text-blue-200 mb-3">
                        <Image 
                            src="https://deco-sites-assets.s3.sa-east-1.amazonaws.com/rio-endowment/c5aa5aeb-0416-41b5-ab45-18436716391b/imagem_2024-09-08_142452176.png"
                            width={24}
                            height={24}
                        />
                        Personalização
                    </h2>
                    <p class="text-black-100 text-sm px-6">
                        {customization}
                    </p>
                </div>
                <div>
                    <h2 class="flex gap-1.5 items-end font-poppins text-base/5 text-blue-200 mb-3">
                        <Image 
                            src="https://deco-sites-assets.s3.sa-east-1.amazonaws.com/rio-endowment/c5aa5aeb-0416-41b5-ab45-18436716391b/imagem_2024-09-08_142452176.png"
                            width={24}
                            height={24}
                        />
                        Sessões
                    </h2>
                    <p class="text-black-100 text-sm px-6">
                        {sessions}
                    </p>
                </div>
            </div>
        </main>
    );
}

export default MentorExplanation;