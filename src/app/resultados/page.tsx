import { fetchGunsSearched, PortalGun } from "../actions";
import { Box } from "../components/box";
import { SearchBar } from "../components/searchBar";

export default async function Resultados({
    searchParams
}: {
    searchParams: Promise<{ [query: string]: string | string[] | undefined}>;
 }) {
    const query = (await searchParams).query as string;

    const guns = await fetchGunsSearched(query);

    const noResults = !guns || guns.length === 0;

    if (noResults) {
        return (
          <div className="flex flex-col items-center justify-center text-center px-4">
            <div className="mt-24 w-full max-w-[900px]">
              <SearchBar query={query} />
            </div>
            <div className="mt-10">
              <h1 className="font-bold text-3xl">Nenhum resultado encontrado!</h1>
              <p className="text-lg">Wubba lubba dub dub!</p>
            </div>
          </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center w-full px-4">
            <section className="mt-24 mb-12 w-full max-w-7xl text-center">
                <div className="mb-10 flex justify-center">
                    <div className="w-full max-w-[900px]">
                        <SearchBar query={query}/>
                    </div>
                </div>
                <h1 className="text-primary font-bold text-3xl md:text-4xl tracking-widest mb-8">
                    RESULTADOS
                </h1>
                <div className="w-full flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full max-w-5xl">
                        {guns.map((gun: PortalGun, index: number) => (
                            <div key={index} className="flex justify-center">
                                <Box data={gun} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
