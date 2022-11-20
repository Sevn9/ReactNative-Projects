import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const PostScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textTitle}>Lorem ipsum dolor</Text>
      </View>
      <View style={styles.mainContent}>
        <Text style={styles.textNameTitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Text style={styles.textDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <TouchableOpacity style={styles.textLinksContainer}>
          <Text style={styles.textLinks}>Lorem, ipsum, dolor</Text>
        </TouchableOpacity>

        <Text style={styles.textDate}>2017-11-27 13:03:01</Text>
      </View>
      <View style={styles.profile}>
        <View style={styles.profileImageContainer}>
          <Image
            style={styles.profileImage}
            source={{
              uri: "https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png",
            }}
          />
        </View>

        <Text style={styles.textName}>Johan Doe</Text>
      </View>
      <TouchableOpacity style={styles.buttonContainer}>
        <View style={styles.buttonLike}>
          <Text style={styles.ButtonText}>Like</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "column",
  },
  header: {
    height: "15%",
    width: "100%",
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  textTitle: {
    fontSize: 25,
    color: "white",
  },
  mainContent: {
    width: "90%",
    marginTop: 15,
  },
  textNameTitle: {
    fontSize: 25,
    fontWeight: "bold",
  },
  textDescription: {
    marginTop: 10,
  },
  textLinks: {
    color: "blue",
  },
  textLinksContainer: {
    marginVertical: 10,
  },
  textDate: {
    color: "gray",
  },
  profile: {
    flexDirection: "row",
    width: "90%",
    height: "auto",
    marginHorizontal: 25,
    alignItems: "center",
    marginTop: 15,
  },
  profileImageContainer: {
    width: 110,
    height: 110,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "green",
  },
  textName: {
    marginLeft: 15,
    fontSize: 25,
    color: "blue",
    fontWeight: "bold",
  },
  buttonContainer: {
    marginTop: 20,
    width: "90%",
  },
  buttonLike: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    borderRadius: 20,
    paddingVertical: 10,
  },
  ButtonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
