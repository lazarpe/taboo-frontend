import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import React from "react";

export default function TextInputiNotEditable(props) {
  const { title = "Save" } = props;
  const [text, onChangeText] = React.useState("");
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={title}
        editable={false}
        placeholderTextColor={"black"}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    margin: 12,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
});
