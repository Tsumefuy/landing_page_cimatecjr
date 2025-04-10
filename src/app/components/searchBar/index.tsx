'use client'

import { useState } from 'react';
import { fetchData } from '../actions';

export function SearchBar() {
    const [input, setInput] = useState<string>("");

    const handleChange = async (value: string) => {
        setInput(value); 
        const response = await fetchData(value); 
        console.log(response);
    };

    return (
        <input
            type="text"
            placeholder="Poupe ainda mais seu tempo pesquisando..."
            className="w-full max-w-lg px-4 py-2 mt-6 border border-black rounded-[5px] shadow-xl focus:outline-none focus:border-primary transition-all duration-300"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
        />
    );
}
