import { CircleHelp } from "lucide-react";
import { useState } from "react";

import fundoTela from "../assets/images/fundoTelaPokedex.jpg";
import withDataFetch from "./DataFetch";
import TypeColors from "./TypeColors";

const PokedexCard = ({
  title,
  loading,
  erro,
  pokemon,
  fetchPokemon,
  clearError,
}: any) => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (!search) return;

    fetchPokemon(search);
  };

  const loadingScreen = () => {
    if (loading) {
      return (
        <div className="flex justify-center m-7">
          <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-400 rounded-full animate-spin"></div>
        </div>
      );
    }
  };

  const errorScreen = () => {
    if (erro) {
      console.log(erro);
      return <CircleHelp className="size-20 text-blue-600/50" />;
    }
  };

  const handlePrevious = () => {
    if (pokemon.id <= 1) {
      return;
    }

    const previousId = pokemon.id - 1;

    fetchPokemon(String(previousId));
  };

  const handleNext = () => {
    const nextId = pokemon.id + 1;

    fetchPokemon(String(nextId));
  };

  return (
    <main className="min-h-screen bg-blue-500 flex items-center justify-center text-center">
      <div className="w-150 h-175 bg-red-500/90 rounded-2xl shadow-[inset_0_0_20px_rgba(0,0,0,0.80)] p-2 border-2">
        <h1 className="text-4xl p-6 text-white [text-shadow:1px_4px_0_black]">
          <b>{title.toUpperCase()}</b>
        </h1>

        <input
          type="text"
          placeholder="ex: Número ID / Nome"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            clearError();
          }}
          //Função para fazer o Enter funcionar quando estamos pesquisando o pokemon
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}

          className="bg-gray-300 rounded-2xl ml-14 p-2 w-100 border placeholder:italic placeholder:text-sm"
        />
        <button
          onClick={handleSearch}
          className="bg-gray-900 rounded-full border border-gray-800 text-white inset-shadow-sm inset-shadow-gray-600 w-10 p-2 cursor-pointer mx-2 hover:scale-90 hover:inset-shadow-none"
        >
          🔎
        </button>

        <div className="bg-white p-7 mx-auto m-7 w-100 h-107 rounded-bl-4xl border-2 shadow-[inset_0_0_25px_rgba(0,0,0,0.8)]">
          {loading ? (
            <h2>-----------</h2>
          ) : erro ? (
            <h2>----------------</h2>
          ) : (
            <h2 className="text-xl">
              <b className="text-white tracking-wider [text-shadow:3px_1px_0_black,-2px_1px_0_black,3px_2px_0_black,0px_2px_0_black,2px_-1px_0_black,1px_-2px_0_black,-1px_-2px_0_black]">
                #{pokemon.id}
              </b>{" "}
              -{" "}
              <span className="text-white tracking-wider [text-shadow:3px_1px_0_black,-2px_1px_0_black,3px_2px_0_black,0px_2px_0_black,2px_-1px_0_black,1px_-2px_0_black,-1px_-2px_0_black] font-bold">
                {pokemon.name.toUpperCase()}
              </span>
            </h2>
          )}

          <div
            className="bg-cover bg-center bg-no-repeat h-70 flex items-center justify-center m-3 rounded-xl border-3"
            style={{ backgroundImage: `url(${fundoTela})` }}
          >
            {loading ? (
              loadingScreen()
            ) : erro ? (
              errorScreen()
            ) : (
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="mx-auto m-7 size-50"
              />
            )}
          </div>

          {loading ? (
            <h2>-----------</h2>
          ) : erro ? (
            <h2>-----------</h2>
          ) : (
            <div className="flex justify-center gap-2">
              {pokemon.types.map((tipo: any) => (
                <h2
                  key={tipo.slot}
                  className={`p-1.5 px-8 rounded-xl border-2 border-gray-900 inset-shadow-sm inset-shadow-gray-800/40 font-semibold text-white ${TypeColors[tipo.type.name]} [text-shadow:3px_1px_0_black,-2px_1px_0_black,3px_2px_0_black,0px_2px_0_black,2px_-1px_0_black,1px_-2px_0_black,-1px_-2px_0_black]`}
                >
                  {tipo.type.name.toUpperCase()}
                </h2>
              ))}
            </div>
          )}
        </div>

        <button
          onClick={handlePrevious}
          className="bg-gray-900 border border-gray-800 text-white inset-shadow-sm inset-shadow-gray-500 rounded-xl p-2 px-10 mr-5 font-semibold cursor-pointer hover:scale-95 hover:inset-shadow-none"
        >
          Anterior
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-900  border border-gray-800 text-white inset-shadow-sm inset-shadow-gray-500 rounded-xl p-2 px-10 ml-5 font-semibold cursor-pointer hover:scale-95 hover:inset-shadow-none"
        >
          Próximo
        </button>
      </div>
    </main>
  );
};

const PokedexCardListWithData = withDataFetch("Pokedex", PokedexCard);
export default PokedexCardListWithData;
