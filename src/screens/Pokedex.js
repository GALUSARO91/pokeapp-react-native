import { SafeAreaView, Text } from 'react-native'
import React, {useState,useEffect} from 'react'
import { getPokemonsApi, getPokemonDetailsApi } from '../api/pokemon'
import PokemonList from '../components/PokemonList'


export default function Pokedex() {
  const [pokemons, setPokemons] = useState([])
  const [nextPage, setNextPage] = useState(null)

  useEffect(()=>{
    (async()=>{
      await loadPokemons()
    })()
  },[])

const loadPokemons = async () =>{
  try {
    
    const response = await getPokemonsApi(nextPage);
    const pokemonsArray = [];
    for await (let pokemon of response.results){
      let pokemonDetails = await getPokemonDetailsApi(pokemon.url);
      pokemonsArray.push({
        id: pokemonDetails.id,
        name: pokemonDetails.name,
        type: pokemonDetails.types[0].type.name,
        order:pokemonDetails.order,
        image: pokemonDetails.sprites.other["official-artwork"].front_default

      })
    }
    setPokemons([...pokemons,...pokemonsArray])
    setNextPage(response.next);
  } catch (error) {
    console.error(error)
  }
}

  return (
    <SafeAreaView>
      <PokemonList pokemons={pokemons} loadPokemons={loadPokemons} isNext={nextPage}/>
    </SafeAreaView>
  )
}