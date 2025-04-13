import { Box } from "../components/box";
import { SearchBar } from "../components/searchBar";

export default async function Resultados({
    searchParams
}: {
    searchParams: { [query: string]: string | string[] | undefined};
 }) {

    type PortalGun = {
        id: number;
        name: string;
        img: string;
        description: string;
    }

    const query = searchParams.query as string;

    const guns = await prisma?.catalog.findMany({
        where: {
            name: {
                contains: 'Portal'
            },
        },
    });

    console.log(guns)

    return (
        <div className="flex flex-col items-center justify-center w-full px-4">
            <section className="mt-24 mb-12 w-full max-w-7xl text-center">
                <div className="mb-10">
                    <SearchBar query={query}/>
                </div>
                <h1 className="text-primary font-bold text-3xl md:text-4xl tracking-widest mb-8">
                    CATÁLOGO
                </h1>
                <div className="w-full flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full max-w-5xl">
                        {guns?.map((gun: PortalGun) => (
                            <div className="flex justify-center">
                                <Box data={gun} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}