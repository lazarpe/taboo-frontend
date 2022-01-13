import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import React from "react";

export default function TextInputi() {
  const [text, onChangeText] = React.useState("Useless Text");
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
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
