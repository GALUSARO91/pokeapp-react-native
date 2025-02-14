import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import PokemonScreen from '../screens/PokemonScreen';
import Pokedex from '../screens/Pokedex';



const pokemonStack = createStackNavigator();

const PokemonNavigaton = () => {
  return (
    <pokemonStack.Navigator>
        <pokemonStack.Screen name="PokedexInner" component={Pokedex} options={{title:"", headerTransparent:true}}/>
        <pokemonStack.Screen name="PokemonScreen" component={PokemonScreen} options={{title:"", headerTransparent:true}}/>
    </pokemonStack.Navigator>
  )
}

export default PokemonNavigaton