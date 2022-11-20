import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

const AcceptedOrderScreen = ({ params }) => (
  <View style={styles.container}>
    <Image
      style={styles.acceptLogo}
      source={{
        uri: "https://abrakadabra.fun/uploads/posts/2022-02/thumbs/1643703123_1-abrakadabra-fun-p-ikonka-palets-vverkh-7.png",
      }}
    />
    <Text style={styles.textTitle}>Заказ оформлен</Text>
    <Text style={styles.textDescription}>
      Ваш заказ успешно оформлен. В ближайшее время с вами свяжется наш
      менеджер.
    </Text>
    <TouchableOpacity style={styles.acceptButton}>
      <Text style={styles.ButtonText}>Продолжить</Text>
    </TouchableOpacity>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  textTitle: {
    fontSize: 20,
    marginTop: 10,
  },
  textDescription: {
    marginHorizontal: 40,
    marginVertical: 15,
  },
  acceptLogo: {
    backgroundColor: "pink",
    borderWidth: 5,
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    backgroundColor: "green",
    marginTop: 50,
  },
  acceptButton: {
    backgroundColor: "blue",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 55,
  },
  ButtonText: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
export default AcceptedOrderScreen;
