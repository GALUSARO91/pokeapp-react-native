import AsyncStorage from "@react-native-async-storage/async-storage"
import { includes, pull } from "lodash"
import FAVORITES_STORAGE  from "../utils/constants"

export async function addPokemoFavoriteApi(id) {
    try {
        if(id){
            const favorites = await getPokemonFavoriteApi();
            const output = favorites !== undefined ? favorites: []
            output.push(id)
            await AsyncStorage.setItem('favorites',JSON.stringify(output))
        }
        
    } catch (error) {
        console.log(error)
        
    }
    
}

export async function getPokemonFavoriteApi(){
    try{
        const myFavorites = await FAVORITES_STORAGE;
        const response = await AsyncStorage.getItem('favorites')
        
        return JSON.parse(response ??[])
    } catch(error){
        console.log(error)
        return []
    }
}

export async function isFavoritePokemonApi(id){

    try {
        const response = await getPokemonFavoriteApi();
        return includes(response, id);
        
    } catch (error) {
        console.log(error)   
    }

}

export async function removePokemonFavorite(id) {
    try {
        if(id){
            const response = await getPokemonFavoriteApi()
            const newFavorites = pull(response, id)
            await AsyncStorage.setItem('favorites',JSON.stringify(newFavorites))
        }
        
    } catch (error) {
        console.log(error)
    }
    
}