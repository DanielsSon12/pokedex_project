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
        setError("");
        const response = await fetch(
          `${API_URL_POKEDEX}/${search.toLowerCase()}`,
        );

        if (!response.ok) {
          throw new Error("Falha na requisição da API!");
        }

        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        setError(
          "O Pokemon não foi encontrado ou alguma informação esta incorreta!",
        );
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      fetchData("1");
    }, []);

    return (
      <WrapperComponent
        title={title}
        loading={isLoading}
        erro={error}
        pokemon={pokemon}
        fetchPokemon={fetchData}
        clearError={() => setError("")}
      />
    );
  };
};

export default withDataFetch;
