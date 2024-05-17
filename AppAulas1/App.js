import React, { useState } from "react";
import { View, StatusBar, StyleSheet, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

function Index() {
  const [carro, setCarro] = useState(0)
  const [listaCarros, setlistaCarros] = useState([
    {key: 1, nome: 'Golf 1.6', valor: 62000},
    {key: 2, nome: 'Jetta 2.0', valor: 75000},
    {key: 3, nome: 'Passat 2.0', valor: 90000},
    {key: 4, nome: 'Tiguan 2.0', valor: 100000},
    {key: 5, nome: 'T-Cross 1.4', valor: 80000},
    {key: 6, nome: 'Amarok 3.0', valor: 120000},
    {key: 7, nome: 'Maverick V8', valor: 400000}
  ])

  let listaCarrosItem = listaCarros.map((v, k) => {
    return <Picker.Item key={k} value={k} label={v.nome}/>
  })

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
      <Picker
        selectedValue={carro}
        onValueChange={(itemValue, itemIndex) => setCarro(itemValue)}
      >
        {listaCarrosItem}
      </Picker>

      <Text style={styles.listaCarros}>Carro: {listaCarros[carro].nome}</Text>
      <Text style={styles.listaCarros}>Valor: {listaCarros[carro].valor}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carro:{
    marginTop: 15,
    fontSize: 25
  }
});

export default Index;
