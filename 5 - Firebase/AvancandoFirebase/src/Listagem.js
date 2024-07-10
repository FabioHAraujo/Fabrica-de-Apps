import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

export default function Listagem({data}){
  return(
    <View style={styles.container}>
      <Text style={styles.nome}>{data.nome}</Text>
      <Text style={styles.idade}>{data.idade}</Text>
      <Text style={styles.cargo}>{data.cargo}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 10,
    marginBottom: 5,
    backgroundColor: 'lightgrey',
    padding: 10,
    borderRadius: 8,
  },
  nome:{
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  },
  idade:{
    fontWeight: '500',
    fontSize: 16,
    textAlign: 'center'
  },
  cargo:{
    fontSize: 16,
    textAlign: 'center'
  }
})