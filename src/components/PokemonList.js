import { View, Text, FlatList, StyleSheet, ActivityIndicator, Platform } from 'react-native'
import React from 'react'
import PokemonCard from './PokemonCard'
import { SafeAreaView } from 'react-native-safe-area-context'


const PokemonList = (props) => {
    const {pokemons, loadPokemons, isNext} = props
    const loadMore = () => loadPokemons();
    
  return (
    <SafeAreaView>
        <FlatList
        data={pokemons}
        style={styles.flatList}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item)=>String(item.id)}
        renderItem={({item})=><PokemonCard pokemon={item}/>} 
        contentContainerStyle={styles.flatListContentContainer}
        onEndReached={isNext && loadMore}
        onEndReachedThreshold={1}
        ListFooterComponent={
        
        isNext && (<ActivityIndicator
            size="large"
            style={styles.spinner}
            color="#000"
        />)}
    />
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
    flatListContentContainer:{
        paddingHorizontal: 5,

    },
    flatList:{
        marginBlockEnd: 30,
        paddingBlockEnd: 60
    },
    spinner:{
        marginTop:20,
        marginBotton:Platform.OS === 'android'? 90: 60
    }
})
export default PokemonList