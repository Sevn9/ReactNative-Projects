import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  useState,
} from "react-native";
import TodoLine from "../homeScreen/components/TodoLine";

const CompletedTasksScreen = ({ route, navigation }) => {
  const {
    completedTodos,
    addTodo,
    removeTodo,
    addcompletedTodos,
    removeCompletedTodos,
  } = route.params;

  console.log("CompletedTasksScreen", completedTodos);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Completed Tasks</Text>
      </View>

      <FlatList
        data={completedTodos}
        keyExtractor={({ id }, index) => index}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={styles.todoLineBox}>
            <TodoLine
              index={index}
              item={item}
              addTodo={addTodo}
              removeTodo={removeTodo}
              removeCompletedTodos={removeCompletedTodos}
              addcompletedTodos={addcompletedTodos}
              isComplete={true}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CompletedTasksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
  },
  textContainer: {
    marginVertical: 25,
    alignItems: "center",
  },
  text: {
    fontSize: 25,
  },
  todoLineBox: {
    backgroundColor: "white",
    borderWidth: 1,
    margin: 3,
  },
  todoCompletedButton: {
    marginVertical: 5,
    backgroundColor: "orange",
    alignItems: "center",
  },
});
