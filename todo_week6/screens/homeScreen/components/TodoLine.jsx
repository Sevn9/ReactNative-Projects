import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { CheckBox } from "@rneui/themed";

const TodoLine = ({
  item,
  index,
  addTodo,
  removeTodo,
  addcompletedTodos,
  removeCompletedTodos,
  isComplete,
}) => {
  const [isChecked, setChecked] = useState(false);

  const addCheckedTodos = (item, index) => {
    if (isComplete) {
      setChecked(!isChecked);
      console.log("unChecked");
      if (!isChecked) {
        addTodo(item);
        removeCompletedTodos(index);
      }
    } else {
      setChecked(!isChecked);
      console.log("Checked");
      console.log("hello ", item);
      console.log("hello ", index);
      if (!isChecked) {
        addcompletedTodos(item);
        removeTodo(index);
        console.log("isChecked");
      }
    }
  };

  //const navigation = useNavigation();

  return (
    <View style={styles.todoLine}>
      <CheckBox
        style={styles.checkbox}
        checked={isComplete ? !isChecked : undefined}
        color={isChecked ? "#4630EB" : undefined}
        onPress={() => addCheckedTodos(item, index)}
      />
      {isComplete ? (
        <>
          <Text style={!isChecked ? styles.textComplete : styles.text}>
            {item}
          </Text>
        </>
      ) : (
        <>
          <Text style={isChecked ? styles.textComplete : styles.text}>
            {item}
          </Text>
        </>
      )}

      <TouchableOpacity
        onPress={
          isComplete
            ? () => removeCompletedTodos(index)
            : () => removeTodo(index)
        }
      >
        <Text style={styles.deleteTextButton}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoLine;

const styles = StyleSheet.create({
  todoLine: {
    flexDirection: "row",
    alignItems: "center",
    margin: 3,
  },
  deleteTextButton: {
    fontSize: 15,
    fontWeight: "bold",
    color: "red",
    marginRight: 5,
  },
  text: {
    flex: 3,
    marginLeft: 5,
  },
  textComplete: {
    flex: 3,
    marginLeft: 5,
    textDecorationLine: "line-through",
  },
});
