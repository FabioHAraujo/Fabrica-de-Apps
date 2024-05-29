import React,{ useEffect } from "react";
import { View, StyleSheet, Text, StatusBar, Button } from "react-native";
import * as NavigationBar from 'expo-navigation-bar';

import { useNavigation } from "@react-navigation/native";

export default function Home() {
  // APENAS UMA DEPENDENCIA PRA ALTERAR A COR DA BARRA DE NAVEGAÇÃO
  useEffect(() => {
    async function setNavigationBarColor() {
      await NavigationBar.setBackgroundColorAsync('#fff');
      await NavigationBar.setButtonStyleAsync('dark');
    }

    setNavigationBarColor();
  }, []);
  // -------------------------------------

  const navigation = useNavigation();

  function navegaSobre(){
    navigation.navigate('Sobre', {nome: 'Fábio Henrique', email: 'fabio@teste.com'})
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
      <Text>Tela Home</Text>
      <Button title="Ir para Sobre" onPress={ navegaSobre } />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#fff',
  },
});
