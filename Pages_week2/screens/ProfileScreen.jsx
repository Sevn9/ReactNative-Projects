import React from "react";
import { View, StatusBar, Image, Text, StyleSheet } from "react-native";

const ProfileScreen = () => {
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.profile}>
        <Image
          style={styles.profileLogo}
          source={{
            uri: "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
          }}
        />
        <Text style={styles.textProfile}>John Doe</Text>
      </View>
      <View style={styles.container}></View>
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  profile: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  textProfile: {
    color: "white",
    fontSize: 20,
  },
  profileLogo: {
    backgroundColor: "pink",
    borderWidth: 5,
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    backgroundColor: "green",
  },
});
