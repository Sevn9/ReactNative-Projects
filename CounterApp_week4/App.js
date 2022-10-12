import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  const Plus = () => setCount((prevCount) => prevCount + 1);
  const Minus = () =>
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : prevCount));
  return (
    <View style={styles.container}>
      <View style={styles.fixToText}>
        <TouchableOpacity style={styles.counterButton} onPress={Minus}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <View style={styles.countContainer}>
          <Text style={styles.buttonText}>{count}</Text>
        </View>
        <TouchableOpacity style={styles.counterButton} onPress={Plus}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  counterButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 50,

    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
  },
  countContainer: {
    alignItems: "center",
    height: 50,
    width: 50,
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 30,
  },
});
