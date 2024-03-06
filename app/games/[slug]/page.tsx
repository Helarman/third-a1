import getData from "@/app/actions/getData";
import Header from "@/app/components/Header"
import ListElement from "@/app/components/ListElement";
import { GameProps } from "@/app/types";

interface IParams {
    slug: string
}

const Page = async ({ params }: { params: IParams }) => {
    const data = await getData()

    const allCards = data.map((item: any) => { return { title: item.title, seo_title: item.seo_title, provider: item.provider, categories: item.categories } })

    const providerCards = allCards.filter((card: GameProps) => card.provider === params.slug);

    const categoryCard = allCards.filter((card: GameProps) => card.categories.includes(params.slug))

    return (
        <div className="w-full">
            <Header title={params.slug} subTitle={`Browse games in ${params.slug}`} />
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="grid grid-cols-1 gap-4 lg:gap-8">
                    <div>
                        <ul>
                            {categoryCard && categoryCard.map((card: GameProps) => (
                                <li key={card.title}>
                                    <ListElement label={card.title} href={`/games/${params.slug}/${card.seo_title}`}/>
                                </li>
                            ))}
                        </ul>

                        <ul>
                            {providerCards && providerCards.map((card: GameProps) => (
                                <li key={card.title}>
                                     <ListElement label={card.title} href={`/games/${params.slug}/${card.seo_title}`}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Page;