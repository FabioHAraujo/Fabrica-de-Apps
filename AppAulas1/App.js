import React, { useState } from "react";
import { View, StatusBar, StyleSheet, Text } from "react-native";
import Slider from '@react-native-community/slider';

function Index() {
  const [valor, setValor] = useState(50)


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
      <Text style={styles.texto}>Selecione seu peso:</Text>
      <Slider 
        maximumValue={0}
        maximumValue={100}
        value={valor}
        onValueChange={(valorSelecionado)=>setValor(valorSelecionado)}
        minimumTrackTintColor="blue"
        maximumTrackTintColor="red"
        thumbTintColor="purple"
      />

      <Text style={styles.valor}>Você tem: {valor.toFixed(0)}kg</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35
  },
  valor:{
    textAlign: 'center'
  },
  texto:{
    textAlign: 'center',
    color: 'cian',
    fontSize: 22,
  }
});

export default Index;
