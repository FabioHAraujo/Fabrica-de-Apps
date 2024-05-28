import React, { useState } from "react";
import { StatusBar, StyleSheet, Text, View, Modal, Button, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome6';

import Detalhes from "./src/Detalhes";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
      <FontAwesome name='user' size={80} color='red'/>
      <Ionicons name='gift' size={80} color='red'/>
      <TouchableOpacity style={styles.btnYoutube}>
        <FontAwesome name='youtube' size={32} color='red'/>
        <Text style={styles.btnText}>Acessar Canal</Text>
      </TouchableOpacity>
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
  btnYoutube:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#4848',
    borderRadius: 8
  },
  btnText:{
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    margin: 3
  }
});
