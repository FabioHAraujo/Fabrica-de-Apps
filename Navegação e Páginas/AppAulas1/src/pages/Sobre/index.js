import React from "react";
import { View, StyleSheet, Text, StatusBar, Button } from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function Sobre() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Tela Sobre</Text>
      <Button
        title="Ir para Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
