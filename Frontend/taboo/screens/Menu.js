import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RedButton from "../parts/atoms/RedButton";
import WhiteButton from "../parts/atoms/WhiteButton";
import LottieView from "lottie-react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Menu({ navigation }) {
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../assets/animations/planet.json")}
        autoPlay
        loop
        style={styles.lottie}
      />
      <Text style={styles.textStyle}>SPACE BOWL</Text>
      <RedButton
        onPress={() => navigation.navigate("Join")}
        style={styles.buttonStyle}
        title="JOIN"
      />
      <WhiteButton style={styles.buttonStyle} title="HOST" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161853",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    marginTop: 70,
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
  },
  lottie: {
    marginTop: -200,
  },
});
