import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import api from "./src/services/api";

interface cepRetorno {
  cep: string;
  logradouro: string;
  bairro: string;
  cidade: string;
  estado: string;
}

export default function App() {
  const [cep, setCep] = useState<string>("");
  const [resposta, setResposta] = useState<cepRetorno | null>(null)
  const inputRef = useRef(null)

  async function buscaCep() {
    if (cep==='' || (cep.length+1)<9){
      alert('Digite um CEP Válido')
      setCep('')
      return
    } else {
      try {
        const response = await api.get(`${cep}/json`)
        await setResposta(response.data)
      } catch(error) {
        console.log('ERROR: ' + error)
      }
    }
  }

  function limpar(){
    setCep('')
    inputRef.current?.focus()
    setResposta(null)
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
          ref={inputRef}
        />
      </View>

      <View style={styles.containerBotoes}>
        <TouchableOpacity
          style={[styles.botao, { backgroundColor: "#58D68D" }]}
          onPress={buscaCep}
        >
          <Text style={styles.textoBotao}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.botao, { backgroundColor: "#e2504c" }]}
          onPress={limpar}
        >
          <Text style={styles.textoBotao}>LIMPAR</Text>
        </TouchableOpacity>
      </View>

      {resposta && (
        <View style={styles.resultado}>
          <Text style={styles.itemCep}>CEP: {resposta.cep}</Text>
          <Text style={styles.itemCep}>LOGRADOURO: {resposta.logradouro}</Text>
          <Text style={styles.itemCep}>BAIRRO: {resposta.bairro}</Text>
          <Text style={styles.itemCep}>CIDADE: {resposta.cidade}</Text>
          <Text style={styles.itemCep}>ESTADO: {resposta.estado}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  cepTitulo: {
    margin: 30,
    fontSize: 23,
    color: "#000",
    fontWeight: "bold",
  },
  cepContainer: {
    alignItems: "center",
  },
  cepInput: {
    borderWidth: 1,
    borderColor: "#1C2833",
    borderRadius: 9,
    width: "80%",
    fontSize: 18,
    height: 50,
    padding: 10,
  },
  containerBotoes: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 30,
  },
  botao: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 15,
    paddingLeft: 15,
    borderRadius: 8,
  },
  textoBotao: {
    fontSize: 22,
    color: "#fff",
  },
  resultado:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemCep:{
    fontSize: 22
  }
});
