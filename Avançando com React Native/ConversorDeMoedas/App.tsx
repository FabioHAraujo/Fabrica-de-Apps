import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity } from 'react-native';

import Picker from './src/components/Picker/inex';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#101215'} barStyle={'light-content'}/>
      <View style={styles.areaMoeda}>
        <Text style={styles.titulo}>Moeda para converter:</Text>
        <Picker />
      </View>

      <View style={styles.areaValor}>
        <Text style={styles.titulo}>Digite um valor para converter em R$</Text>
        <TextInput 
          placeholder='EX: 150'
          style={styles.input}
          keyboardType='numeric'
        />
      </View>

      <TouchableOpacity style={styles.botaoArea}>
        <Text style={styles.botaoTexto}>Converter</Text>
      </TouchableOpacity>

      <View style={styles.areaResultado}>
        <Text style={styles.valorConvertido}>3 USD</Text>
        <Text style={[styles.valorConvertido, {fontSize: 18, margin: 10}]}>Corresponde à:</Text>
        <Text style={styles.valorConvertido}>15R$</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101215',
    alignItems: 'center',
    paddingTop: 40
  },
  areaMoeda:{
    width: '90%',
    backgroundColor: '#F9F9F9',
    paddingTop: 9,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9
  },
  titulo:{
    color: '#000',
    fontSize: 15,
    paddingTop: 5,
    paddingLeft: 5,
  },
  areaValor:{
    width: '90%',
    backgroundColor: '#F9F9F9',
    paddingBottom: 9,
    paddingTop: 9,
  },
  input:{
    width: '100%',
    padding: 10,
    height: 45,
    fontSize: 20,
    marginTop: 9,
    color: '#000'
  },
  botaoArea:{
    width: '90%',
    backgroundColor: '#FB4B57',
    height: 45,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
    alignItems: 'center',
    justifyContent: 'center'
  },
  botaoTexto:{
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },
  areaResultado:{
    width: '90%',
    backgroundColor: '#fff',
    marginTop: 35,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25
  },
  valorConvertido:{
    fontSize: 39,
    fontWeight: 'bold',
    color: 'black'
  }
});
