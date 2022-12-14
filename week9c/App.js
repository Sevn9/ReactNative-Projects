import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  TextInput,
  StyleSheet,
  StatusBar,
} from "react-native";
import { CheckBox } from "@rneui/themed";
import { observer } from "mobx-react-lite";
import uuid from "react-native-uuid";
import TodoStore from "./store/todo";
import { SafeAreaProvider } from "react-native-safe-area-context";

// оборачиваем компонент в observer для отслеживания изменений в сторе Mobx
const App = observer(() => {
  // создаем хух состояния для инпута
  const [text, setText] = useState("");

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <ScrollView>
        {/* Создаем список задач, где получаем их из стора Mobx */}
        {TodoStore.todos.map(({ id, title, completed }) => (
          <View style={styles.todosList} key={id}>
            {/* Создаем CheckBox выполнения задачи и на onPress вешаем функцию выполнения задачи в сторе Mobx */}
            <CheckBox
              checked={completed}
              onPress={() => TodoStore.completeTodo(id)}
            />
            <Text>{title}</Text>
            {/* Создаем кнопку удаления задачи и на onPress вешаем функцию удаления задачи в сторе Mobx */}
            <Button title="Delete" onPress={() => TodoStore.deleteTodo(id)} />
          </View>
        ))}
        {/* Создаем поле для ввода текста задачи */}
        <TextInput
          style={{ height: 40 }}
          placeholder="Create"
          onChangeText={(t) => setText(t)}
          defaultValue={text}
        />
        {/* Создаем кнопку создания задачи и на onPress вешаем функцию создания задачи в сторе Mobx */}
        <Button
          title="Add Todo"
          onPress={() => TodoStore.createTodo({ id: uuid.v4(), title: text })}
        />
      </ScrollView>
    </SafeAreaProvider>
  );
});

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: "center",
    //justifyContent: "center",
  },
  todosList: {
    flexDirection: "row",
    width: 350,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
