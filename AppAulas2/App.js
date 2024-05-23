import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);
  const [renderizado, setRendeizado] = useState(true)
  
  useEffect(()=>{
    console.log('Montou')
  },[contador])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button title="Aumentar" onPress={() =>setContador(contador+1)} />
      <Text style={{fontSize: 30}}>{contador}</Text>
      <Button title="Diminuir" onPress={() =>setContador(contador-1)} />
    
      <Button title="MOSTRAR NOME" onPress={() => setRendeizado(false)} />

      {renderizado && <Nome/>}
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function Nome(){

  useEffect(()=>{
    console.log('Componente nome foi montado')

    return () => console.log('Componente nome desmontado')
  }, [] )  

  return<Text>Matheus</Text>
}