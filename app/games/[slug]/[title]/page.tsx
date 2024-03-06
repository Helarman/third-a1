import getData from "@/app/actions/getData";
import Header from "@/app/components/Header"
import { GameProps } from "@/app/types";

interface IParams {
    title: string
}

const Page = async ({ params }: { params: IParams }) => {

    const data = await getData()

    const allCards = data.map((item: GameProps) => { return { title: item.title, seo_title: item.seo_title, identifier: item.identifier, provider: item.provider, categories: item.categories } })

    const card = allCards.find((card: GameProps) => card.seo_title === params.title)

    return (
        <div className="w-full">
            <Header title={params.title} />
            <div className="mx-auto max-w-screen-xl px-4  sm:px-6 sm:py-12 lg:px-8">
                <article
                    className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
                >
                    <div className="rounded-[10px] bg-white p-4 sm:p-6">

                        <div className="flex md:flex-row flex-col">
                            <div className="w-full md:w-1/2">
                                <img className="w-full" src={`https://d2norla3tyc4cn.cloudfront.net/i/s3/${card.identifier}.webp`} alt="" />
                            </div>
                            <div className="w-full md:w-1/2 ml-0 mt-10 md:mt-0 md:ml-10">
                                <h3 className=" text-3xl font-semibold text-gray-900">
                                    {card.title}
                                </h3>

                                <h2 className=" text-lg font-medium text-gray-900">
                                    {card.provider}
                                </h2>
                                <ul className="mt-4 flex flex-wrap gap-1">
                                    {card.categories && card.categories.map((category: string) => (
                                        <li key={category}>
                                            <span
                                                className="whitespace-nowrap rounded-full bg-blue-100 px-2.5 py-0.5 text-xs text-gray-900"
                                            >
                                                {category}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
};

export default Page;