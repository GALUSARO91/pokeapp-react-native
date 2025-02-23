import { View, Text, StyleSheet, Button } from "react-native";
import React, { useCallback, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useFocusEffect } from "@react-navigation/native";
import { size } from "lodash";
import {getPokemonFavoriteApi} from '../../api/favorite'

export default function UserData() {

  const { auth, logout } = useAuth();
  const [total, setTotal] = useState(0)
  useFocusEffect(
    useCallback(()=>{
      (async ()=>{
        try {
          const response = await getPokemonFavoriteApi();
          setTotal(size(response))
          
        } catch (error) {
          setTotal(0)
        }
      })()
    },[])
  )
  console.log(total)
  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Bienvenido, </Text>
        <Text style={styles.title}>{`${auth.firstName} ${auth.lastName}`}</Text>
      </View>
      <View style={styles.dataContent}>
        <ItemMenu
          title={"Nombre"}
          text={`${auth.firstName} ${auth.lastName}`}
        />
        <ItemMenu title={"Username"} text={auth.username} />
        <ItemMenu title={"Email"} text={auth.email} />
        <ItemMenu title={"Total favoritos"} text={`${total} Pokemons`} />

        <View style={styles.btnLogout}>
          <Button title={"Desconectarse"} onPress={logout} />
        </View>
      </View>
    </View>
  );
};

function ItemMenu(props) {
  const { title, text } = props;
  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}:</Text>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 20,
  },
  itemMenu: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#CFCFCF",
  },
  itemMenuTitle: {
    fontWeight: "bold",
    paddingRight: 10,
    width: 120,
  },
  btnLogout: {
    marginTop: 30,
  },
});
 
