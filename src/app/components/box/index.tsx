

interface Params {
    name: string;
    img: string;
}

interface BoxProps {
    params: Params;
}

export function Box({ params }: BoxProps) {
    return(
        <div className="bg-gray-600 p-5 rounded-xl border border-gray-800 shadow-lg hover:border-primary transition-all duration-300">
            <div className="flex flex-col h-[140px] md:h-[160px] bg-white rounded-xl justify-center text-center">
                <p>{params.name}</p>
            </div>
            <div className="h-10 bg-white rounded-lg mt-2 flex items-center justify-center">
                <p className="text-gray-600 text-sm">{params.name}</p>
            </div>
        </div>
    )
}