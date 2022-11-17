import React, { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import TodoLine from "./components/TodoLine";

const HomeScreen = ({ navigation }) => {
  const [onChange, setOnChange] = useState(false);
  const [todos, setTodos] = useState([]);
  const [completedTodos, setcompletedTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodoFromText = () => {
    let newTodos = [...todos];
    newTodos.push(text);
    setTodos(newTodos);
    setText("");
  };
  const addTodo = (item) => {
    let newTodos = [...todos];
    newTodos.push(item);
    setTodos(newTodos);
  };

  const keyExtractor = (index) => {
    return index.toString();
  };

  const removeTodo = (index) => {
    let newTodos = [...todos];
    if (index !== -1) {
      newTodos.splice(index, 1);
    }
    setTodos(newTodos);
  };

  const addcompletedTodos = (item) => {
    console.log("вызвана функция addcompletedTodos");
    console.log(item);
    let newCompletedTodos = [...completedTodos];
    newCompletedTodos.push(item);
    setcompletedTodos(newCompletedTodos);
  };
  const removeCompletedTodos = (index) => {
    setOnChange(true);
    console.log("вызвана функция removecompletedTodos");
    console.log(index);
    let newCompletedTodos = [...completedTodos];
    if (index !== -1) {
      newCompletedTodos.splice(index, 1);
    }
    setcompletedTodos(newCompletedTodos);
    setOnChange(false);
  };
  console.log(completedTodos);
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>NOTE:</Text>
      </View>
      <FlatList
        data={todos}
        keyExtractor={(item, index) => keyExtractor(index)}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.todoLineBox}
            onPress={() =>
              navigation.navigate("Todo", {
                item: item,
                index: index,
                removeTodo: removeTodo,
              })
            }
          >
            <TodoLine
              index={index}
              item={item}
              removeTodo={removeTodo}
              addTodo={addTodo}
              addcompletedTodos={addcompletedTodos}
              removeCompletedTodos={removeCompletedTodos}
              isComplete={false}
            />
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={styles.todoCompletedButton}
        onPress={() =>
          navigation.navigate("todosCompleted", {
            completedTodos: completedTodos,
            removeTodo: removeTodo,
            removeCompletedTodos: removeCompletedTodos,
            addcompletedTodos: addcompletedTodos,
            addTodo: addTodo,
          })
        }
      >
        <Text style={styles.text}>Comleted tasks</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.textInput}
        onChangeText={(newText) => setText(newText)}
        value={text}
        placeholder="Enter text"
      ></TextInput>
      <Button title=" ADD " onPress={() => addTodoFromText()}></Button>
    </View>
  );
};

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
  textInput: {
    borderWidth: 1,
    height: 40,
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

export default HomeScreen;
