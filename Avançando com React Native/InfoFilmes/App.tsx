import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, StatusBar } from "react-native";

import Filmes from "./src/Filmes";

import api from "./src/services/api";

export default function App() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get('r-api/?api=filmes')
      // console.log(response.data)
      setFilmes(response.data)
    }
    loadFilmes();
  }, []);

  return (
    <View style={styles.container}>
    <FlatList 
      data={filmes}
      renderItem={({item}) => Filmes(item)}
    />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
