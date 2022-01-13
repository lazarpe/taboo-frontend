import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import React from "react";

export default function TextInputi() {
  const [text, onChangeText] = React.useState("");
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
});
