import React from "react-native";
import Menu from "./screens/Menu";
import Join from "./screens/Join";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeStack = createNativeStackNavigator();

export default function App() {
  const io = require("socket.io-client");
  const socket = io("http://server.davidemarcoli.de:9092/");
  socket.connect();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Menu}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Profile" component={Join} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
