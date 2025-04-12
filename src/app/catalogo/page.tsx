import { Metadata } from "next";
import { Box } from "../components/box";
import { SearchBar } from "../components/searchBar";


interface PortalGunsData {
    id: number;
    name: string;
    img: string;
    description: string;
}

interface CatalogProps {
    data: PortalGunsData[];
}


export const metadata: Metadata = {
    title: `Catálogo`,
  }

export default async function Catalogo() {
    const data = Array.from({ length: 8 }, (_, i) => ({
        id: i + 1,
        name: `Produto ${i + 1}`,
        img: `Imagem ${i + 1}`,
        description: "Descrição"
    }));

    return (
        <div className="flex flex-col items-center justify-center w-full px-4">
            <section className="mt-24 mb-12 w-full max-w-7xl text-center">
                <div className="mb-10 flex justify-center">
                    <div className="w-full max-w-[900px]">
                        <SearchBar />
                    </div>
                </div>
                <h1 className="text-primary font-bold text-3xl md:text-4xl tracking-widest mb-8">
                    CATÁLOGO
                </h1>
                <div className="w-full flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full max-w-5xl">
                        {data.map((item, index) => (
                            <div key={index} className="flex justify-center">
                                <Box key={index} data={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}