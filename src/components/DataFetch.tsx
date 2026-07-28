import { useEffect, useState } from "react";

import { API_URL_POKEDEX } from "../settings";

const withDataFetch = (title: string, WrapperComponent: any) => {
  return () => {
    const [pokemon, setPokemon] = useState<any>(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState("");

    //Função para a requisição da API
    const fetchData = async (search: string) => {
      try {
        setLoading(true);
        const response = await fetch(
          `${API_URL_POKEDEX}/${search.toLowerCase()}`,
        );

        if (!response.ok) {
          throw new Error("Falha na requisição da API!");
        }

        const data = await response.json();
        setPokemon(data);
        setLoading(false);
      } catch (error) {
        setError("Um erro foi encontrado: ");
        console.log(error);
        setLoading(false);
      }
    };

    useEffect(() => {
      fetchData("1");
    }, []);

    //Tela de Loading
    if (isLoading) {
      return (
        <div>
          <h2>{title}</h2>
          <p>🔎 Procurando os dados na pokedex...</p>
        </div>
      );
    }

    //Tela de Erro
    if (error) {
      return (
        <div>
          <h2>{title}</h2>
          <p>⚠️-- {error} --⚠️</p>
        </div>
      );
    }

    //Caso de nenhum data for encontrado
    if (!pokemon) {
      return (
        <div>
          <h2>{title}</h2>
          <p>😥 Nenhuma informação encontrada!</p>
        </div>
      );
    }

    return (
      <WrapperComponent
        title="Pokedex"
        pokemon={pokemon}
        fetchPokemon={fetchData}
      />
    );
  };
};

export default withDataFetch;
