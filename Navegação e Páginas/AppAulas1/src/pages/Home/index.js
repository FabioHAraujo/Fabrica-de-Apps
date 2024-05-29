import React from "react";
import { View, StyleSheet, Text, StatusBar, Button } from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  function navegaSobre(){
    navigation.navigate('Sobre')
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
    backgroundColor: '#6C3483',
  },
});
