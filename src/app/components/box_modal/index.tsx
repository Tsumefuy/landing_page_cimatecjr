/*interface PortalGunData {
    id: number;
    name: string;
    img: string;
    description: string;
}

interface BoxProps {
    data: PortalGunData;
}*/

export function BoxModal(/*{ data }: BoxProps*/) {

    /*const data = Array.from({ length: 8 }, (_, i) => ({
        id: i + 1,
        name: `Produto ${i + 1}`,
        img: `Imagem ${i + 1}`,
        description: "Descrição"
    }));*/

    return(
        <>
            <div className="h-[275px] w-[300px] bg-neutral-800 p-5 rounded-xl border-2 border-transparent 
                    shadow-lg"
            >
                <div className="h-[170px] flex flex-col bg-white rounded-xl justify-center text-center">
                    <p>Produto</p>
                </div>
                <div className="h-[50px] bg-white rounded-lg mt-2 flex items-center justify-center">
                    <p className="text-gray-600 text-sm">Produto</p>
                </div>
            </div>
        </>
        
    )
}