import { SearchBar } from "./components/searchBar";

export default function NotFound({
  searchParams = {},
}: {
  searchParams?: { [query: string]: string | string[] | undefined };
}) {
  const query = typeof searchParams?.query === "string" ? searchParams.query : undefined;

  if (query) {
    return (
      <div className="flex flex-col items-center justify-center text-center px-4">
        <div className="mt-24 w-full max-w-[900px]">
          <SearchBar query={query} />
        </div>
        <div className="mt-10">
          <h1 className="font-bold text-3xl">Nenhum resultado encontrado!</h1>
          <p className="text-lg">Wubba lubba dub dub!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-center font-bold mt-9 text-3xl">Puts, uma página 404!</h1>
      <p>Essa página não existe!</p>
    </div>
  );
}
