import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { capitalize } from 'lodash'
import getColorByPokemonType from '../../utils/getColorByPokemonType'

const Header = (props) => {
    const {name, order, image, type} = props;
    const color = getColorByPokemonType(type);
    const bgStyle= [{backgroundColor: color, ...styles.bgStyle}]
  return (
    <>
        <View style={bgStyle}></View>
        <SafeAreaView style={styles.content}>
            <View style={styles.header}>
                <Text style={styles.name}>{capitalize(name)}</Text>
                <Text style={styles.order}>#{`${order}`.padStart(3,0)}</Text>
            </View>
            <View style={styles.contentImage}>
                <Image source={{uri: image}} style={styles.image}/>
            </View>
        </SafeAreaView>
    </>
  
  )
}

const styles = StyleSheet.create({
    bgStyle:{
        width:"100%",
        height:400,
        position:"absolute",
        borderBottomRightRadius: 300,
        borderBottomLeftRadius: 300,
        transform:[{ scaleX:2}]
    },
    content:{
        marginHorizontal:20,
        marginTop:30
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingTop:40
    },
    name:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:27
    },
    order:{
        color:"#fff",
        fontWeight:"bold"
    },
    contentImage:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        top: 30
    },
    image:{
        height: 250,
        width: 300,
        resizeMode:"contain"
    }
})
export default Header