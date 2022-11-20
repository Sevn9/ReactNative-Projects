import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import MessageListItem from "./components/MessageListItem";
const Messages = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    image:
      "https://i.pinimg.com/736x/f4/d2/96/f4d2961b652880be432fb9580891ed62.jpg",
    text: "lorem ipsum dolor sit amet, indu consectetur adipiscing elit",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    image:
      "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
    text: "lorem ipsum dolor sit amet, indu consectetur adipiscing elit",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    image:
      "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
    text: "lorem ipsum dolor sit amet, indu consectetur adipiscing elit",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d74",
    image:
      "https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png",
    text: "lorem ipsum dolor sit amet, indu consectetur adipiscing elit",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d75",
    image:
      "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
    text: "lorem ipsum dolor sit amet, indu consectetur adipiscing elit",
  },
];
const ListMessagesScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {Messages.map((message) => (
        <MessageListItem
          key={message.id}
          text={message.text}
          image={message.image}
        />
      ))}
    </View>
  );
};

export default ListMessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
