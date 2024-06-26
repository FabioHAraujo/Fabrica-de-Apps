import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Keyboard,
} from "react-native";
import Picker from "./src/components/Picker";

import api from "./src/services/api";

interface Moeda {
  key: string;
  label: string;
  value: string;
}

export default function App() {
  const [moedas, setMoedas] = useState<Moeda[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [moedaSelecionada, setMoedaSelecionada] = useState<string | null>(null);
  const [moedaInputValor, setMoedaInputValor] = useState<string>("");

  const [valorMoeda, setValorMoeda] = useState<string | null>(null);
  const [valorConvertido, setValorConvertido] = useState<string>("");

  useEffect(() => {
    async function loadMoedas() {
      const response = await api.get("all");
      let arrayMoedas: Moeda[] = [];
      Object.keys(response.data).map((key) => {
        arrayMoedas.push({
          key: key,
          label: key,
          value: key,
        });
      });
      setMoedas(arrayMoedas);
      setLoading(false);
    }
    loadMoedas();
  }, []);

  async function converter() {
    if (!moedaSelecionada || !moedaInputValor) {
      alert("Por favor, selecione uma moeda e digite um valor para conversão");
      return;
    }

    try {
      const response = await api.get(`all/${moedaSelecionada}-BRL`);
      const resultado = response.data[moedaSelecionada].ask * parseFloat(moedaInputValor);
      setValorConvertido(`R$ ${resultado.toFixed(2)}`);
      setValorMoeda(moedaInputValor);

      // Garante que o teclado fecha
      Keyboard.dismiss();
    } catch (error) {
      console.error("Erro ao converter a moeda:", error);
    }
  }

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color="#fff" size={45} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={"#101215"} barStyle={"light-content"} />
        <View style={styles.areaMoeda}>
          <Text style={styles.titulo}>Moeda para converter:</Text>
          <Picker
            moedas={moedas}
            onChange={(moeda: string) => setMoedaSelecionada(moeda)}
          />
        </View>

        <View style={styles.areaValor}>
          <Text style={styles.titulo}>Digite um valor para converter em R$</Text>
          <TextInput
            placeholder="EX: 150"
            style={styles.input}
            keyboardType="numeric"
            onChangeText={(valor) => setMoedaInputValor(valor)}
          />
        </View>

        <TouchableOpacity style={styles.botaoArea} onPress={converter}>
          <Text style={styles.botaoTexto}>Converter</Text>
        </TouchableOpacity>

        {valorConvertido !== "" && (
          <View style={styles.areaResultado}>
            <Text style={styles.valorConvertido}>{valorMoeda} {moedaSelecionada}</Text>
            <Text
              style={[styles.valorConvertido, { fontSize: 18, margin: 10 }]}
            >
              Corresponde à:
            </Text>
            <Text style={styles.valorConvertido}>{valorConvertido}</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#101215",
    alignItems: "center",
    paddingTop: 40,
  },
  areaMoeda: {
    width: "90%",
    backgroundColor: "#F9F9F9",
    paddingTop: 9,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
  },
  titulo: {
    color: "#000",
    fontSize: 15,
    paddingTop: 5,
    paddingLeft: 5,
  },
  areaValor: {
    width: "90%",
    backgroundColor: "#F9F9F9",
    paddingBottom: 9,
    paddingTop: 9,
  },
  input: {
    width: "100%",
    padding: 10,
    height: 45,
    fontSize: 20,
    marginTop: 9,
    color: "#000",
  },
  botaoArea: {
    width: "90%",
    backgroundColor: "#FB4B57",
    height: 45,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  },
  botaoTexto: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  areaResultado: {
    width: "90%",
    backgroundColor: "#fff",
    marginTop: 35,
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
  },
  valorConvertido: {
    fontSize: 39,
    fontWeight: "bold",
    color: "black",
  },
});
