import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import PokemonCard from "../components/PokemonCard";
import axios from  "axios";

export const Home=()=>{
    const[pokemons, setPokemons]=useState([]);

    useEffect(()=>{
        getPokemons();
    },[]);

    const getPokemons=()=>{
        var endPoints=[];
        for(var i=1;i<=1010;i++){
            endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        axios.all(endPoints.map((endPoints)=>axios.get(endPoints)))
        .then((res)=> setPokemons(res))
    };

    const pokemonFilter=(name) =>{
        var filter=[];
        if(name===""){
            getPokemons();
        }
        for(var i in pokemons){
            if(pokemons[i].data.name.includes(name)){
                filter.push(pokemons[i]);
            }
            }
                setPokemons(filter);
    };


    return(
        <div>
            <header>
             <Header pokemonFilter={pokemonFilter}/>
            </header>
            <main>
            {
             pokemons.map((pokemon, key)=>(
                <PokemonCard name={pokemon.data.name} key={key}
                img={pokemon.data.sprites.other["official-artwork"].front_default}
                types={pokemon.data.types}/>
            ))
            }
            </main>
        </div>
    );
};