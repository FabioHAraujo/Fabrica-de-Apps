import React, { useState } from 'react';
import { View, StatusBar, StyleSheet, FlatList, Text } from 'react-native';


function Index(){

  const [feed, setFeed] = useState([
    {_id: '1', nome: 'Fábio', idade: 23, email: 'fabio@example.com'},
    {_id: '2', nome: 'Henrique', idade: 84, email: 'henrique@example.com'},
    {_id: '3', nome: 'Maria', idade: 45, email: 'maria.silva@example.com'},
    {_id: '4', nome: 'João', idade: 30, email: 'joao.oliveira@example.com'},
    {_id: '5', nome: 'Ana', idade: 28, email: 'ana.souza@example.com'},
    {_id: '6', nome: 'Carlos', idade: 50, email: 'carlos.santos@example.com'}
  ])

  return(
    <View style = {styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'}/>
      <FlatList 
        data={feed}
        keyExtractor={(item) => item._id} //Necessário somente caso o id não venha como "id"
        renderItem={({item})=><Pessoa data={item}/>}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}



const styles = StyleSheet.create({
  container:{
    flex:1
  },
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

export default Index;

function Pessoa(props){
  return(
    <View style={styles.areaPessoa}>
      <Text style={styles.textoPessoa}>{props.data.nome}</Text>
      <Text style={styles.textoPessoa}>{props.data.idade}</Text>
      <Text style={styles.textoPessoa}>{props.data.email}</Text>
    </View>
  )
}