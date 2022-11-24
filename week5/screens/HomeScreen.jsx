import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const HomeScreen = ({ navigation }) => {
  const [pressedCount, setPressedCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [name, setName] = useState("");
  const [name2, setName2] = useState("");
  const [tempName2, setTempName2] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const onCheckLoginAndPassword = () => {
    if (login == "admin" && password == "123") {
      navigation.navigate("WelcomeScreen");
    } else {
      Alert.alert("Error", "Login or password incorrect", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
  };

  const onCheckCount = () => {
    if (pressedCount < 3) {
      setPressedCount(pressedCount + 1);
    } else {
      setIsDisabled(true);
    }
  };
  const onResetButton = () => {
    setIsDisabled(false);
    setPressedCount(0);
  };
  const onShowText = () => {
    setTempName2(name2);
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        <View style={styles.firstComponent}>
          <Text style={{ margin: 16 }}>
            {pressedCount > 0
              ? `The button was pressed ${pressedCount} times!`
              : "The button isn't pressed yet"}
          </Text>
          <Button
            disabled={isDisabled}
            title="Press me"
            onPress={() => onCheckCount()}
          />
          <View style={styles.secondButton}>
            <Button title="Reset" onPress={() => onResetButton()} />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            alignContent: "center",
            justifyContent: "center",
            padding: 16,
          }}
        >
          <Text style={{ marginVertical: 16 }}>
            {name ? `Hi ${name}!` : "What is your name?"}
          </Text>
          <TextInput
            style={{ padding: 8, backgroundColor: "#f5f5f5" }}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignContent: "center",
            justifyContent: "center",
            padding: 16,
          }}
        >
          <Text style={{ marginVertical: 16 }}>
            {tempName2 ? `Hi ${tempName2}!` : "What is your name?"}
          </Text>
          <TextInput
            style={{ padding: 8, backgroundColor: "#f5f5f5" }}
            onChangeText={setName2}
          />
          <Button title="Enter" onPress={() => onShowText()} />
        </View>
        <View
          style={{
            flex: 1,
            alignContent: "center",
            justifyContent: "center",
            padding: 16,
          }}
        >
          <Text style={{ marginVertical: 16 }}>Login</Text>
          <TextInput
            style={{ padding: 8, backgroundColor: "#f5f5f5" }}
            onChangeText={setLogin}
          />
          <Text style={{ marginVertical: 16 }}>Password</Text>
          <TextInput
            style={{ padding: 8, backgroundColor: "#f5f5f5" }}
            onChangeText={setPassword}
          />
          <Button title="Enter" onPress={() => onCheckLoginAndPassword()} />
        </View>
        <TouchableOpacity
          style={{
            flex: 1,
            alignContent: "center",
            justifyContent: "center",

            paddingHorizontal: 16,
          }}
          onPress={() => navigation.navigate("CustomComponentScreen")}
        >
          <Text style={{ marginVertical: 16, color: "blue" }}>
            Link to custom component
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  firstComponent: {
    marginTop: "10%",
  },
  secondButton: {
    marginTop: 10,
    backgroundColor: "red",
  },
});
