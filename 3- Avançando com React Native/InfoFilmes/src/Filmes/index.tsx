import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";

import Detalhes from "../Detalhes";

function Filmes({data}: {data: any}) {
  const [visibleModal, setVisibleModal] = useState(false);
  
  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.titulo}>{data.nome}</Text>
        {/* <Text style={styles.sinopse}>{props.sinopse}</Text> */}
        <Image source={{ uri: data.foto }} style={styles.capa} />
        <View style={styles.areaBotao}>
          <TouchableOpacity style={styles.botao} onPress={() => setVisibleModal(true)}>
            <Text style={styles.botaoTexto}>LEIA MAIS</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal animationType="slide" visible={visibleModal} transparent={true}>
        <Detalhes filme={data} voltar={()=>{setVisibleModal(false)}}/>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    margin: 15,
    elevation: 2,
  },
  capa: {
    height: 250,
    zIndex: 2,
  },
  titulo: {
    padding: 15,
    fontSize: 18,
    fontWeight: "bold",
  },
  areaBotao: {
    alignItems: "flex-end",
    zIndex: 9,
    marginTop: -45,
  },
  botao: {
    width: 100,
    backgroundColor: "#09A6FF",
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  botaoTexto: {
    color: "#fff",
    textAlign: "center",
  },
  sinopse: {},
});

export default Filmes;