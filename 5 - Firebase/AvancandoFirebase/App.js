import React, { useState, useEffect } from "react";
import { StatusBar, StyleSheet, Text, View, TextInput, Button } from "react-native";
import { database } from "./src/firebase/connection";
import { set, get, ref, remove, update } from "firebase/database";

export default function App() {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [idade, setIdade] = useState(0);
  const [ultimo, setUltimo] = useState(0);

  useEffect(() => {
    async function dados() {
      // await set(ref(database, 'tipo'), 'Pastel')
      //
      // await remove(ref(database, 'tipo'))
      //
      // DESTA FORMA FAZ UPDATE DO NÓ POR INTEIRO. CASO INSIRA SOMENTE CARGO, REMOVERIA O NOME POR EXEMPLO.
      // await set(ref(database, 'usuarios/'+3), {
      //   nome: 'Carluxo',
      //   cargo: 'Programador'
      // })
      //
      // Atualiza sem causar dano aos outros dados
      // await update(ref(database, 'usuarios/'+3), {
      //   nome: 'Caluxão'
      // })
    }
    dados();
  }, []);

  async function cadastrar(){
    const valor = await get(ref(database, 'ultimo'))
    setUltimo(valor.val())
    setUltimo(ultimo+1)
    console.log(ultimo)
    
    await set(ref(database, 'usuarios/' + ultimo), {
      nome: nome,
      idade: idade,
      cargo: cargo
    })
    await set(ref(database, 'ultimo'), ultimo)
    
    // setNome('')
    // setIdade(0)
    // setCargo('')
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Text style={styles.texto}>Digite o nome do funcionário:</Text>
      <TextInput 
        style={styles.input}
        placeholder="EX: Fulano de Tal"
        onChangeText={(texto) => setNome(texto)}
      />
      <Text style={styles.texto}>Digite a idade do funcionário:</Text>
      <TextInput 
        style={styles.input}
        placeholder="EX: 25"
        onChangeText={(idade) => setIdade(idade)}
      />
      <Text style={styles.texto}>Cargo que ocupará:</Text>
      <TextInput 
        style={styles.input}
        placeholder="EX: Assistente de operações"
        onChangeText={(idade) => setCargo(idade)}
      />
      <Button 
        title="Cadastrar Funcionário"
        onPress={cadastrar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 30,
    padding: 10,
  },
  texto:{
    color: 'black',
    fontSize: 18
  },
  input:{
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '121212',
    height: 45,
  }
});
