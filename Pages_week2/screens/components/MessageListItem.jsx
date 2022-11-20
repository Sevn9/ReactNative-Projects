import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const MessageListItem = ({ text, image }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{
          uri: image,
        }}
      />
      <Text style={styles.textTitle}>{text}</Text>
    </View>
  );
};

export default MessageListItem;

const styles = StyleSheet.create({
  container: {
    margin: 6,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  textTitle: {
    fontSize: 17,
    flex: 1,
    marginRight: 10,
    color: "blue",
  },
  avatar: {
    width: 50,
    height: 50,
    margin: 10,
  },
});
