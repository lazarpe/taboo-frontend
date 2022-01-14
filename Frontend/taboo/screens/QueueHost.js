import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import RedButton from "../parts/atoms/RedButton";
import WhiteButton from "../parts/atoms/WhiteButton";

import GoToMenuButton from "../parts/atoms/GoToMenuButton";
import Svg, { Path } from "react-native-svg";
import TextInputi from "../parts/atoms/TextInputi";
import TextInputiNotEditable from "../parts/atoms/TextInputiNotEditable";
import Icon from "../parts/atoms/BgStars";

export default function QueueHost({ navigation }) {
  return (
    <View style={styles.container}>
      <Icon />
      <View style={styles.spaceIdField}>
        <Text style={styles.textStyle}>Lobby</Text>
      </View>
      <View style={styles.smallBox}>
        <View style={styles.spaceIdField}>
          <Text style={styles.textStyle}>Player 1</Text>
        </View>
        <View style={styles.spaceIdField}>
          <Text style={styles.textStyle}>Player 2</Text>
        </View>
        <View style={styles.spaceIdField}>
          <Text style={styles.textStyle}>Player 3</Text>
        </View>
      </View>
      <RedButton
        //onPress={() => navigation.navigate("Join")}
        //btnColor={(backgroundColor = "#FFFF")}
        title="START GAME"
      />
      <WhiteButton
        onPress={() => navigation.navigate("Host")}
        //btnColor={(backgroundColor = "#FFFF")}
        title="LEAVE"
      />
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
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    paddingLeft: 15,
  },
  lottie: {
    marginTop: -200,
  },
  smallBox: {
    backgroundColor: "#292C6D",
    borderRadius: 10,
    margin: 10,
    padding: 25,
  },
  spaceIdField: {
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  menuButton: {
    top: 65,
    margin: 10,
    position: "absolute",
  },
});
