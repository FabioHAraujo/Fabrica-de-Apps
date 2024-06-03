import React, { useState } from "react";
import { View, StatusBar, StyleSheet, Text, Switch } from "react-native";

function Index() {
  const [status, setStatus] = useState(false)


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />

      <Switch 
        value={status}
        onValueChange={(statusSwitch) => setStatus(statusSwitch)}
        trackColor={{ false: '#ddd', true: '#9FE2BF'}}
        thumbColor={status ? '#008080' : '#454545'}
      />

      <Text style={styles.valor}>
        A tomada está: { status ? "Ligada" : "Desligada" }
      </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
    alignItems: 'center'
  },
  valor:{
    textAlign: 'center'
  },
  texto:{
    textAlign: 'center',
    color: 'cian',
    fontSize: 22,
  }
});

export default Index;
