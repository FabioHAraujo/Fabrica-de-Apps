import { useEffect } from 'react'
import * as NavigationBar from 'expo-navigation-bar';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function App() {
  useEffect(() => {
    async function setNavigationBarColor() {
      await NavigationBar.setBackgroundColorAsync('#fefefe');
      await NavigationBar.setButtonStyleAsync('dark');
    }

    setNavigationBarColor();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Finalmente, os botões de navegação estão bons!</Text>
      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
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
