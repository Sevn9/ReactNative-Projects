import React from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import UserContact from "./components/UserContact";
const UserContacts = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    image:
      "https://i.pinimg.com/736x/f4/d2/96/f4d2961b652880be432fb9580891ed62.jpg",
    name: "John Doe",
    date: "12 jul 15:58 am",
    icon: "https://www.citypng.com/public/uploads/preview/-121610657677h0c3c6kwey.png",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    image:
      "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
    name: "Mark Doe",
    date: "12 jul 16:10 am",
    icon: "https://www.citypng.com/public/uploads/preview/-121610657677h0c3c6kwey.png",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    image:
      "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
    name: "Mark Doe",
    date: "12 jul 16:15 am",
    icon: "https://www.citypng.com/public/uploads/preview/png-video-camera-recording-green-icon-11640206854cyxs2e6hfe.png",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d74",
    image:
      "https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png",
    name: "John Doe",
    date: "12 feb 15:00 am",
    icon: "https://www.citypng.com/public/uploads/preview/-121610657677h0c3c6kwey.png",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d75",
    image:
      "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
    name: "John Doe",
    date: "12 aug 13:33 am",
    icon: "https://www.citypng.com/public/uploads/preview/png-video-camera-recording-green-icon-11640206854cyxs2e6hfe.png",
  },
];
const UserContactsScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {UserContacts.map((userContact) => (
        <UserContact
          key={userContact.id}
          name={userContact.name}
          image={userContact.image}
          date={userContact.date}
          icon={userContact.icon}
        />
      ))}
    </View>
  );
};

export default UserContactsScreen;

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
