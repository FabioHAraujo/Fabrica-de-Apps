import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

// NOTA EXTREMAMENTE RELEVANTE - props são tipadas em TypeScritp, por mais que compile, é chato manter um erro.
// Por isso, define-se o tipo a ser recebido usando o ':", como fiz abaixo
export default function CustomDrawer(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.itens}>
        <Image 
          source={require('../../assets/perfil.png')}
          style={styles.imgPerfil}
        />
        <Text style={styles.welcome}>
          Bem-Vindo!
        </Text>
      </View>

      <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  itens: {
    width: '100%',
    height: 85,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  imgPerfil:{
    width: 65, 
    height: 65
  },
  welcome:{
    color: 'black',
    fontSize: 17,
    marginTop: 5,
    marginBottom: 35,
  }
  
});
