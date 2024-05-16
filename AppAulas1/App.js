import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Index(){
  return(
    <View style={{
      flex: 1, 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: 'lightblue'}}>
      <View style={{height:50, width:50, backgroundColor: 'black' }}></View>
      <View style={{height:50, width:50, backgroundColor: 'gray' }}></View>
      <View style={{height:50, width:50, backgroundColor: 'white' }}></View>
    </View>
  );
}

export default Index;