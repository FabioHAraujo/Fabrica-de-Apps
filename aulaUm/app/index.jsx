import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

function Index(){
  const [nome, setNome] = useState("Paulo");
  const [idade, setIdade] = useState(20);

  function entrar(nome, idade){
    setNome(nome)
    setIdade(idade)
  }

  return(
    <View style = {{ marginTop: 25 }}>
      <Button title="Mudar nome" onPress={()=>{entrar('Lucas Oliveira', 33)}}/>
      <Text style={{fontSize:19}} >{nome}</Text>
      <Text style={{fontSize:17}} >{idade}</Text>
    </View>
  );
}

export default Index;

// function setNome(){
  
// }