import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import Favorite from '../screens/Favorite';
import PokemonScreen from '../screens/PokemonScreen';



const pokemonStack = createStackNavigator();

const FavoriteNavigaton = () => {
  return (
    <pokemonStack.Navigator>
        <pokemonStack.Screen name="Favorites" component={Favorite} options={{headerTitle:"Favoritos",headerTitleAlign:"center"}}/>
        <pokemonStack.Screen name="PokemonScreen" component={PokemonScreen} options={{title:"",headerTransparent:true}}/>
        
    </pokemonStack.Navigator>
  )
}

export default FavoriteNavigaton