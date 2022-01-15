import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppButton from "../parts/atoms/AppButton";
import LottieView from "lottie-react-native";
import Icon from "../parts/atoms/BgStars";

export default function Menu({ navigation }) {
  return (
    <View style={styles.container}>
      <Icon />
      <LottieView
        source={require("../assets/animations/planet.json")}
        autoPlay
        loop
        style={styles.lottie}
      />
      <Text style={styles.textStyle}>SPACE BOWL</Text>
      <AppButton
        onPress={() => navigation.navigate("Join")}
        style={styles.buttonStyle}
        backgroundColor="#EC255A"
        color="white"
        title="JOIN"
      />
      <AppButton
        onPress={() => navigation.navigate("Host")}
        backgroundColor="#FAEDF0"
        color="#161853"
        title="HOST"
      />
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
