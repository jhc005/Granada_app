import { ScrollView, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Image, ImageBackground } from 'expo-image'
import { useFonts } from "expo-font";
import { TEMA_CLARO, TEMA_OSCURO } from './themes/Temas';



export default function App() {
const COLOR_FONDO="#121212"
const COLOR_TITULO="#ffdd99"
const COLOR_TEXTO_FOTO="#ffffff"

const temaActivo= useColorScheme();

  const tema=TEMA_CLARO

  if(temaActivo==="dark"){
    const tema=TEMA_OSCURO  
  }else{
    const tema=TEMA_CLARO
  }

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
          <Text style={[styles.titulo,{color:COLOR_TITULO}]}>Los mejores alojamientos</Text>
          <View style={styles.contenedorFotosAlojamiento}>
            <View style={styles.contenedorAlojamiento}>
              <Image style={styles.fotoAlojamiento} contentFit='fill' source={require("./assets/alojamiento1.jpg")}/>
            </View>
            <View style={styles.contenedorAlojamiento}>
              <Image style={styles.fotoAlojamiento} contentFit='fill' source={require("./assets/alojamiento2.jpg")}/>
            </View>
            <View style={styles.contenedorAlojamiento}>
              <Image style={styles.fotoAlojamiento} contentFit='fill' source={require("./assets/alojamiento3.jpg")}/>
            </View>
            <View style={styles.contenedorAlojamiento}>
              <Image style={styles.fotoAlojamiento} contentFit='fill' source={require("./assets/alojamiento4.jpg")}/>
            </View>
          </View>
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
	    height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  contenedorFotosAlojamiento:{
    flex:1,
    flexDirection:"row",
    flexWrap:"wrap",
    gap:5,
    marginBottom:15
  },
  fotoAlojamiento:{
    width:"100%",
    height:"100%",
  },
  contenedorAlojamiento:{
    width:"49%",
    aspectRatio:1
  }
})
