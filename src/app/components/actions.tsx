"use server";

export async function fetchData(value: string) {
    console.log("Buscando dados para:", value);
    return { success: true, data: `Resultado para: ${value}` };
}
