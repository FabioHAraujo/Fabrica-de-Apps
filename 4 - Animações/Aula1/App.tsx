import React, { useRef, useEffect } from "react";
import { StyleSheet, Text, View, StatusBar, Animated } from "react-native";

export default function App() {
  const larguraAnimada = useRef(new Animated.Value(150)).current;
  const alturaAnimada = useRef(new Animated.Value(100)).current;
  const opacidadeAnimada = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(opacidadeAnimada, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: false,
      }),
      Animated.parallel([
        Animated.timing(larguraAnimada, {
          toValue: 300,
          duration: 2000,
          useNativeDriver: false,
        }),
        Animated.timing(alturaAnimada, {
          toValue: 200,
          duration: 2000,
          useNativeDriver: false,
        }),
      ]),
      Animated.timing(opacidadeAnimada, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: false,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
      <Animated.View
        style={[
          styles.animacao,
          {
            width: larguraAnimada,
            height: alturaAnimada,
            opacity: opacidadeAnimada,
          },
        ]}
      >
        <Text style={styles.textoCarregando}>Carregando...</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  animacao: {
    backgroundColor: "#4169e1",
    justifyContent: "center",
  },
  textoCarregando: {
    textAlign: "center",
    fontSize: 22,
    color: "white",
  },
});
