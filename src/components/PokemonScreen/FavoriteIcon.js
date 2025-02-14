import React,{useState, useEffect} from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { addPokemoFavoriteApi, isFavoritePokemonApi, removePokemonFavorite } from "../../api/favorite";



export default function FavoriteIcon(props) {
  const {id} = props;

  const [isFavorite, setIsFavorite] = useState("")
  const [reloadCheck, setReloadCheck] = useState(false)
  
  const addFavorite = async () => {
    try {
      await addPokemoFavoriteApi(id)
      triggerReloadCheck()
    } catch (error) {
      console.log(error)
    }
    
  };

  const removeFavorite = async () => {
    try {
      await removePokemonFavorite(id)
      triggerReloadCheck()
    } catch (error) {
      console.log(error)
    }
    
  };

 const triggerReloadCheck = () =>{
    setReloadCheck((prev)=>!prev)
 } 
 useEffect(() => {
  (async ()=>{
      try {
        const response = await isFavoritePokemonApi(id)
        setIsFavorite(response)
      } catch (error) {
        setIsFavorite(false)
      }
  })()
 }, [id, reloadCheck])
 

  return (
  
      <Icon
        name="heart"
        color="#fff"
        size={20}
        solid={isFavorite}
        style={{ marginRight: 20 }}
        onPress={isFavorite? removeFavorite: addFavorite}
    />
   
  );
}
