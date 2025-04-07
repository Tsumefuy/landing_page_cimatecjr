import { Carrosel } from "./components/carrosel";
import { SearchBar } from "./components/searchBar";

export default function Home() {
  const data = Array.from({ length: 8 }, (_, i) => ({
    name: `Produto ${i + 1}`,
    img: `Imagem ${i + 1}`
  }));

  const text = [
    {
      question: "Por que comprar uma arma de portal?",
      answer: "A pergunta deveria ser \"Por que não comprar uma arma de portal?!\""
    },
    {
      question: "Qual a origem delas?",
      answer: "Você não precisa dessa informação"
    },
    {
      question: "Quem sou eu?",
      answer: "Essa é uma pergunta que um Morty faria, se for o caso, entrou no site errado, Morty!"
    },
  ]

  return (
    <div className="flex flex-col items-center text-center">
      <section className="mt-16 px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-green-500 tracking-wide">
          POUPE SEU TEMPO <br /> ADQUIRA SUA ARMA DE PORTAL
        </h1>
        <SearchBar/>
      </section>
      <section className="bg-neutral-950 w-full mt-8 p-1">
        <Carrosel data={data} />
      </section>
      <section className="w-full bg-white py-16 px-6 text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-8">Perguntas Estúpidas</h2>
        <div className="grid md:grid-cols-3 gap-6 text-gray-800 justify-center">
          {text.map((item, index) => (
            <div key={index} className="max-w-[250px] mx-auto">
              <h3 className="text-xl font-bold text-green-500">{item.question}</h3>
              <p className="text-lg">{item.answer}</p>
          </div>
          ))}
        </div>
      </section>
    </div>
  );
}
