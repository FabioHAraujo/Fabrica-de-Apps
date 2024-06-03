import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function List(props) {
  function carregaIcone(likeada) {
    return likeada
      ? require("../imgs/likeada.png")
      : require("../imgs/like.png");
  }

  function mostraLikes(likes){
    if(likes === 0){
      return
    } 
    // else if(likes=== 1){
    //   return <Text style={styles.likes}>1 Curtida</Text>
    // } else {
    //   return <Text style={styles.likes}>{likes} Curtidas</Text>
    // }
    return (
      <Text style={styles.likes}>{likes} {likes > 1 ? 'Curtidas' : 'Curtida'}</Text>
    )
  }

  return (
    <View>
      <View style={styles.ViewPerfil}>
        <Image
          source={{ uri: props.data.imgperfil }}
          style={styles.fotoPerfil}
        />
        <Text style={styles.nomeUsuario}>{props.data.nome}</Text>
      </View>
      <Image
        resizeMode="cover"
        source={{ uri: props.data.imgPublicacao }}
        style={styles.fotoPubli}
      />

      <View style={styles.areaBtn}>
        <TouchableOpacity>
          <Image
            source={carregaIcone(props.data.likeada)}
            style={styles.icons}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../imgs/comment.png")} style={styles.icons} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../imgs/send.png")} style={styles.icons} />
        </TouchableOpacity>
      </View>

      {mostraLikes(props.data.likers)}

      
      <Text style={styles.descricao}>
        <Text style={styles.nomeRodape}>{props.data.nome}</Text> {props.data.descricao}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ViewPerfil: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  fotoPerfil: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  nomeUsuario: {
    paddingLeft: 5,
    fontSize: 22,
    color: "black",
  },
  fotoPubli: {
    height: 400,
    alignItems: "center",
  },
  areaBtn: {
    flexDirection: "row",
    padding: 5,
  },
  icons: {
    height: 25,
    width: 25,
    marginLeft: 9,
    marginRight: 9
  },
  likes:{
    fontWeight: 'bold',
    paddingLeft: 10
  },
  rodape:{
    flexDirection: 'row',
    paddingLeft: 10
  },
  descricao:{
    paddingLeft: 10,
    paddingRight: 10
  },
  nomeRodape:{
    color: 'black',
    fontWeight: 'bold'
  }
});
