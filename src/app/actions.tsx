'use server'

import { supabase } from "@/utils/supabase/server"

export async function fetchGunsCatalog() {
    const { data: guns } = await supabase.from('catalog').select();
    return guns;
}

export async function fetchGunsHighligths() {
    const { data: guns } = await supabase.from('highlights').select();
    return guns;
}

export async function fetchGunsSearched(query: string) {
    const { data: guns } = await supabase.from('catalog').select().ilike('name', `%${query}%`);
    return guns;
}

export interface PortalGun {
    id: number;
    name: string;
    img: string;
    description: string;
}

