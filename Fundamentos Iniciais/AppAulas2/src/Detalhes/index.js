import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Detalhes(props) {
  return (
    <View style={styles.container}>
      <View style={styles.caixaModal}>
        <Text style={styles.titulo}>Seja Bem-Vindo</Text>
        <Button title="Fechar" onPress={props.fechar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  caixaModal:{
    width: '100%',
    height: 350,
    backgroundColor: '#DDD',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15
  },
  titulo:{
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20
  }
});
