import React, { useLayoutEffect, useEffect } from "react";
import { View, StyleSheet, Text, StatusBar, Button } from "react-native";
import * as NavigationBar from "expo-navigation-bar";

import { useNavigation, useRoute } from "@react-navigation/native";

export default function Sobre() {
  const navigation = useNavigation();
  const route = useRoute();

  // APENAS UMA DEPENDENCIA PRA ALTERAR A COR DA BARRA DE NAVEGAÇÃO
  useEffect(() => {
    async function setNavigationBarColor() {
      await NavigationBar.setBackgroundColorAsync("#fff");
      await NavigationBar.setButtonStyleAsync("dark");
    }

    setNavigationBarColor();
  }, []);
  // -------------------------------------

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.nome === '' ? 'Página Sobre' : route.params?.nome
    })
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
      <Text>Tela Sobre</Text>
      <Text>{route.params?.nome}</Text>
      <Text>{route.params?.email}</Text>
      <Button
        title="Voltar"
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Tela Contatos"
        onPress={() => navigation.navigate("Contato")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
