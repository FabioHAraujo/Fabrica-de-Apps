import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Index(){
  return(
    <View style={styles.area}>
      <Text style={[styles.titulo, styles.textoAlinhado]} >Matheus Pedroso</Text>
      <Text style={styles.titulo} >Fábio Henrique</Text>
      <Text style={styles.subTitulo}>Salve salve</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  area:{
    marginTop:50
  },
  titulo:{
    fontSize: 20,
    color: 'red'
  },
  subTitulo:{
    fontSize: 25,
    fontWeight: 'bold',
    color: 'green'
  },
  textoAlinhado:{
    textAlign: 'center'
  }
})

export default Index;