import React, { useState, useEffect } from "react";
import { StatusBar, StyleSheet, Text, View, TextInput, Button, FlatList, ActivityIndicator } from "react-native";
import db from "./src/firebase/connection";
import { set, get, ref, push, query, onValue, DataSnapshot } from "firebase/database";
import Listagem from "./src/Listagem";

export default function App() {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [idade, setIdade] = useState(0);
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(()=>{
    async function dados(){
      const usuariosRef = ref(db, 'usuarios');
      const buscaUsuarios = query(usuariosRef);

      onValue(buscaUsuarios, (snapshot) => {
        const usuariosList = [];
        snapshot.forEach((childSnapshot) => {
          const usuario = childSnapshot.val();
          usuario.id = childSnapshot.key; // Adiciona o ID do usuário
          usuariosList.push(usuario);
          console.log(usuario.id)
          console.log(usuario.cargo)
        });
        setUsuarios(usuariosList);
        setLoading(false);
      });
    }
    dados()

  },[])

  async function cadastrar() {
    console.log('Tentou')
    try {
      const novoUsuarioRef = push(ref(db, 'usuarios'));
      await set(novoUsuarioRef, {
        nome: nome,
        idade: idade,
        cargo: cargo
      });
      // Limpar os campos de entrada
      setNome('');
      setIdade(0);
      setCargo('');
    } catch (error) {
      console.error("Erro ao cadastrar funcionário: ", error);
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Text style={styles.texto}>Digite o nome do funcionário:</Text>
      <TextInput 
        style={styles.input}
        placeholder="EX: Fulano de Tal"
        value={nome}
        onChangeText={(texto) => setNome(texto)}
      />
      <Text style={styles.texto}>Digite a idade do funcionário:</Text>
      <TextInput 
        style={styles.input}
        placeholder="EX: 25"
        keyboardType="numeric"
        value={idade}
        onChangeText={(texto) => setIdade(texto)}
      />
      <Text style={styles.texto}>Cargo que ocupará:</Text>
      <TextInput 
        style={styles.input}
        placeholder="EX: Assistente de operações"
        value={cargo}
        onChangeText={(texto) => setCargo(texto)}
      />
      <Button 
        title="Cadastrar Funcionário"
        onPress={cadastrar}
      />

      {loading ? (<ActivityIndicator color='black' size={45}/>) : (
        <FlatList
          data={usuarios}
          renderItem={({item}) => (<Listagem data={item}/> )}
        />
      )}
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
