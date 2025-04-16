import Form from "next/form";
import { AiOutlineSearch } from 'react-icons/ai';

export function SearchBar({ query }: { query?: string | undefined }) {
    return (
        <Form action="/resultados" formMethod="get" scroll={false} className='relative w-full'>
            <input
                name="query"
                defaultValue={query}
                placeholder="Poupe seu tempo pesquisando..."
                className="text-base md:text-base w-full p-3 mt-6 border border-black rounded-[8px] 
                    shadow-xl focus:outline-none focus:border-primary transition-all duration-300"
            />
            <button className='absolute right-2 top-1/3 -translate-y-0 mt-1 p-3 rounded-[8px] bg-neutral-800'>
                <AiOutlineSearch color='white' className='h-4' />
            </button>
        </Form>
        
    );
}
