'use server'

import { Box } from "../components/box";
import { SearchBar } from "../components/searchBar";

export default async function Catalogo() {
    const data = Array.from({ length: 8 }, (_, i) => ({
        name: `Produto ${i + 1}`,
        img: `Imagem ${i + 1}`
    }));

    return (
        <div className="flex flex-col items-center justify-center w-full px-4">
            <SearchBar />
            <section className="mt-12 mb-12 w-full max-w-7xl text-center">
                <h1 className="text-primary font-bold text-3xl tracking-widest mb-8">
                    CATÁLOGO
                </h1>
                <div className="w-full flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full max-w-5xl">
                        {data.map((item, index) => (
                            <div key={index} className="flex justify-center">
                                <Box key={index} params={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}