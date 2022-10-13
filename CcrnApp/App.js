import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
} from "react-native";

export default function App() {
  const handleButtonPress = () =>
    Alert.alert("Sun", "Praise the sun!", [
      { text: "Praise", onPress: () => console.log("Солнце!") },
      { text: "Praise" },
    ]);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#61dafb" hidden={true} />

      <ScrollView>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Praise the sun!</Text>
        </View>
        <Image
          style={styles.mainImage}
          source={require("./assets/praise_the_sun.png")}
        />
        <View style={styles.box}>
          <Button
            title={"Восславить Солнце!"}
            color="red"
            onPress={handleButtonPress}
          />
        </View>
        <View>
          <ScrollView horizontal={true}>
            <Image
              source={{
                uri: "https://otvet.imgsmail.ru/download/79880348_042266f51d760ea51e457ba227e52a06_800.jpg",
              }}
              style={{ width: 100, height: 150 }}
            />
            <Image
              source={{
                uri: "https://otvet.imgsmail.ru/download/79880348_042266f51d760ea51e457ba227e52a06_800.jpg",
              }}
              style={{ width: 100, height: 150 }}
            />
            <Image
              source={{
                uri: "https://otvet.imgsmail.ru/download/79880348_042266f51d760ea51e457ba227e52a06_800.jpg",
              }}
              style={{ width: 100, height: 150 }}
            />
            <Image
              source={{
                uri: "https://otvet.imgsmail.ru/download/79880348_042266f51d760ea51e457ba227e52a06_800.jpg",
              }}
              style={{ width: 100, height: 150 }}
            />
            <Image
              source={{
                uri: "https://otvet.imgsmail.ru/download/79880348_042266f51d760ea51e457ba227e52a06_800.jpg",
              }}
              style={{ width: 100, height: 150 }}
            />
            <Image
              source={{
                uri: "https://otvet.imgsmail.ru/download/79880348_042266f51d760ea51e457ba227e52a06_800.jpg",
              }}
              style={{ width: 100, height: 150 }}
            />
            <Image
              source={{
                uri: "https://otvet.imgsmail.ru/download/79880348_042266f51d760ea51e457ba227e52a06_800.jpg",
              }}
              style={{ width: 100, height: 150 }}
            />
            <Image
              source={{
                uri: "https://otvet.imgsmail.ru/download/79880348_042266f51d760ea51e457ba227e52a06_800.jpg",
              }}
              style={{ width: 100, height: 150 }}
            />
            <Image
              source={{
                uri: "https://otvet.imgsmail.ru/download/79880348_042266f51d760ea51e457ba227e52a06_800.jpg",
              }}
              style={{ width: 100, height: 150 }}
            />
            <Image
              source={{
                uri: "https://otvet.imgsmail.ru/download/79880348_042266f51d760ea51e457ba227e52a06_800.jpg",
              }}
              style={{ width: 100, height: 150 }}
            />
            <Image
              source={{
                uri: "https://otvet.imgsmail.ru/download/79880348_042266f51d760ea51e457ba227e52a06_800.jpg",
              }}
              style={{ width: 100, height: 150 }}
            />
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  textContainer: {
    margin: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  mainImage: {
    width: "auto",
    height: 630,
  },
  box: {
    alignItems: "center",
    marginVertical: 10,
  },
});
