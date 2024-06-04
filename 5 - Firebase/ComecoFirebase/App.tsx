// App.tsx
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TextInput, Button, StatusBar } from "react-native";
import { database } from "./src/firebase/connection";
import { ref, set, get, update, remove, child } from "firebase/database";

const App = () => {
  const [nome, setNome] = useState<string | null>("Carregando...");
  const [cargo, setCargo] = useState<string | null>("Carregando...");
  const [idade, setIdade] = useState<string | null>("Carregando...");
  const [ultimo, setUltimo] = useState<number | null>(0)

  useEffect(() => {
    async function dados(){
      console.log('Ultimo: ' + get(ref(database, 'ultimo')))
      // Adiciona um Nó
      // await set(ref(database, 'tipo'), 'Vendedor')
      // const resultado = await get(ref(database, 'tipo'))
      // console.log(resultado)

      // Remove um Nó
      // await remove(ref(database, 'tipo'))
      // await remove(ref(database, 'usuarios/' + 3))
      
      // Adiciona em Child 
      // await set(ref(database, 'usuarios/' + 2), {
      //   nome: 'Jose',
      //   cargo: 'Programador java'
      // })

      // Update de um Nó
      // await update(ref(database, 'usuarios/' + 2), {
      //   nome: "José Cleber"
      // })

      // const resultado = await get(ref(database, 'usuarios/4'))
    }
    dados()
  }, []);

  async function cadastrar() {
    if(nome !== '' && cargo !== '' && idade !== ''){
      try {
        let usuarios = await ref(database, 'usuarios')
        let chave = usuarios.push().key;
      } catch (error){
        console.log('ERRO: ' + error)
      }
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
      <Text style={styles.text}>Nome:</Text>
      <TextInput 
        style={styles.input}
        underlineColorAndroid={'transparent'}
        onChangeText={(texto)=>setNome(texto)}
      />
      <Text style={styles.text}>Cargo:</Text>
      <TextInput 
        style={styles.input}
        underlineColorAndroid={'transparent'}
        onChangeText={(texto)=>setCargo(texto)}
      />
      <Text style={styles.text}>Idade:</Text>
      <TextInput 
        style={styles.input}
        underlineColorAndroid={'transparent'}
        onChangeText={(texto)=>setIdade(texto)}
      />
      <Button title="Cadastrar Funcionário" onPress={cadastrar}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  text: {
    fontSize: 24,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '121212'
  }
});

export default App;
