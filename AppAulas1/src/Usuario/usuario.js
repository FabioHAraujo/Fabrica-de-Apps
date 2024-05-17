import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Usuario(props) {
  return (
    <View style={styles.div}>
      <Text style={styles.texto}>{props.data.nome}</Text>
      <Text style={styles.texto}>{props.data.cargo}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  div: {
    backgroundColor: "#121343",
    justifyContent: 'center',
    height: 200,
    marginTop: 20,
    padding: 15
  },
  texto:{
    fontWeight: 'bold',
    fontSize: 25,
    color: '#fff'
  }
})

export default Usuario