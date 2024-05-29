import { useEffect } from 'react'
import * as NavigationBar from 'expo-navigation-bar';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';

import { useNavigation, StackActions } from "@react-navigation/native";

export default function Contato() {
  const navigation = useNavigation();
    
  useEffect(() => {
    async function setNavigationBarColor() {
      await NavigationBar.setBackgroundColorAsync('#fff');
      await NavigationBar.setButtonStyleAsync('dark');
    }

    setNavigationBarColor();
  }, []);

  function handleHome(){
    navigation.dispatch(StackActions.popToTop())
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
      <Text>Contatos Aqui</Text>
      
      <Button title="Voltar à Home" onPress={handleHome}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
