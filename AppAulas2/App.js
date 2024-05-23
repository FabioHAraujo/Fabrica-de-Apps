import React, { useState, useEffect } from 'react'
import { StatusBar ,StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [input, setInput] = useState('');
  const [nome, setNome] = useState('');

  useEffect(()=>{
    async function loadNome(){
      await AsyncStorage.getItem('@nome').then((valor)=>{
        setNome(valor)
      })
    }

    loadNome()
  }, [])

  async function gravaNome(){
    await AsyncStorage.setItem('@nome', input)

    setNome(input)

    setInput('')
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
      <View style={styles.viewInput}>
        <TextInput 
          style={styles.input}
          value={input}
          onChangeText={(texto) => setInput(texto)}
        />

        <TouchableOpacity onPress={gravaNome}>
          <Text style={styles.botao}>+</Text>
        </TouchableOpacity>

      </View>

      <Text style={styles.nome}>{nome}</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 35
  },
  viewInput:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  input:{
    width: 350,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10
  },
  botao:{
    backgroundColor: '#222',
    color: '#fff',
    height: 40,
    padding: 12,
    marginLeft: 4
  },
  nome:{
    marginTop: 15,
    fontSize: 30
  }
  
});