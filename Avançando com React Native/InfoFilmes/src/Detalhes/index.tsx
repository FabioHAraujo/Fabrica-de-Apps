import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export default function Detalhes(props: any){
  return(
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.botaoVoltar} onPress={props.voltar}>
          <Text style={styles.textoVoltar}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.titulo}>{props.filme.nome}</Text>
        <Text style={styles.descricao}>Sinopse</Text>
        <Text style={styles.sinopse}>{props.filme.sinopse}</Text>
      </View>
      <Text>DETALHES DO FILME</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  modalContainer:{
    height: '80%',
    width: '100%',
    backgroundColor: '#121212',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5, 
  },
  botaoVoltar:{
    backgroundColor: '#E52246',
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5, 
  },
  textoVoltar:{
    color: '#FFF',
    fontSize: 16
  },
  titulo:{
    color: '#FFF',
    textAlign: 'center',
    padding: 10,
    fontSize: 28,
    fontWeight: 'bold'
  },
  descricao:{
    color: '#FFF',
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 10,
  },
  sinopse:{
    color: '#FFF',
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'justify'
  }

})