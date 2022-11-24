import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Button,
  StatusBar,
  SafeAreaView,
} from "react-native";
import Box from "../components/Box";

const CustomComponentScreen = () => {
  const [boxSize, setBoxSize] = useState(0);
  const [boxColor, setBoxColor] = useState("");
  const [arr, setArr] = useState([]);

  function BoxModel(id, color, size) {
    return {
      id,
      color,
      size,
    };
  }

  const keyExtractor = (index) => {
    return index.toString();
  };

  const addBox = () => {
    if (boxSize != 0 && boxColor != undefined) {
      console.log("addBox");
      let a = boxSize;
      let b = boxColor;
      console.log(a);
      console.log(b);
      setArr([...arr, new BoxModel(arr.length, boxColor, boxSize)]);
    }
  };
  const removeBox = () => {
    setArr([]);
  };

  console.log(arr);

  const renderHeader = () => {
    return (
      <View style={styles.boxes}>
        <Box color="red"></Box>
        <Box color="green"></Box>
        <Box color="blue"></Box>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{ position: "relative" }}
        ListHeaderComponent={renderHeader}
        data={arr}
        keyExtractor={(item, index) => keyExtractor(index)}
        renderItem={({ item, index }) => (
          <Box color={item.color} size={item.size}></Box>
        )}
        ListFooterComponent={
          <>
            <View style={styles.sizeBox}>
              <Text style={styles.text}>Размер {boxSize}</Text>
              <TextInput style={styles.textInput} onChangeText={setBoxSize} />
            </View>

            <View style={styles.colorsBox}>
              <Text style={styles.text}>Цвет {boxColor}</Text>
              <TouchableOpacity
                style={[styles.changeColor, { backgroundColor: "yellow" }]}
                onPress={() => setBoxColor("yellow")}
              />
              <TouchableOpacity
                style={[styles.changeColor, { backgroundColor: "blue" }]}
                onPress={() => setBoxColor("blue")}
              />
              <TouchableOpacity
                style={[styles.changeColor, { backgroundColor: "red" }]}
                onPress={() => setBoxColor("red")}
              />
            </View>
            <View style={styles.buttonsBox}>
              <View style={styles.button}>
                <Button title="add" onPress={() => addBox()} />
              </View>

              <View style={styles.button}>
                <Button title="clear" onPress={() => removeBox()} />
              </View>
            </View>
            <View style={styles.buttonGoBack}>
              <Button title="go back" onPress={() => navigation.goBack()} />
            </View>
          </>
        }
      />
    </SafeAreaView>
  );
};

export default CustomComponentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  boxes: {
    paddingTop: "6%",
    paddingHorizontal: "6%",
  },
  colorsBox: {
    flexDirection: "row",
    paddingHorizontal: "6%",
    paddingBottom: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 25,
  },
  textInput: {
    padding: 8,
    backgroundColor: "#f5f5f5",
    borderWidth: 1,
    width: "20%",
    borderRadius: 10,
    marginHorizontal: 10,
  },
  changeColor: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
  sizeBox: {
    flexDirection: "row",
    paddingHorizontal: "6%",
    paddingVertical: 10,
    alignItems: "center",
  },
  buttonsBox: {
    flexDirection: "row",
    paddingHorizontal: "23%",
    paddingVertical: 10,
  },
  button: {
    width: 80,
    marginHorizontal: 10,
  },
  buttonGoBack: {
    justifyContent: "center",
    alignItems: "center",
  },
});
