// HomeScreen.js

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ImageBackground
        source={require("../../assets/backPesquisa.jpg")}
        style={styles.background}
      >
        <LinearGradient
          colors={["transparent", "#000"]}
          style={styles.gradient}
        />
        <LinearGradient
          colors={["#000", "transparent"]}
          style={styles.gradientTop}
        />
        <View style={styles.containerPesquisa}>
          
        </View>
        <Text>Home Screen</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "80%",
  },
  gradientTop:{
    position: "absolute",
    left: 0,
    right: 0,
    top: 0, // Alterado de bottom para top
    height: "20%", // Alterado para 20% da altura da tela
  },
});

export default HomeScreen;
