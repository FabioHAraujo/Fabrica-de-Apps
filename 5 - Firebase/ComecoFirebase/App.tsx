// App.tsx
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { database } from "./src/firebase/connection";
import { ref, set, get, update } from "firebase/database";

const App = () => {
  const [nome, setNome] = useState<string | null>("Carregando...");
  const [idade, setIdade] = useState<string | null>("Carregando...");

  useEffect(() => {
    async function dados(){
      // await set(ref(database, 'tipo'), 'Cliente')
      // const resultado = await get(ref(database, 'tipo'))
      // console.log(resultado)

      // await set(ref(database, 'usuarios/'+4), {
      //   nome: 'Daniel',
      //   cargo: 'Skatista Pro'
      // })
      await update(ref(database, 'usuarios/'+4), {
        nome: 'Charles Emanuel',
        idade: 15
      })

      const resultado = await get(ref(database, 'usuarios/4'))
      console.log(resultado)
    }
    dados()
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nome: {nome}</Text>
      <Text style={styles.text}>Idade: {idade}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
});

export default App;
