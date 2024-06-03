import React, {useRef} from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import * as Animatable from "react-native-animatable";

const BotaoAnimado = Animatable.createAnimatableComponent(TouchableOpacity);

export default function App() {

  const botaoRef = useRef(null)

  function handleClick(){
    botaoRef.current.shake()
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
      <Animatable.Text
        style={styles.titulo}
        animation="tada"
        iterationCount={Infinity}
      >
        Sujeito Programador!
      </Animatable.Text>

      <BotaoAnimado style={styles.botao}
        animation='slideInDown'
        ref={botaoRef}
        onPress={handleClick}
      >
        <Text style={{ color: "#fff" }}>Animar</Text>
      </BotaoAnimado>
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
  titulo: {
    fontSize: 25,
  },
  botao: {
    width: "70%",
    height: 30,
    backgroundColor: "#505050",
    justifyContent: "center",
    alignItems: "center",
  },
});
