import React, { useState } from 'react';
import { View, StatusBar, Text, TextInput, StyleSheet } from 'react-native';

function Index(){
  const [nome, setNome] = useState('')
  
  function pegaNome(texto){
    if(texto.length > 0){
      setNome('Bem-Vindo '+texto)
    } else{
      setNome('')
    }
  }

  return(
    <View style = {styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'}/>
      <TextInput
        style = {styles.input}
        placeholder='Digite seu nome'
        onChangeText={(texto)=> pegaNome(texto)}
      />

      <Text style={styles.texto}>{nome}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding: 15
  },
  input:{
    height: 45,
    borderWidth: 1,
    padding: 10,
    fontSize: 20
  },
  texto:{
    fontSize: 25,
    textAlign: 'center'
  }

})

export default Index;
