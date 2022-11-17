import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const TodoScreen = ({ route, navigation }) => {
  console.log(route);
  const { index, item, removeTodo } = route.params;
  const removeTodoAndBack = (index) => {
    removeTodo(index);
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item}</Text>
      <View style={styles.buttons}>
        <Button title="go back" onPress={() => navigation.goBack()}></Button>
        <Button
          color="red"
          title="Remove"
          onPress={() => removeTodoAndBack(index)}
        ></Button>
      </View>
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  textContainer: {
    backgroundColor: "blue",
  },
  text: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  buttons: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
