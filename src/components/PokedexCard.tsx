import { useState } from "react";

import withDataFetch from "./DataFetch";

const PokedexCard = ({ title, pokemon, data }: any) => {
  const [search, setSearch] = useState("1");

  const handleSearch = () => {
    data(search);
  };

  const handlePrevious = () => {};

  const handleNext = () => {};

  return (
    <div>
      <h1>{title}</h1>

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
      />
      <button onClick={handleSearch}>Buscar</button>

      <div>
        <h2>
          {pokemon.name} - <b>#{pokemon.id}</b>
        </h2>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />

        {pokemon.types.map((tipo: any) => (
          <h2 key={tipo.slot}>{tipo.type.name}</h2>
        ))}
      </div>

      <button onClick={handlePrevious}>Anterior</button>
      <button onClick={handleNext}>Próximo</button>
    </div>
  );
};

const PokedexCardListWithData = withDataFetch("Pokedex", PokedexCard);
export default PokedexCardListWithData;
