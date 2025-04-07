

export function Box() {
    return(
        <div className="bg-zinc-950 p-5 rounded-xl">
                    <div className="bg-gray-500 p-5 rounded-xl border-2 border-transparent hover:border-primary transition-all duration-100">
                        <div className="flex flex-col h-[140px] md:h-[160px] bg-white rounded-xl justify-center text-center">
                            <p></p>
                        </div>
                        <div className="h-10 bg-white rounded-lg mt-2 flex items-center justify-center">
                            <p className="text-gray-600 text-sm"></p>
                        </div>
                    </div>
        </div>
    )
}