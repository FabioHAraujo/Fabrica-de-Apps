import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Pessoa(props){
    return(
      <View style={styles.areaPessoa}>
        <Text style={styles.textoPessoa}>{props.data.nome}</Text>
        <Text style={styles.textoPessoa}>{props.data.idade}</Text>
        <Text style={styles.textoPessoa}>{props.data.email}</Text>
      </View>
    )
  }

const styles = StyleSheet.create({
    areaPessoa:{
        backgroundColor: '#ddd',
        height: 200,
        marginBottom: 15,
        padding: 15
      },
      textoPessoa:{
        color:'#000'
      }
})

export default Pessoa