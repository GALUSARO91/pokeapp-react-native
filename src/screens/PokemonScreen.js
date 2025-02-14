import { SafeAreaView, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { getPokemonDetailsById } from "../api/pokemon";
import Header from "../components/PokemonScreen/Header";
import { ScrollView } from "react-native-gesture-handler";
import Types from "../components/PokemonScreen/Types";
import Stats from "../components/PokemonScreen/Stats";
import Icon from "react-native-vector-icons/FontAwesome5";
import FavoriteIcon from "../components/PokemonScreen/FavoriteIcon";
import useAuth from "../hooks/useAuth";

const PokemonScreen = (props) => {
  const {
    navigation,
    route: { params },
  } = props;

  const [pokemon, setPokemon] = useState(null);

  const {auth} = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsById(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: ()=> auth && <FavoriteIcon id={pokemon?.id??''}/>,
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#fff"
          size={20}
          style={{ marginLeft: 20}}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, params,pokemon]);

  if (!pokemon) return null;

  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      <Types types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  );
};

export default PokemonScreen;
