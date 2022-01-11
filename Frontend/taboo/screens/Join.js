import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RedButton from "../parts/atoms/RedButton";

export default function Menu() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Space ID</Text>
      <Text style={styles.textStyle}>Your Name</Text>
      <RedButton style={styles.buttonStyle} title="ENTER" />
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
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  lottie: {
    marginTop: -200,
  },
});
