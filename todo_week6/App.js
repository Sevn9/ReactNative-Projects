import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/homeScreen/HomeScreen";
import TodoScreen from "./screens/todoScreen/TodoScreen";
import CompletedTasksScreen from "./screens/completedTasksScreen/completedTasksScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Todo"
          component={TodoScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="todosCompleted"
          component={CompletedTasksScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
