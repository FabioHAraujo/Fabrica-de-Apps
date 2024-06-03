// MainTab.js

import React, {useEffect} from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as NavigationBar from "expo-navigation-bar";
import HomeScreen from "../HomeScreen";
import ProfileScreen from "../ProfileScreen";

import FontAwesome from "@expo/vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

const MainTab = () => {
    // APENAS UMA DEPENDENCIA PRA ALTERAR A COR DA BARRA DE NAVEGAÇÃO
  useEffect(() => {
  async function setNavigationBarColor() {
    await NavigationBar.setBackgroundColorAsync("#2e2926");
    await NavigationBar.setButtonStyleAsync("light");
  }

  setNavigationBarColor();
  }, [])
  // -------------------------------------------------------


  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: "#2e2926", borderTopWidth: 0 },
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#808080",
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MainTab;
