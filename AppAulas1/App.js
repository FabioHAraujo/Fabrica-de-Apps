import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Index(){
  return(
    <View style={{flex: 1, backgroundColor: '#a9a9a9'}}>
      <View style={{height:65, backgroundColor: '#a9a9a9' }}></View>
      <View style={{flex:1, backgroundColor: '#ddd' }}></View>
      <View style={{height:65, backgroundColor: '#a9a9a9' }}></View>
    </View>
  );
}

export default Index;