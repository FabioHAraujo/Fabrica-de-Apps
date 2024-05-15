import React from 'react';
import { View, Text, Image } from 'react-native';

function Index(){
  let nome = "Fábio Henrique"
  let img = "https://sujeitoprogramador.com/reactlogo.png"
  return(
    <View>
      <Text>Olá Mundo!!!!!!</Text>
      <Text style={{ color: 'blue', fontSize: 25 }}>Meu Primeiro App</Text>
      <Text style={{ fontSize: 18, color: 'green' }}>
        Sujeito Programador
      </Text>

      <Logo largura={350} altura={350} fulano="Lucas Oliveira" />

      <Text>{nome}</Text>
    </View>
  );
};

export default Index;

function Logo(props) {
  let img = "https://sujeitoprogramador.com/reactlogo.png"
  
  return(
    <View>
      <Image source={{ uri: img }} style={{ width: props.largura, height: props.altura}} />
      <Text>{props.fulano}</Text>
    </View>
  )

}