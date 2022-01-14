import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import RedButton from "../parts/atoms/RedButton";
import GoToMenuButton from "../parts/atoms/GoToMenuButton";
import Svg, { Path } from "react-native-svg";
import TextInputi from "../parts/atoms/TextInputi";
import TextInputiNotEditable from "../parts/atoms/TextInputiNotEditable";
import Icon from "../parts/atoms/BgStars";

export default function Host({ navigation }) {
  return (
    <View style={styles.container}>
      <Icon />
      <View style={styles.menuButton}>
        <Pressable onPress={() => navigation.navigate("Home")}>
          <Svg
            width="71"
            height="19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M18.416 18V3.684h4.326l2.598 9.765 2.568-9.765h4.336V18H29.56V6.73L26.717 18h-2.783L21.102 6.73V18h-2.686Zm22.686-3.3 2.734.458c-.352 1.003-.908 1.768-1.67 2.295-.755.521-1.702.781-2.842.781-1.803 0-3.138-.589-4.004-1.767-.683-.944-1.025-2.136-1.025-3.574 0-1.72.45-3.064 1.348-4.034.898-.976 2.034-1.464 3.408-1.464 1.543 0 2.76.51 3.652 1.533.892 1.015 1.319 2.575 1.28 4.677h-6.876c.02.814.241 1.449.665 1.905.423.449.95.674 1.581.674.43 0 .791-.118 1.084-.352.294-.234.515-.612.665-1.133Zm.156-2.774c-.02-.794-.225-1.397-.615-1.807a1.881 1.881 0 0 0-1.426-.625c-.6 0-1.094.218-1.485.654-.39.437-.582 1.03-.576 1.778h4.102ZM55.662 18h-2.744v-5.293c0-1.12-.059-1.842-.176-2.168a1.513 1.513 0 0 0-.576-.771c-.26-.183-.576-.274-.947-.274a2.2 2.2 0 0 0-1.28.39 1.991 1.991 0 0 0-.78 1.036c-.137.43-.206 1.224-.206 2.383V18H46.21V7.629h2.549v1.523c.905-1.172 2.044-1.757 3.418-1.757.605 0 1.159.11 1.66.332.501.214.879.491 1.133.83.26.338.44.722.537 1.152.104.43.156 1.045.156 1.846V18Zm9.62 0v-1.553c-.378.554-.876.99-1.495 1.309a4.146 4.146 0 0 1-1.943.478c-.697 0-1.322-.153-1.875-.459a2.71 2.71 0 0 1-1.201-1.289c-.248-.553-.371-1.318-.371-2.295V7.63h2.744v4.766c0 1.458.049 2.353.146 2.685.104.326.29.586.557.781.267.19.605.284 1.015.284.47 0 .889-.127 1.26-.381.371-.26.625-.58.762-.957.137-.385.205-1.319.205-2.803V7.629h2.744V18h-2.549ZM0 11l12-6.928v13.856L0 11Z"
              fill="#fff"
            />
          </Svg>
        </Pressable>
      </View>
      <View style={styles.smallBox}>
        <View style={styles.spaceIdField}>
          <Text style={styles.textStyle}>Game mode</Text>
          <TextInputiNotEditable title="Taboo" />
        </View>
        <View style={styles.spaceIdField}>
          <Text style={styles.textStyle}>Space ID</Text>
          <TextInputiNotEditable title="HSDCDF" />
        </View>
        <View style={styles.spaceIdField}>
          <Text style={styles.textStyle}>Your name</Text>
          <TextInputi />
        </View>
      </View>
      <RedButton title="HOST" />
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
    padding: 20,
  },
  spaceIdField: {
    marginBottom: 20,
  },
  menuButton: {
    top: 65,
    margin: 10,
    position: "absolute",
  },
});
