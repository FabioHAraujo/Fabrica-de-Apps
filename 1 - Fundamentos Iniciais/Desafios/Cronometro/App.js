import React, { useState } from 'react';
import { View, StatusBar, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

let timer = null
let ss = 0
let mm = 0
let hh = 0

function Index(){

  const [tempo, setTempo] = useState('00:00:00')
  const [botao, setBotao] = useState('INICIAR')
  const [ultimo, setUltimo] = useState(null)

  function iniciar(){
    if(timer !== null){
      clearInterval(timer)
      timer = null
      setBotao('RETOMAR')
    } else {
      timer= setInterval(()=>{
        ss++
        if(ss==60) {
          ss = 0;
          mm ++;
        }
        if(mm==60){
          mm = 0
          hh++
        } 

        let format =
        (hh < 10 ? '0' + hh : hh) + ':'
        + (mm < 10 ? '0' + mm : mm) + ':'
        + (ss < 10 ? '0' + ss : ss)

        setTempo(format)
      }, 1000)
      setBotao('PARAR')
    }
  }

  function limpar(){
    if(timer!==null){
      clearInterval(timer)
      timer = null
    }
    setBotao('INICIAR')
    setUltimo(tempo)
    ss = 0
    mm = 0
    hh = 0
    setTempo('00:00:00')
  }

  return(
    <View style = {styles.container}>
      <StatusBar backgroundColor={'#00aeef'} barStyle={'dark-content'}/>
      <View style={styles.timerArea}>
        <Image 
          source ={require('./images/crono.png')}
          style={styles.img}
        />
        <Text style={styles.timer}> {tempo} </Text>
      </View>
      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={iniciar}>
          <Text style={styles.btnTexto}>{botao}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={limpar}>
          <Text style={styles.btnTexto}>LIMPAR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.areaUltimo}>
        <Text style={styles.ultimoTexto}>
          {ultimo ? 'Ultimo Tempo: ' + ultimo : ''}
        </Text>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#00aeef',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img:{
    position: 'absolute',
  },
  timerArea:{
    justifyContent:'center',
    alignItems: 'center',
    margin:100
  },
  btnArea:{
    flexDirection: 'row',
    padding: 30,
  },
  timer:{
    marginTop: 50,
    textAlign: 'center',
    fontSize: 45,
    fontWeight: 'bold',
    color: '#FFF'
  },
  btn:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnTexto:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  }, 
  areaUltimo:{
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  ultimoTexto:{
    fontWeight: 'bold',
    fontSize: 22,
    color: 'white',
    fontStyle: 'italic'
  }
})

export default Index;