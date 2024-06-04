import React, { useState, useEffect } from 'react';
import { View, StatusBar, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { getDatabase, ref, child, get } from "firebase/database";
import * as NavigationBar from "expo-navigation-bar";
import db from './firebase/connection';

function Index() {
  const [frase, setFrase] = useState('');
  const [img, setImg] = useState(require('./images/biscoito.png'));
  const [estado, setEstado] = useState(false);
  const [visivel, setVisivel] = useState(0);
  
  async function quebrarBiscoito() {
    if(estado===true){
      alert('Ei!, você já quebrou o biscoito, pegue outro :(')
      return
    }
    try {
      const dbRef = ref(db); // Use 'db' diretamente aqui
      const frasesRef = child(dbRef, 'frases'); // Referência para o nó 'frases'
      const snapshot = await get(frasesRef);
      if (snapshot.exists()) {
        const frases = snapshot.val();
        const keys = Object.keys(frases);
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        const fraseAleatoria = frases[randomKey];
        
        setFrase(fraseAleatoria);
        setImg(require('./images/biscoitoAberto.png'));
        setEstado(true);
      } else {
        console.log("Sem Frases Disponíveis");
      }
    } catch (error) {
      console.error(error);
    }
    setVisivel(1)
  }
  
  function resetBiscoito() {
    setVisivel(0)
    setEstado(false)
    setFrase('');
    setImg(require('./images/biscoito.png'));
  }
  // APENAS UMA DEPENDENCIA PRA ALTERAR A COR DA BARRA DE NAVEGAÇÃO
useEffect(() => {
  async function setNavigationBarColor() {
    await NavigationBar.setBackgroundColorAsync("#fff");
    await NavigationBar.setButtonStyleAsync("dark");
  }

  setNavigationBarColor();
  }, [])
  
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <View style={styles.biscoitoContainer}><Image style={styles.biscoito} source={img} /></View>
      <View style={styles.textoContainer}>
        <Text style={styles.textoFrase}>{frase}</Text>
      </View>
      <View style={styles.botoesContainer}>
        <TouchableOpacity style={styles.botaoAbre} onPress={quebrarBiscoito}>
          <Text style={styles.textoBotaoAbre}>Quebrar Biscoito</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.botaoReset, {opacity: visivel}]} onPress={resetBiscoito}>
          <Text style={styles.textoBotaoReset}>Pegar outro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    flexDirection: 'column'
  },
  biscoitoContainer: {
    flex: 4,
    justifyContent: 'flex-end'
  },
  textoContainer: {
    flex: 2,
    justifyContent: 'center'
  },
  botoesContainer: {
    flex: 2
  },
  botaoAbre: {
    borderColor: '#dd7b22',
    width: 230,
    height: 50,
    borderRadius: 30,
    borderWidth: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },
  botaoReset: {
    borderColor: '#000',
    width: 230,
    height: 50,
    borderRadius: 30,
    borderWidth: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },
  textoBotaoAbre: {
    fontSize: 22,
    color: '#dd7b22'
  },
  textoBotaoReset: {
    fontSize: 22,
    color: '#000'
  },
  biscoito: {
    width: 300,
    height: 300
  },
  textoFrase: {
    fontSize: 22,
    color: '#dd7b22',
    margin: 3
  }
});

export default Index;
