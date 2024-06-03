import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

interface ModalResultadoProps {
  alc: string;
  gas: string;
}

export default function ModalResultado({ alc, gas }: ModalResultadoProps) {
  const [visivel, setVisivel] = useState<boolean>(false);

  const valorAlcool = parseFloat(alc);
  const valorGasolina = parseFloat(gas);

  const comparacao = valorAlcool / valorGasolina;
  console.log(comparacao)

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.botaoModal}
        onPress={() => setVisivel(true)}
      >
        <Text style={styles.textoBotao}>Calcular</Text>
      </TouchableOpacity>
      <Modal visible={visivel} animationType="slide" style={styles.modal}>
        <View style={styles.containerResultado}>
          <Image source={require("../../assets/gas.png")} style={styles.imagemGas} />
          {comparacao > 0.7 ? (
            <Text style={styles.texto}>Gasolina é a melhor opção</Text>
          ) : (
            <Text style={styles.texto}>Álcool é a melhor opção</Text>
          )}
          <TouchableOpacity
            style={styles.botaoRecalculo}
            onPress={() => setVisivel(false)}
          >
            <Text style={styles.textoRecalculo}>Calcular Novamente</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    marginRight: 30,
  },
  botaoModal: {
    backgroundColor: "#FF0000",
    padding: 10,
    borderRadius: 8,
  },
  textoBotao: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  containerResultado: {
    flex: 1,
    backgroundColor: "#282424",
    alignItems: "center",
  },
  imagemGas: {
    margin: 50,
    height: 200,
    width: 200,
  },
  botaoRecalculo: {
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 8,
    height: 35,
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
  },
  textoRecalculo: {
    color: "red",
  },
  texto: {
    color: "#FFF",
    fontSize: 22,
    textAlign: "center",
    marginVertical: 20,
  },
});
