import React from "react";
import { View, StatusBar, StyleSheet, Text } from "react-native";
import Usuario from "./src/Usuario/usuario";

const usuarios = [
  { id: "1", nome: "Fábio Araújo", cargo: "Desenvolvedor" },
  { id: "2", nome: "Henrique Silva", cargo: "Gerente de Projetos" },
  { id: "3", nome: "Maria Santos", cargo: "Analista de Sistemas" },
  { id: "4", nome: "João Oliveira", cargo: "Designer" },
  { id: "5", nome: "Ana Souza", cargo: "Engenheira de Software" },
  { id: "6", nome: "Carlos Santos", cargo: "Administrador de Redes" },
  { id: "7", nome: "Luciana Pereira", cargo: "Suporte Técnico" },
  { id: "8", nome: "Roberto Lima", cargo: "Gerente de TI" },
];

function Index() {
  const usuario = usuarios.find((user) => user.id === "5");

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
      <View style={styles.header}>
        <Text style={styles.headerText}>Seja Bem-Vindo</Text>
      </View>
      <Usuario data={usuario}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ddd",
    height: 60,
  },
  headerText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Index;
