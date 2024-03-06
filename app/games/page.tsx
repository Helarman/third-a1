import getData from "../actions/getData";
import Header from "../components/Header";
import ListElement from "../components/ListElement";


const Games = async () => {
    const data = await getData(); // get all data

    const providers = [...new Set(data.map((item: any) => { return item.provider }))]; // discard unnecessary properties and leave only unique values

    const categories = [...new Set(data.map((item: any) => { return item.categories }).flat())]

    return (
        <div className="w-full">
            <Header title="Games" subTitle="Browse games by category or provider" />

            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">


                    <div>
                        <h2 className="uppercase text-xl font-bold text-gray-900 sm:text-2xl mb-5">Categories</h2>
                        <ul>
                            {categories && categories.map((category) => (
                                <li key={category as string}>
                                    <ListElement label={category as string} href={`/games/${category}`} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="uppercase text-xl font-bold text-gray-900 sm:text-2xl mb-5">Providers</h2>
                        <ul>
                            {providers && providers.map((provider) => (
                                <li key={provider as string}>
                                    <ListElement label={provider as string} href={`/games/${provider}`} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Games;