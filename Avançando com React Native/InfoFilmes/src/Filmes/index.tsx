import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function Filmes(props: any){
  return (
    <View>
      <Text style={styles.titulo}>{props.nome}</Text>
      <Text style={styles.sinopse}>{props.sinopse}</Text>
      <Image 
        source={{uri: props.foto}}
        style={styles.imagem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  titulo:{

  },
  sinopse:{

  },
  imagem:{
    width: '80%',
    height: 300
  }
})