import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import AppButton from "../parts/atoms/AppButton";
import LottieView from "lottie-react-native";

import GoToMenuButton from "../parts/atoms/GoToMenuButton";
import Svg, { Path } from "react-native-svg";
import TextInputi from "../parts/atoms/TextInputi";
import TextInputiNotEditable from "../parts/atoms/TextInputiNotEditable";
import Icon from "../parts/atoms/BgStars";

export default function QueueHost({ navigation }) {
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../assets/animations/queue-animation.json")}
        autoPlay
        loop
        style={styles.lottie}
      />
      <View style={styles.nonAnimationView}>
        <View style={styles.smallBox}>
          <View style={styles.spaceIdField}>
            <Text style={styles.textStyle}>Bobby</Text>
          </View>
          <View style={styles.spaceIdField}>
            <Text style={styles.textStyle}>Marley</Text>
          </View>
          <View style={styles.spaceIdField}>
            <Text style={styles.textStyle}>Peter</Text>
          </View>
          <View style={styles.spaceIdField}>
            <Text style={styles.textStyle}>Hans</Text>
          </View>
          <View style={styles.spaceIdField}>
            <Text style={styles.textStyle}>Marlies</Text>
          </View>
          <View style={styles.spaceIdField}>
            <Text style={styles.textStyle}>Luise</Text>
          </View>
        </View>

        <AppButton
          //onPress={() => navigation.navigate("Join")}
          backgroundColor="#EC255A"
          color="#FFFFFF"
          title="START GAME"
        />
        <AppButton
          onPress={() => navigation.navigate("Host")}
          backgroundColor="#A3A6A9"
          color="#FFFFFF"
          title="CLOSE LOBBY"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    paddingLeft: 15,
  },
  lottie: {
    marginTop: -270,
  },
  smallBox: {
    backgroundColor: "#292C6D",
    borderRadius: 10,
    marginTop: 5,
    paddingBottom: 0,
    paddingTop: 5,
  },
  spaceIdField: {
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  menuButton: {
    top: 65,
    margin: 10,
    position: "relative",
  },
  nonAnimationView: {
    marginTop: 280,
  },
});
