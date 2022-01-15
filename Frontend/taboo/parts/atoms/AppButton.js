import React, { Component } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

export default function AppButton(props) {
  const { onPress, title = "Save", backgroundColor, color } = props;
  return (
    <Pressable
      style={[styles.button, backgroundColor && { backgroundColor }]}
      onPress={onPress}
    >
      <Text style={[styles.text, color && { color }]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 250,
    marginTop: 25,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    elevation: 3,
    backgroundColor: "#FAEDF0",
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#292C6D",
  },
});
