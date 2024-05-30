import React, { useEffect } from "react";
import * as NavigationBar from "expo-navigation-bar";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";

import StackRoutes from "./stackRoutes";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";
import { DrawerLayoutAndroidBase } from "react-native";


export default function Routes() {
  // APENAS UMA DEPENDENCIA PRA ALTERAR A COR DA BARRA DE NAVEGAÇÃO
  useEffect(() => {
    async function setNavigationBarColor() {
      await NavigationBar.setBackgroundColorAsync("#202222");
      await NavigationBar.setButtonStyleAsync("light");
    }

    setNavigationBarColor();
  }, []);
  // -------------------------------------

  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitle: ''
      }}
    >
      <Drawer.Screen 
        name="HomeStack"
        component={StackRoutes}
      />
      <Drawer.Screen 
        name="Sobre"
        component={Sobre}
      />
      <Drawer.Screen 
        name="Contato"
        component={Contato}
      />
    </Drawer.Navigator>
  );
}
