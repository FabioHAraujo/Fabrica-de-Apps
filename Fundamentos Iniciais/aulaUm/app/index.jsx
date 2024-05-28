import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Index(){
  return(
    <View style={styles.area}>
      <Text style={{fontSize:19}} >Matheus Pedroso</Text>
      <Text style={{fontSize:17}} >Fábio Henrique</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  area:{
    marginTop:60
  }
})

export default Index;