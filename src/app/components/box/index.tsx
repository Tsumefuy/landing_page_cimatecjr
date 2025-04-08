

interface Params {
    name: string;
    img: string;
}

interface BoxProps {
    params: Params;
}

export function Box({ params }: BoxProps) {
    return(
        <div className="h-[275px] w-[300px] bg-gray-600 p-5 rounded-xl border-2 border-transparent shadow-lg hover:border-primary transition-all duration-300">
            <div className="h-[170px] flex flex-col bg-white rounded-xl justify-center text-center">
                <p>{params.name}</p>
            </div>
            <div className="h-[50px] bg-white rounded-lg mt-2 flex items-center justify-center">
                <p className="text-gray-600 text-sm">{params.name}</p>
            </div>
        </div>
    )
}