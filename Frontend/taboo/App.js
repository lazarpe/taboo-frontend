import React, { View } from "react-native";
import Menu from "./screens/Menu";
import Join from "./screens/Join";
import Host from "./screens/Host";
import QueueHost from "./screens/QueueHost";
import QueueJoin from "./screens/QueueJoin";

import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#161853",
    accent: "#161853",
    background: "#161853",
    surface: "#161853",
  },
};

const Stacko = createNativeStackNavigator();

export default function App() {
  const io = require("socket.io-client");
  const socket = io("http://server.davidemarcoli.de:9092/");
  socket.connect();

  return (
    <PaperProvider theme={theme}>
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
          <Stacko.Screen name="QueueHost" component={QueueHost} />
          <Stacko.Screen name="QueueJoin" component={QueueJoin} />
        </Stacko.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
