import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const UserContact = ({ image, name, date, icon }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contact}>
        <Image
          style={styles.avatar}
          source={{
            uri: image,
          }}
        />
        <View style={styles.description}>
          <Text style={styles.textTitle}>{name}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>

      <Image
        style={styles.avatar}
        source={{
          uri: icon,
        }}
      />
    </View>
  );
};

export default UserContact;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomWidth: 1,
    padding: 10,
  },
  textTitle: {
    fontSize: 20,
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 30,
  },
  contact: {
    flexDirection: "row",
  },
  date: {
    fontSize: 15,
    color: "gray",
  },
  description: {
    marginLeft: 15,
  },
});
