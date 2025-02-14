import { View, Text } from 'react-native'
import React, { useState, useEffect, useCallback} from 'react'
import { getPokemonFavoriteApi } from '../api/favorite'
import useAuth from '../hooks/useAuth'
import { getPokemonDetailsById } from '../api/pokemon'
import PokemonList from '../components/PokemonList'
import { useFocusEffect } from '@react-navigation/native'
import NoLogged from '../components/PokemonScreen/NoLogged'



export default function Favorite() {
  const [pokemons, setPokemons] = useState([])
  const {auth} = useAuth()

  useFocusEffect(
    useCallback(() => {
      if(auth){
          (
            async ()=>{
              const response = await getPokemonFavoriteApi()
              const pokemonsArray = [];
                for await (let id of response){
                    let pokemonDetails = await getPokemonDetailsById(id);
                    pokemonsArray.push({
                      id: pokemonDetails.id,
                      name: pokemonDetails.name,
                      type: pokemonDetails.types[0].type.name,
                      order:pokemonDetails.order,
                      image: pokemonDetails.sprites.other["official-artwork"].front_default
              
                    })
                  }
                  setPokemons(pokemonsArray)
            }
          )()
      }
    
      
    }, [auth])
    
  )
 

  return (
   !auth?(<NoLogged/>):(
    <>
   <Text>Lista de Favoritos</Text>
   <PokemonList pokemons={pokemons}/>
   </>
  )
  )
}