import React, { useRef, useEffect } from "react";
import { StyleSheet, Text, View, StatusBar, Animated } from "react-native";

export default function App() {
  const larguraAnimada = useRef(new Animated.Value(0)).current;
  const alturaAnimada = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(larguraAnimada, {
        toValue: 100,
        duration: 4000,
        useNativeDriver: false
      }),
      Animated.timing(alturaAnimada, {
        toValue: 100,
        duration: 4000,
        useNativeDriver: false
      })
    ]).start( () => {
      // CHAMA QUANDO FINALIZAR A ANIMAÇÃO
    })
  }, []);

  let porcentagemLargura = larguraAnimada.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%']
  })

  let porcentagemAltura = alturaAnimada.interpolate({
    inputRange: [50, 100],
    outputRange: ['5%', '100%']
  })

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.animacao,
          {
            width: porcentagemLargura,
            height: porcentagemAltura,
          },
        ]}
      >
        <Text style={styles.textoCarregando}></Text>
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
