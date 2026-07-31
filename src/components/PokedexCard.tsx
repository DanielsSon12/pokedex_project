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
          <div
            className="
              w-8 
              h-8 
              border-4 
              border-gray-300 
              border-t-blue-400 
              rounded-full 
              animate-spin"
          ></div>
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
      <div
        className="
          max-sm:w-80
          max-sm:h-120
          max-md:w-95
          max-md:h-150
          max-lg:w-130 
          w-full
          max-w-150
          h-175
          bg-red-500/90
          rounded-2xl
          shadow-[inset_0_0_20px_rgba(0,0,0,0.80)]
          p-4
          border-2
          mx-4"
      >
        <h1
          className="
            max-sm:text-base
            max-sm:p-2
            max-sm:[text-shadow:1px_2px_0_black]
            max-md:text-2xl
            max-lg:text-3xl
            text-4xl
            p-6
            text-white
            [text-shadow:1px_4px_0_black]"
        >
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

          className="
            max-sm:p-0.5
            max-md:w-50
            max-md:p-1
            max-md:placeholder:text-xs
            max-lg:w-70 
            max-lg:ml-5 
            text-center
            bg-gray-300 
            rounded-2xl 
            flex-1
            ml-14 
            p-2 
            w-100 
            border 
            placeholder:italic 
            placeholder:text-sm"
        />
        <button
          onClick={handleSearch}
          className="
            max-sm:active:scale-90 
            max-sm:active:inset-shadow-none
            max-sm:text-xs
            max-sm:w-7
            max-sm:h-7
            max-sm:p-1
            max-sm:mx-1
            max-md:active:scale-90 
            max-md:active:inset-shadow-none
            max-md:text-xs
            max-md:w-8
            max-md:h-8
            bg-gray-900 
            border-gray-800 
            text-white 
            rounded-full 
            border 
            inset-shadow-sm 
            inset-shadow-gray-600 
            w-10
            h-10 
            p-2 
            cursor-pointer 
            mx-2 
            hover:scale-90 
            hover:inset-shadow-none
            transition-all
            duration-100
            active:scale-90
            active:shadow-none"
        >
          🔎
        </button>

        <div
          className="
            max-sm:w-60
            max-sm:h-62
            max-sm:px-2
            max-md:w-70
            max-md:h-80
            max-md:px-2
            max-lg:w-95 
            max-lg:h-100 
            max-lg:px-10 
            bg-white 
            p-5 
            m-7
            mx-auto 
            w-full
            max-w-100
            h-107 
            rounded-bl-4xl 
            border-2 
            shadow-[inset_0_0_25px_rgba(0,0,0,0.8)]"
        >
          {loading ? (
            <h2>-----------</h2>
          ) : erro ? (
            <h2>----------------</h2>
          ) : (
            <h2
              className="
                max-sm:text-xs
                max-md:text-sm 
                max-lg:text-md 
                text-xl"
            >
              <b
                className="
                  max-sm:[text-shadow:1px_1px_0_black,-1px_1px_0_black,1px_-1px_0_black,-1px_-1px_0_black]
                  max-md:[text-shadow:1px_1px_0_black,-1px_1px_0_black,1px_-1px_0_black,-1px_-1px_0_black]
                  max-lg:[text-shadow:1px_1px_0_black,-1px_1px_0_black,1px_-1px_0_black,-1px_-1px_0_black]
                  text-white 
                  tracking-wider 
                  [text-shadow:3px_1px_0_black,-2px_1px_0_black,3px_2px_0_black,0px_2px_0_black,2px_-1px_0_black,1px_-2px_0_black,-1px_-2px_0_black]"
              >
                #{pokemon.id}
              </b>{" "}
              -{" "}
              <span
                className="
                  max-sm:[text-shadow:1px_1px_0_black,-1px_1px_0_black,1px_-1px_0_black,-1px_-1px_0_black]
                  max-md:[text-shadow:1px_1px_0_black,-1px_1px_0_black,1px_-1px_0_black,-1px_-1px_0_black]
                  max-lg:[text-shadow:1px_1px_0_black,-1px_1px_0_black,1px_-1px_0_black,-1px_-1px_0_black]
                  text-white 
                  tracking-wider 
                  font-bold
                  [text-shadow:3px_1px_0_black,-2px_1px_0_black,3px_2px_0_black,0px_2px_0_black,2px_-1px_0_black,1px_-2px_0_black,-1px_-2px_0_black]"
              >
                {pokemon.name.toUpperCase()}
              </span>
            </h2>
          )}

          <div
            className="
              max-sm:size-40
              max-sm:border-2
              max-sm:my-2
              max-md:size-50
              max-lg:size-68
              bg-cover 
              bg-center 
              bg-no-repeat 
              h-70 
              m-3 
              flex 
              items-center 
              mx-auto 
              justify-center 
              rounded-xl 
              border-3
              aspect-square"
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
                className="max-sm:size-35 max-md:size-40 mx-auto justify-center m-7 size-50"
              />
            )}
          </div>

          {loading ? (
            <h2>-----------</h2>
          ) : erro ? (
            <h2>-----------</h2>
          ) : (
            <div className="flex flex-wrap justify-center gap-2">
              {pokemon.types.map((tipo: any) => (
                <h2
                  key={tipo.slot}
                  className={`
                    max-sm:[text-shadow:1px_1px_0_black,-1px_1px_0_black,1px_-1px_0_black,-1px_-1px_0_black]
                    max-md:[text-shadow:1px_1px_0_black,-1px_1px_0_black,1px_-1px_0_black,-1px_-1px_0_black]
                    max-lg:[text-shadow:1px_1px_0_black,-1px_1px_0_black,1px_-1px_0_black,-1px_-1px_0_black]
                    max-sm:border
                    max-sm:text-xs
                    max-sm:px-2
                    max-sm:p-0
                    max-md:text-xs
                    max-md:px-3
                    max-md:p-0.6
                    max-lg:px-5 
                    max-lg:p-1 
                    max-lg:text-sm 
                    p-1.5 
                    px-8 
                    rounded-xl 
                    border-2 
                    border-gray-900 
                    text-white 
                    inset-shadow-sm 
                    inset-shadow-gray-800/40 
                    font-semibold 
                    ${TypeColors[tipo.type.name]} 
                    [text-shadow:3px_1px_0_black,-2px_1px_0_black,3px_2px_0_black,0px_2px_0_black,2px_-1px_0_black,1px_-2px_0_black,-1px_-2px_0_black]`}
                >
                  {tipo.type.name.toUpperCase()}
                </h2>
              ))}
            </div>
          )}
        </div>

        <button
          onClick={handlePrevious}
          className="
            max-sm:active:scale-90 
            max-sm:active:inset-shadow-none
            max-sm:text-xs
            max-sm:px-6
            max-sm:mr-0
            max-md:active:scale-90 
            max-md:active:inset-shadow-none
            max-md:px-5 
            max-md:mr-2
            max-md:text-sm
            max-lg:px-7 
            max-lg:mr-2 
            bg-gray-900 
            border 
            border-gray-800 
            text-white 
            inset-shadow-sm 
            inset-shadow-gray-500 
            rounded-xl 
            p-2 
            px-10 
            mr-5 
            font-semibold 
            cursor-pointer 
            hover:scale-95 
            hover:inset-shadow-none
            transition-all
            duration-100
            active:scale-95
            active:shadow-none"
        >
          Anterior
        </button>
        <button
          onClick={handleNext}
          className="
            max-sm:active:scale-90 
            max-sm:active:inset-shadow-none
            max-sm:text-xs
            max-sm:px-6
            max-sm:mr-0
            max-md:active:scale-90 
            max-md:active:inset-shadow-none
            max-md:px-5 
            max-md:mr-2
            max-md:text-sm
            max-lg:px-7 
            max-lg:ml-2 
            bg-gray-900 
            border 
            border-gray-800 
            text-white 
            inset-shadow-sm 
            inset-shadow-gray-500 
            rounded-xl 
            p-2 
            px-10 
            mr-5 
            font-semibold 
            cursor-pointer 
            hover:scale-95 
            hover:inset-shadow-none
            transition-all
            duration-100
            active:scale-95
            active:shadow-none"
        >
          Próximo
        </button>
      </div>
    </main>
  );
};

const PokedexCardListWithData = withDataFetch("Pokedex", PokedexCard);
export default PokedexCardListWithData;
