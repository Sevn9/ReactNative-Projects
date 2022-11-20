import { View, Text, Image, StyleSheet, StatusBar } from "react-native";
import React from "react";

const CallingScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.calling}>
        <Image
          style={styles.icon}
          source={{
            uri: "https://www.citypng.com/public/uploads/preview/png-video-camera-recording-green-icon-11640206854cyxs2e6hfe.png",
          }}
        />
        <Text style={styles.textTitle}>WHATSAPP CALL</Text>
      </View>
      <View style={styles.callingInfo}>
        <Text style={styles.textName}>Mark Johnson</Text>
        <Text style={styles.text}>CALLING</Text>
      </View>
      <Image
        style={styles.avatar}
        source={{
          uri: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
        }}
      />
      <View style={styles.iconsPanel}>
        <View style={styles.iconsContainer}>
          <Image
            style={styles.icon}
            source={{
              uri: "http://cdn.onlinewebfonts.com/svg/img_396416.png",
            }}
          />
        </View>
        <View style={styles.iconsContainerСancelCall}>
          <Image
            style={styles.iconСancelCall}
            source={{
              uri: "https://www.iconpacks.net/icons/1/free-phone-icon-1-thumb.png",
            }}
          />
        </View>

        <View style={styles.iconsContainer}>
          <Image
            style={styles.icon}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/88/88634.png",
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default CallingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "green",
  },
  calling: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 15,
  },
  callingInfo: {
    margin: 15,
  },
  textTitle: {
    marginLeft: 15,
    fontSize: 17,
    color: "white",
  },
  textName: {
    fontSize: 30,
    color: "white",
  },
  text: {
    fontSize: 17,
    color: "white",
  },
  avatar: {
    width: "100%",
    position: "relative",
    paddingTop: "100%",
  },

  iconsPanel: {
    flexDirection: "row",
    marginTop: "20%",
    justifyContent: "space-around",
    alignItems: "baseline",
  },
  iconsContainer: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  iconsContainerСancelCall: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  iconСancelCall: {
    borderWidth: 1,
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: "red",
  },
  icon: {
    borderWidth: 1,
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: "white",
  },
});
