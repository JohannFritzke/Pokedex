import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import PokemonCard from "../components/PokemonCard";
import axios from "axios";
import LoadScreen from "../components/LoadScreen";

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {

    var endPoints = [];
    for (var i = 0; i <= 1010; i++) {
      if (i > 0) {
        endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      }
    }
    try {
      const responses = await axios.all(
        endPoints.map((endPoint) => axios.get(endPoint))
      );
      setPokemons(responses);
    } catch (error) {
      console.error(error);
    }
  };

  const pokemonFilter = (name) => {
    var filter = [];
    if (name === "") {
      getPokemons()
    }
    for (var i in pokemons) {
      if (pokemons[i].data.name.includes(name)) {
        filter.push(pokemons[i]);
      }
    }
    setPokemons(filter);
  };

  return (
    <div>
      <header>
        <Header pokemonFilter={pokemonFilter} />
      </header>
      <main>
        {pokemons.length === 0 ? (
          <LoadScreen />
        ) : (
          pokemons.map((pokemon, key) => (
            <PokemonCard
              name={pokemon.data.name}
              key={key}
              img={pokemon.data.sprites.other["official-artwork"].front_default}
              types={pokemon.data.types}
              number={pokemon.data.id}
            />
          ))
        )}
      </main>
    </div>
  );
};
