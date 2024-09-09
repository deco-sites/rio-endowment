import { clx } from "site/sdk/clx.ts";

interface TopicProps {
    topicTitle: string;
}

export interface Props {
    title: string;
    description: string;
    topics: TopicProps[];
}

const MentoringDisclaimer = ({ description, title, topics }: Props) => (
    <main class="px-4 max-w-[1920px] mx-auto mb-24 md:px-0 md:bg-blue-100 md:mb-40">
        <div class={clx(
            "pl-6 py-8 pr-7 bg-blue-100",
            "md:flex md:pt-24 md:px-14 md:pb-36 md:gap-16 md:justify-center md:bg-transparent md:max-w-6xl md:mx-auto",
            "lg:px-0"
        )}>
            <div class="mb-14 md:w-[45%]">
                <h1 class={clx(
                    "font-poppins font-semibold text-[40px] leading-tight text-white mb-8",
                    "md:text-[64px] md:leading-none"
                )}>
                    {title}
                </h1>
                <p class="font-light text-2xl text-white">
                    {description}
                </p>
            </div>

            <div class="flex flex-col gap-[100px] md:w-[55%]">
                {topics.map(({ topicTitle }) => (
                    <span>
                        <p class="font-poppins text-[40px] leading-9 italic mb-8 text-white">
                            {topicTitle}
                        </p>

                        <span class={clx(
                            "flex w-full h-0.5",
                            "bg-gradient-to-r from-pink-100 from-[8.49%] via-green-100 via-[48.91%] to-blue-200 to-100%"
                        )} />
                    </span>
                ))}
            </div>
        </div>
    </main>
);

export default MentoringDisclaimer;