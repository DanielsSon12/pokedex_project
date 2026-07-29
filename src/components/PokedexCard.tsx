import "tailwindcss";

import { useState } from "react";

import withDataFetch from "./DataFetch";

const PokedexCard = ({ title, pokemon, fetchPokemon }: any) => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (!search) {
      return;
    }

    fetchPokemon(search);
  };

  const handlePrevious = () => {
    if (pokemon.id <= 1) {
      return;
    }

    const previousId = pokemon.id - 1;

    setSearch(String(previousId));
    fetchPokemon(String(previousId));
  };

  const handleNext = () => {
    const nextId = pokemon.id + 1;

    setSearch(String(nextId));
    fetchPokemon(String(nextId));
  };

  return (
    <body className="min-h-screen bg-blue-500 flex items-center justify-center text-center">
      <div className="w-150 h-150 bg-red-500/90 rounded-2xl shadow-2xl p-2">
        <h1 className="text-4xl p-6 text-white [text-shadow:1px_4px_0_black]">
          <b>{title.toUpperCase()}</b>
        </h1>

        <input
          type="text"
          placeholder="ex: Número ID / Nome"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          //Função para fazer o Enter funcionar quando estamos pesquisando o pokemon
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}

          className="bg-gray-300 rounded-2xl p-2 w-100"
        />
        <button
          onClick={handleSearch}
          className="bg-gray-900 rounded-full text-white w-10 p-2 cursor-pointer"
        >
          🔎
        </button>

        <div className="bg-white p-7 mx-auto m-7 w-100 rounded-bl-4xl border-3">
          <h2 className="text-xl">
            <b>#{pokemon.id}</b> - <span>{pokemon.name.toUpperCase()}</span>
          </h2>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="mx-auto size-50"
          />

          <div className="grid grid-cols-2 gap-2">
            {pokemon.types.map((tipo: any) => (
              <h2
                key={tipo.slot}
                className="bg-gray-400 p-1.5 rounded-full border-2 border-gray-700"
              >
                {tipo.type.name.toUpperCase()}
              </h2>
            ))}
          </div>
        </div>

        <button
          onClick={handlePrevious}
          className="bg-gray-900 text-white rounded-xl p-2 w-30 mr-5 cursor-pointer"
        >
          Anterior
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-900 text-white rounded-xl p-2 w-30 ml-5 cursor-pointer"
        >
          Próximo
        </button>
      </div>
    </body>
  );
};

const PokedexCardListWithData = withDataFetch("Pokedex", PokedexCard);
export default PokedexCardListWithData;
