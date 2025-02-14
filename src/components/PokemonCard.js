import { StyleSheet, Text, View, TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'
import getColorByPokemonType from '../utils/getColorByPokemonType'
import { capitalize } from 'lodash'
import { useNavigation } from '@react-navigation/native'


const PokemonCard = (props) => {
    const {pokemon} = props;
    const navigation = useNavigation()
    const pokemonColor = getColorByPokemonType(pokemon.type);

    const bgStyle = {
        backgroundColor: pokemonColor,
        ...styles.bgStyle
    }

    const goToPokemon = ()=>{
        navigation.navigate('PokemonScreen',{id:pokemon.id});
    }
  return (
    <View style={styles.card}>
      <TouchableWithoutFeedback onPress={goToPokemon}>
        <View style={styles.spacing}>
            <View style={bgStyle}>
                <Text style={styles.number}>#{`${pokemon.order}`.padStart(3,0)}</Text>
                <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
                <Image source={{uri:pokemon.image}} style={styles.image}/> 
            </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default PokemonCard

const styles = StyleSheet.create({
    card:{
        flex: 1,
        height: 130
    },
    spacing:{
        flex: 1,
        padding: 5
    },
    bgStyle:{
        flex: 1,
        padding: 10,
        borderRadius: 15
    },
    number:{
        position:"absolute",
        right:10,
        top:10,
        color:"#fff",
        fontSize: 11
    },
    name:{
        color:"#fff",
        fontWeight:"bold",
        fontSize: 15,
        paddingTop: 10
    },
    image:{
        position:'absolute',
        bottom:'2',
        right:'2',
        width:'90',
        height:'90'
    }
})