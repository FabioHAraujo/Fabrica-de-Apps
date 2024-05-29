import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native'
import * as NavigationBar from "expo-navigation-bar";
import Ionicons from '@expo/vector-icons/Ionicons';


import Home from "./src/pages/Home";
import Sobre from "./src/pages/Sobre";
import Contato from "./src/pages/Contato";

const Tab = createBottomTabNavigator();

export default function App() {
    // APENAS UMA DEPENDENCIA PRA ALTERAR A COR DA BARRA DE NAVEGAÇÃO
    useEffect(() => {
      async function setNavigationBarColor() {
        await NavigationBar.setBackgroundColorAsync("#202222");
        await NavigationBar.setButtonStyleAsync("light");
      }
  
      setNavigationBarColor();
    }, []);
    // -------------------------------------



  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#e6e6e6',
          tabBarStyle:{
            backgroundColor: '#202222',
            borderTopWidth: 0,
          },
        }}
      >
        <Tab.Screen 
          name='Home'
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => {
              return <Ionicons name='home' color={color} size={size} />
            },
          }}
        />
        <Tab.Screen 
          name='Sobre'
          component={Sobre}
          options={{
            tabBarIcon: ({color, size}) => {
              return <Ionicons name='document-text' color={color} size={size} />
            },
            //headerShown: false,
          }}
        />
        <Tab.Screen 
          name='Contato'
          component={Contato}
          options={{
            tabBarIcon: ({color, size}) => {
              return <Ionicons name='call' color={color} size={size} />
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
