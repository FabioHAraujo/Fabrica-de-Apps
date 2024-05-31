import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, StatusBar, ActivityIndicator } from "react-native";

import Filmes from "./src/Filmes";

import api from "./src/services/api";

export default function App() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get('r-api/?api=filmes')
      // console.log(response.data)
      setFilmes(response.data)
      setLoading(false)
    }
    loadFilmes();
  }, []);

  if(loading){
    return(
      <View style={styles.loading}>
        <ActivityIndicator color="#121212" size={45} />
      </View>
    )
  } else{
      return (
        <View style={styles.container}>
          <StatusBar backgroundColor={'#D5DBDB'} barStyle={'dark-content'}/>
          <FlatList 
            showsVerticalScrollIndicator={false}
            data={filmes}
            renderItem={({item}) => <Filmes data={item} />}
          />
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D5DBDB",
  },
  loading:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
