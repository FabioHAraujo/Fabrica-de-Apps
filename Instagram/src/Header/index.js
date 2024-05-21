import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'

export default function Header(){
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Image 
          source={require('../imgs/logo.png')}
          style={styles.logo}
          />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image 
          source={require('../imgs/send.png')}
          style={styles.send}
          />
      </TouchableOpacity>
    </View>             
  )
}

const styles = StyleSheet.create({
  header:{
    height: 55,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 0.2,
    shadowColor: 'black',
    borderBottomColor: 'grey',
    elevation: 8
  },
  logo:{

  },
  send:{
    width: 23,
    height: 23
  }
})