import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image, ImageBackground } from 'expo-image'
import { useFonts } from "expo-font";


export default function App() {
const COLOR_FONDO="#121212"
const COLOR_TITULO="#ffdd99"
const COLOR_TEXTO_FOTO="#ffffff"

useFonts({
    "bebasnue":require("./assets/BebasNeue-Regular.ttf")
  })

  return (
    <View style={[styles.contenedorPrincipal,{backgroundColor:COLOR_FONDO}]}>
      <ScrollView>
        <Image style={styles.imagencabecera} source={require("./assets/granada_dark.jpg")}/>
        <View style={styles.contenedorSecundario}>
          <Text style={[styles.titulo,{color:COLOR_TITULO}]}>¿Que hacer en granada?</Text>
          <ScrollView horizontal={true}>
            <Image style={styles.fotoCarrusel} contentFit='fill' source={require("./assets/actividad1.jpg")}/>
            <Image style={styles.fotoCarrusel} contentFit='fill' source={require("./assets/actividad2.jpg")}/>
            <Image style={styles.fotoCarrusel} contentFit='fill' source={require("./assets/actividad3.jpg")}/>
            <Image style={styles.fotoCarrusel} contentFit='fill' source={require("./assets/actividad4.jpg")}/>
            <Image style={styles.fotoCarrusel} contentFit='fill' source={require("./assets/actividad5.jpg")}/>
          </ScrollView>
          <Text style={[styles.titulo,{color:COLOR_TITULO}]}>Las mejores rutas</Text>
          <ImageBackground style={[styles.fotoRuta]} 
            contentFit='fill' 
            source={require("./assets/mejores1.jpg")}>
            <Text style={[styles.textoFoto,{color:COLOR_TEXTO_FOTO}]} >Albaicín</Text>
          </ImageBackground>
          <ImageBackground style={[styles.fotoRuta]} 
            contentFit='fill' 
            source={require("./assets/mejores2.jpg")}>
            <Text style={[styles.textoFoto,{color:COLOR_TEXTO_FOTO}]} >Sacromonte</Text>
          </ImageBackground>
          <ImageBackground style={[styles.fotoRuta]} 
            contentFit='fill' 
            source={require("./assets/mejores3.jpg")}>
            <Text style={[styles.textoFoto,{color:COLOR_TEXTO_FOTO}]} >El centro</Text>
          </ImageBackground>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedorPrincipal:{
    flex:1,
    flexDirection:"column"
  },
  contenedorSecundario:{
    flex:1,
    marginHorizontal:10,
    padding:5,

  },
  imagencabecera:{
    height:250,
    width:"auto"
  },
  titulo:{
    fontSize:24,
    fontWeight:"bold",
    marginVertical:20
  },
  fotoCarrusel:{
    width:250,
    height:300,
    marginRight:10,
    borderRadius:10
  },
  fotoRuta:{
    width:"100%",
    height:200,
    marginVertical:5,
    justifyContent: "center",
    alignItems: "center"
  },
  textoFoto:{
    textAlign: "center",        
    fontFamily: "bebasnue",     
    fontSize: 48,               
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
	    height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation:5
  }
})
