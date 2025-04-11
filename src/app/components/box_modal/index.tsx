interface PortalGunData {
    id: number;
    name: string;
    img: string;
    description: string;
}

interface BoxProps {
    data: PortalGunData;
}

export function BoxModal({ data }: BoxProps) {
    return(
        <>
            <div className="h-[275px] w-[300px] bg-gray-600 p-5 rounded-xl border-2 border-transparent 
                    shadow-lg"
            >
                <div className="h-[170px] flex flex-col bg-white rounded-xl justify-center text-center">
                    <p>{data.name}</p>
                </div>
                <div className="h-[50px] bg-white rounded-lg mt-2 flex items-center justify-center">
                    <p className="text-gray-600 text-sm">{data.name}</p>
                </div>
            </div>
        </>
        
    )
}