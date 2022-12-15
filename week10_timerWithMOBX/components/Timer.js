import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import TimerStore from "../store/timer";
import { observer } from "mobx-react-lite";

const Timer = observer(() => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Timer</Text>
      <Text style={styles.textTimer}>
        Seconds passed: {TimerStore.secondsPassed}
      </Text>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonStyle}>
          <Button
            onPress={() => TimerStore.startTimer()}
            title="Start"
            color="#841584"
          />
        </View>
        <View style={styles.buttonStyle}>
          <Button
            onPress={() => TimerStore.stopTimer()}
            title="Stop"
            color="#841584"
          />
        </View>
        <View style={styles.buttonStyle}>
          <Button
            onPress={() => TimerStore.clearTimer()}
            title="Clear"
            color="#841584"
          />
        </View>
      </View>
    </View>
  );
});

export default Timer;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    margin: "10%",
    justifyContent: "center",
  },
  textTitle: {
    fontSize: 50,

    marginBottom: 10,
  },
  textTimer: {
    fontSize: 21,
    marginBottom: 10,
  },
  buttonStyle: {
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: "column",

    width: "80%",
  },
});
