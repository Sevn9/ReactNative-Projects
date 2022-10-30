import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const allArraySymbols = ["/", "x", "-", "+", "."];
  const [number, setNumber] = useState("0");

  const onPressNum = (num) =>
    setNumber((prevNumber) => (prevNumber != "0" ? prevNumber + num : num));

  const onPressDelete = () => setNumber("0");

  const onPressSymbol = (sym) => {
    //если предыдущий символ равен одному из массива то не пишем его повторно
    if (allArraySymbols.includes(number.slice(-1))) {
      setNumber((prevNumber) => prevNumber.slice(0, -1) + sym);
    } else {
      //достаем из строки числа
      var tempNumbers = number.split(/[/+x-]/);
      //если в строке найден 2 символ операции то предыдущую операцию совершаем
      if (
        number.indexOf("+", "-", "/", "x") &&
        tempNumbers.length >= 2 &&
        sym != "."
      ) {
        //достаем из строки знаки
        var tempSymbols = number.split(/[0-9.]/);
        // убираем пробелы в массиве
        let arrSymbols = [];
        for (let i = 0; i < tempSymbols.length; i++) {
          if (tempSymbols[i] != "") {
            arrSymbols.push(tempSymbols[i]);
          }
        }
        // совершаем операцию со значениями
        let tempResult = 0;
        switch (arrSymbols[0]) {
          case "+":
            tempResult =
              parseFloat(tempNumbers[0]) + parseFloat(tempNumbers[1]);
            setNumber(() => tempResult.toString());
            break;
          case "-":
            tempResult =
              parseFloat(tempNumbers[0]) - parseFloat(tempNumbers[1]);
            setNumber(() => tempResult.toString());
            break;
          case "/":
            tempResult =
              parseFloat(tempNumbers[0]) / parseFloat(tempNumbers[1]);
            setNumber(() => tempResult.toString());
            break;
          case "x":
            tempResult =
              parseFloat(tempNumbers[0]) * parseFloat(tempNumbers[1]);
            setNumber(() => tempResult.toString());
            break;
        }
      }

      setNumber((prevNumber) => prevNumber + sym);
    }
  };
  const calcResult = (exp) => {
    //достаем из строки числа
    var tempNumbers = exp.split(/[/+x-]/);

    //если в строке найден 2 символ операции то предыдущую операцию совершаем
    if (
      exp.indexOf("+", "-", "/", "x") &&
      tempNumbers.length >= 2 &&
      exp.slice(-1) != "."
    ) {
      //достаем из строки знаки
      var tempSymbols = exp.split(/[0-9.]/);
      // убираем пробелы в массиве
      let arrSymbols = [];
      for (let i = 0; i < tempSymbols.length; i++) {
        if (tempSymbols[i] != "") {
          arrSymbols.push(tempSymbols[i]);
        }
      }
      // совершаем операцию со значениями
      let tempResult = 0;
      switch (arrSymbols[0]) {
        case "+":
          tempResult = parseFloat(tempNumbers[0]) + parseFloat(tempNumbers[1]);
          setNumber(() => tempResult.toString());
          break;
        case "-":
          tempResult = parseFloat(tempNumbers[0]) - parseFloat(tempNumbers[1]);
          setNumber(() => tempResult.toString());
          break;
        case "/":
          tempResult = parseFloat(tempNumbers[0]) / parseFloat(tempNumbers[1]);
          setNumber(() => tempResult.toString());
          break;
        case "x":
          tempResult = parseFloat(tempNumbers[0]) * parseFloat(tempNumbers[1]);
          setNumber(() => tempResult.toString());
          break;
      }
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.outputPanel}>
          <Text style={styles.outputText}>{number}</Text>
        </View>
      </ScrollView>

      <View style={styles.block}>
        <TouchableOpacity
          style={[styles.circle, { backgroundColor: "#a5a5a5" }]}
          onPress={onPressDelete}
        >
          <Text style={[styles.textBlock, { color: "black" }]}>C</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.circle, { backgroundColor: "#a5a5a5" }]}
          onPress={() => alert("Данная операция недоступна")}
        >
          <Text style={[styles.textBlock, { color: "black" }]}>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.circle, { backgroundColor: "#a5a5a5" }]}
          onPress={() => alert("Данная операция недоступна")}
        >
          <Text style={[styles.textBlock, { color: "black" }]}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.circle, { backgroundColor: "#fe9400" }]}
          onPress={() => onPressSymbol("/")}
        >
          <Text style={styles.textBlock}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.block}>
        <TouchableOpacity style={styles.circle} onPress={() => onPressNum("7")}>
          <Text style={styles.textBlock}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.circle} onPress={() => onPressNum("8")}>
          <Text style={styles.textBlock}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.circle} onPress={() => onPressNum("9")}>
          <Text style={styles.textBlock}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.circle, { backgroundColor: "#fe9400" }]}
          onPress={() => onPressSymbol("x")}
        >
          <Text style={styles.textBlock}>X</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.block}>
        <TouchableOpacity style={styles.circle} onPress={() => onPressNum("4")}>
          <Text style={styles.textBlock}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.circle} onPress={() => onPressNum("5")}>
          <Text style={styles.textBlock}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.circle} onPress={() => onPressNum("6")}>
          <Text style={styles.textBlock}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.circle, { backgroundColor: "#fe9400" }]}
          onPress={() => onPressSymbol("-")}
        >
          <Text style={styles.textBlock}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.block}>
        <TouchableOpacity style={styles.circle} onPress={() => onPressNum("1")}>
          <Text style={styles.textBlock}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.circle} onPress={() => onPressNum("2")}>
          <Text style={styles.textBlock}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.circle} onPress={() => onPressNum("3")}>
          <Text style={styles.textBlock}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.circle, { backgroundColor: "#fe9400" }]}
          onPress={() => onPressSymbol("+")}
        >
          <Text style={styles.textBlock}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.block}>
        <TouchableOpacity
          style={styles.circleZero}
          onPress={() => onPressNum("0")}
        >
          <Text style={styles.textBlock}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.circle}
          onPress={() => onPressSymbol(".")}
        >
          <Text style={styles.textBlock}>,</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.circle, { backgroundColor: "#fe9400" }]}
          onPress={() => calcResult(number)}
        >
          <Text style={styles.textBlock}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    backgroundColor: "black",
  },
  outputPanel: {
    flex: 1,
    flexDirection: "row",
    width: "98%",
    marginHorizontal: "1%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginVertical: "1%",
  },
  outputText: {
    fontSize: 110,
    color: "white",
    marginHorizontal: "6%",
  },
  block: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: "1%",
  },
  circle: {
    backgroundColor: "#323232",
    width: "23%",
    aspectRatio: 1,
    marginVertical: "1%",

    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  circleZero: {
    backgroundColor: "#323232",
    width: "46%",
    marginVertical: "1%",

    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  textBlock: {
    fontSize: 30,
    color: "white",
  },
});
