import React, { useState } from 'react';
import { View, StatusBar, Text, StyleSheet, ScrollView } from 'react-native';

let timer = null
let ss = 0
let mm = 0
let hh = 0

function Index(){
  return(
    <View style = {styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'}/>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
        <View style={styles.box4}></View>
        <View style={styles.box2}></View>
      </ScrollView>
    </View>
  );
}



const styles = StyleSheet.create({
  container:{
    flex:1
  },
  box1:{
    height: 250,
    width: 150,
    backgroundColor: 'red'
  },
  box2:{
    height: 250,
    width: 150,
    backgroundColor: 'green'
  },
  box3:{
    height: 250,
    width: 150,
    backgroundColor: 'yellow'
  },
  box4:{
    height: 250,
    width: 150,
    backgroundColor: 'blue'
  }
})

export default Index;
