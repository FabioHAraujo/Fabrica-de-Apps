import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, View, Switch, TouchableOpacity, Alert } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider'

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0)
  const [gender, setGender] = useState('naoinformado');
  const [limit, setLimit] = useState(0);
  const [studant, setStudant] = useState(false);

  function createAccount(){
    Alert.alert('Conta Criada',
      "Sua Conta: " + Math.floor(Math.random() * 999999)
      + "\nAgência: " + Math.floor(Math.random() * 9999)
      + "\nNome: " + name
      + "\nE-mail: " + email
      + "\nIdade: " + age
      + "\nGênero: " + gender
      + "\nLimite: " + limit
      + "\nEstudante: " + (studant ? 'Sim' : 'Não')
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar backgroundColor='#5CADFF' style='light' />
      <View style={styles.header}>
        <Text style={styles.textWelcome}>Bem-Vindo ao Banco Sujeito</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.explanation}>Para começar seu cadastro, precisaremos de alguns dados:</Text>

        <Text style={styles.inputText}>Digite seu nome abaixo:</Text>
        <TextInput inputMode='text' placeholder='Fulano de Tal' 
          style={styles.input} value={name} onChangeText={setName}></TextInput>

        <Text style={styles.inputText}>Digite seu e-mail:</Text>
        <TextInput inputMode='email' placeholder='fulano.ciclano@exemplo.com' 
        style={styles.input} value={email} onChangeText={setEmail}></TextInput>

        <Text style={styles.inputText}>Digite sua idade:</Text>
        <TextInput inputMode='numeric' placeholder='XX' 
        style={styles.input} value={age} onChangeText={setAge}></TextInput>

        <Text style={styles.inputText}>Escolha seu gênero ou orientação:</Text>
        <Picker 
          selectedValue={gender}
          onValueChange={(itemValue) => setGender(itemValue)
          }>
          <Picker.Item label='Masculino' value='masculino' />
          <Picker.Item label='Feminino' value='feminino' />
          <Picker.Item label='Agênero' value='agenero' />
          <Picker.Item label='Bigênero' value='bigenero' />
          <Picker.Item label='Prefiro Não Informar' value='naoinformado' />
        </Picker>

        <Text style={styles.inputText}>Quanto limite está buscando para seu cartão?</Text>
        <Slider 
          minimumValue={0}
          maximumValue={12000}
          minimumTrackTintColor="lightgreen"
          maximumTrackTintColor='red'
          onValueChange={(spectedValue) => setLimit(spectedValue)}
          step={100}
          />
        <Text>{limit.toFixed(0)}</Text>

        <View style={styles.studantContainer}>
          <Text style={styles.inputText}>Você é estudante? {studant ? 'Sim' : 'Não'}</Text>
          <Switch 
            trackColor={{false: 'grey', true: 'lightgreen'}}
            value={studant}
            onValueChange={setStudant}
          />
        </View>
        <TouchableOpacity 
          style={styles.createAccount}
          onPress={createAccount}  
        >
          <Text style={styles.createAccountText}>Abrir Minha Conta</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header:{
    flex: 1,
    backgroundColor: '#5CADFF',
    justifyContent: 'flex-end',
    borderRadius: 35,
    padding: 15
  },
  container: {
    flex: 8,
    paddingTop: 35,
    margin: 10
  },
  textWelcome: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  explanation:{
    textAlign: 'justify',
    fontSize: 22,
    marginTop: 5,
    marginBottom: 5,
  },
  inputText:{
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
  },
  input:{
    fontSize: 20,
    padding: 5,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: 'black',
  },
  studantContainer:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -100
  },
  createAccount:{
    borderWidth: 0.5,
    borderRadius: 15,
    backgroundColor: '#5CADFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    marginTop: -80
  },
  createAccountText:{
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold'
  }
});
