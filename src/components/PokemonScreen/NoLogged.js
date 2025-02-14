import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'



const NoLogged = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.content}>
      <Text style={styles.text}>Para Ver esta pantalla necesitas iniciar sesion</Text>
      <Button title="Ir a login" onPress={()=>{navigation.navigate("Account")}}/>

    </View>
  )
}

export default NoLogged

const styles = StyleSheet.create({
    content:{
        marginVertical:50,
        paddingHorizontal: 50
    },
    text:{
        textAlign:"center",
        marginBottom:10
    }
})