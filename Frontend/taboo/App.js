import React, { View } from "react-native";
import Menu from "./screens/Menu";
import Join from "./screens/Join";
import Host from "./screens/Host";

import {
  NavigationContainer,
  StackActions,
  DefaultTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stacko = createNativeStackNavigator();

export default function App() {
  const io = require("socket.io-client");
  const socket = io("http://server.davidemarcoli.de:9092/");
  socket.connect();

  return (
    <NavigationContainer>
      <Stacko.Navigator
        activeColor="#161853"
        inactiveColor="#161853"
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stacko.Screen name="Home" component={Menu} />
        <Stacko.Screen name="Join" component={Join} />
        <Stacko.Screen name="Host" component={Host} />
      </Stacko.Navigator>
    </NavigationContainer>
  );
}
