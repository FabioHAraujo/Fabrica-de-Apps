// App.tsx
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { database } from "./src/firebase/connection";
import { ref, get } from "firebase/database";

const App = () => {
  const [nome, setNome] = useState<string | null>("Carregando...");
  const [idade, setIdade] = useState<string | null>("Carregando...");

  useEffect(() => {
    const fetchNome = async () => {
      const nomeRef = ref(database, "usuarios/1");
      try {
        const snapshot = await get(nomeRef);
        if (snapshot.exists()) {
          setNome(snapshot.val().nome);
          setIdade(snapshot.val().idade);
        } else {
          console.log("Sem dados disponiveis");
        }
      } catch (error) {
        console.error("Erro buscando dados: ", error);
      }
    };

    fetchNome();
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
