import React, { useState } from "react";
import { StatusBar, StyleSheet, Text, View, Modal, Button } from "react-native";

import Detalhes from "./src/Detalhes";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  function abreModal() {
    setModalVisible(true);
  }
  function fechaModal() {
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
      <Button title="Acessar" onPress={abreModal} />
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <Detalhes fechar={fechaModal} />
      </Modal>
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
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#121212",
  },
});
