import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity, SafeAreaView } from "react-native";

import api from "./src/services/api";

export default function App() {
  const [cep, setCep] = useState<string>('')

  async function buscaCep(){
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
      <View style={styles.cepContainer}>
        <Text style={styles.cepTitulo}>Digite um CEP</Text>
        <TextInput 
          placeholder="EX: 99900000"
          style={styles.cepInput}
          keyboardType="numeric"
          value={cep}
          onChangeText={(valor) => setCep(valor)}
        />
      </View>
      <View style={styles.containerBotoes}>
        <TouchableOpacity style={styles.botaoBuscar}>
          <Text style={styles.textoBotao}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoLimpar}>
          <Text style={styles.textoBotao}>Buscar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  cepTitulo:{
    margin: 30,
    fontSize: 23,
    color: '#000',
    fontWeight: 'bold'
  },
  cepContainer:{
    alignItems: 'center'
  },
  cepInput:{
    borderWidth: 1,
    borderColor: '#1C2833',
    borderRadius: 9,
    width: '80%',
    fontSize: 18,
    height: 50,
    padding: 10,
  },
  containerBotoes:{
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 30
  },
  botaoBuscar:{
    backgroundColor: '#58D68D',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 15,
    paddingLeft: 15,
    borderRadius: 8,
  },
  botaoLimpar:{
    backgroundColor: '#e2504c',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 15,
    paddingLeft: 15,
    borderRadius: 8
  },
  textoBotao:{
    fontSize: 22,
    color: '#fff'
  }
});
