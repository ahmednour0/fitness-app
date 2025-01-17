import React from "react";
import { StyleSheet, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import HomeScreen from "./screens/HomeScreen";
import WorkoutScreen from "./screens/WorkoutScreen";
import FitScreen from "./screens/FitScreen";
import RestScreen from "./screens/RestScreen";
const StackNavigator = () => {
  return (

    <NavigationContainer>
    
      <Stack.Navigator >
      
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false    }}
          
        />
        <Stack.Screen
          name="Workout"
          component={WorkoutScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Fit"
          component={FitScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Rest"
          component={RestScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default StackNavigator;
