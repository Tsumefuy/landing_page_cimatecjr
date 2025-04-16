import { Carrosel } from "./components/carrosel";
import { SearchBar } from "./components/searchBar";
import { fetchGunsHighligths } from "./actions";

export default async function Home() {

  const guns = await fetchGunsHighligths();

  const noResults = !guns || guns.length === 0;

  const text = [
    {
      question: "Por que comprar uma Portal Gun?",
      answer: "A pergunta deveria ser \"Por que não comprar uma Portal Gun?!\""
    },
    {
      question: "Qual a origem delas?",
      answer: "Você não precisa dessa informação!"
    },
    {
      question: "Quem sou eu?",
      answer: "Essa é definitivamente uma pergunta que um Morty faria, e se for o caso, entrou no site errado, Morty!"
    },
  ]

  return (
    <div className="flex flex-col items-center text-center">
      <section className="mb-24 mt-44 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-primary tracking-wider md:tracking-widest">
          POUPE SEU TEMPO <br /> ADQUIRA SUA PORTAL GUN
        </h1>
        <SearchBar/>
      </section>
      <section className="bg-neutral-950 w-full p-1">
        <h1 className="text-primary font-bold text-3xl tracking-wide md:tracking-widest mt-6">DESTAQUES</h1>
          {noResults ? null : <Carrosel data={guns}/>}
      </section>
      <section className="w-full bg-white py-24 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-green-600 mb-8">Perguntas Estúpidas que o Morty faria</h2>
        <div className="grid md:grid-cols-3 gap-6 text-gray-800 justify-center">
          {text.map((item, index) => (
            <div key={index} className="max-w-[250px] mx-auto">
              <h3 className="text-xl md:text-2xl font-bold text-primary">{item.question}</h3>
              <p className="text-lg">{item.answer}</p>
          </div>
          ))}
        </div>
      </section>
    </div>
  );
}
