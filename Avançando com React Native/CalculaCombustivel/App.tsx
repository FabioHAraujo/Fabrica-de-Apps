import React, { useState } from 'react'
import { StyleSheet, Text, View, StatusBar, Image, TextInput, SafeAreaView } from "react-native";

import ModalResultado from './src/ModalResultado';

export default function App() {
  const [valorAlc, setValorAlc] = useState<string>('')
  const [valorGas, setValorGas] = useState<string>('')
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#282424"} barStyle={"light-content"} />
      <View style={styles.containerLogo}>
        <Image 
          source={require('./assets/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.texto}>Qual a Melhor Opção?</Text>
      </View>
      <View style={styles.containerInputs}>
        <Text style={styles.textoInput}>Álcool (preço por litro):</Text>
        <TextInput 
          placeholder="Dite o valor do Litro do Álcool"
          style={styles.input}
          keyboardType="numeric"
          value={valorAlc}
          onChangeText={setValorAlc}
        />
        <Text style={styles.textoInput}>Gasolina (preço por litro):</Text>
        <TextInput 
          placeholder="Dite o valor do Litro da Gasolina"
          style={styles.input}
          value={valorGas}
          keyboardType="numeric"
          onChangeText={setValorGas}
        />
      </View>
      <ModalResultado alc={valorAlc} gas={valorGas}/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282424",
  },
  containerLogo:{
    alignItems: "center",
    marginTop: 30,
  },
  logo:{
    margin: 30,
    width: 200,
    height: 200,
  },
  texto:{
    color:'#fff',
    fontSize: 28,
    fontWeight: 'bold'
  },
  containerInputs:{
    marginTop: 30,
    padding: 20
  },
  textoInput:{
    width: '100%',
    color:'#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    margin: 10
  },
  input:{
    backgroundColor: '#FFF',
    height: 50,
    margin: 10,
    borderRadius: 8,
    paddingLeft: 10,
  }
});
