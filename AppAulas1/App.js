import React, { useState } from 'react';
import { View, StatusBar, Text, TextInput, StyleSheet, Button } from 'react-native';

function Index(){
  const [nome, setNome] = useState('')
  const [ input, setInput ] = useState('')

  function entrar(){
    if(input===''){
      alert('Digite seu nome')
      return;
    }
    setNome(input)
  }

  return(
    <View style = {styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'}/>
      <TextInput
        style = {styles.input}
        placeholder='Digite seu nome'
        onChangeText={(texto)=> setInput(texto)}
      />

      <Button title='Entrar' onPress={ entrar } />

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
    fontSize: 20,
    marginBottom: 10
  },
  texto:{
    fontSize: 25,
    textAlign: 'center',
    marginTop: 15
  }

})

export default Index;
