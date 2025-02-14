import react from "react";
import {Image} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "../screens/Account";
import Icon from "react-native-vector-icons/FontAwesome5"
import PokemonNavigaton from "./PokemonNavigaton";
import FavoriteNavigaton from "./FavoriteNavigation";





const Tab = createBottomTabNavigator()


export default function Navigation(){
    return(
        <Tab.Navigator initialRouteName="Pokedex">
            <Tab.Screen 
                name="Favorite" 
                component={FavoriteNavigaton}
                options={{
                    title:"",
                    tabBarLabel: "Favoritos",
                    headerShown:false,
                    tabBarIcon: ({color, size}) =>(<Icon name="heart" color={color} size={size}/>)
                }}
            />
            <Tab.Screen 
                name="Pokedex" 
                component={PokemonNavigaton}
                options={{
                    tabBarLabel: "",
                    Title: "",
                    headerTitle:"",
                    headerShown:false,
                    tabBarIcon: () =>(<Image source={require("../assets/pokeball.png")} style={{width: 75, height: 75, top: -15}}/>)
                }}
            />

            <Tab.Screen 
                name="Account" 
                component={AccountScreen}
                options={{
                    title: "Mi Cuenta",
                    headerTitleAlign: 'center',
                    tabBarIcon: ({color, size}) =>(<Icon name="user" color={color} size={size}/>)
                }}
            />
        </Tab.Navigator>
    )

}