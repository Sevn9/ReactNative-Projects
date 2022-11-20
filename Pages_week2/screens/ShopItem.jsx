import React from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const ShopItem = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        style={styles.imageItem}
        source={{
          uri: "https://i5.walmartimages.com/asr/9c8cab4e-5757-4429-ad9a-4ca28cf59c3d.bf7d5819a4125ddef1ed1a4bf280311e.jpeg",
        }}
      />
      <Text style={styles.textName}>Super Soft T-Shirt</Text>
      <Text style={styles.textPrice}>$ 12.22</Text>
      <View style={styles.textDescriptionContainer}>
        <Text style={styles.textDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </View>
      <View style={styles.section}>
        <TouchableOpacity style={styles.imageStar}>
          <Icon name="star-o" size={45} color="#f7c900" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageStar}>
          <Icon name="star-o" size={45} color="#f7c900" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageStar}>
          <Icon name="star-o" size={45} color="#f7c900" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageStar}>
          <Icon name="star-o" size={45} color="#f7c900" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageStar}>
          <Icon name="star-o" size={45} color="#f7c900" />
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <TouchableOpacity style={styles.color} />
        <TouchableOpacity style={[styles.color, { backgroundColor: "red" }]} />
        <TouchableOpacity
          style={[styles.color, { backgroundColor: "green" }]}
        />
        <TouchableOpacity style={[styles.color, { backgroundColor: "blue" }]} />
        <TouchableOpacity
          style={[styles.color, { backgroundColor: "yellow" }]}
        />
        <TouchableOpacity
          style={[styles.color, { backgroundColor: "black" }]}
        />
      </View>
      <View style={styles.section}>
        <TouchableOpacity style={styles.sizeContainer}>
          <Text style={styles.textSize}>S</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sizeContainer}>
          <Text style={styles.textSize}>M</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sizeContainer}>
          <Text style={styles.textSize}>L</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sizeContainer}>
          <Text style={styles.textSize}>XL</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.border} />
      <View style={styles.buttonAdd}>
        <Text style={styles.textButton}>Add To Card</Text>
      </View>
    </View>
  );
};

export default ShopItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  imageItem: {
    width: 250,
    height: 250,
    marginTop: "5%",
  },
  textName: {
    fontSize: 30,
    marginTop: "5%",
  },
  textPrice: {
    fontSize: 20,
    color: "green",
    fontWeight: "bold",
    marginTop: 10,
  },
  textDescriptionContainer: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  textDescription: {
    fontSize: 17,
    color: "gray",
  },

  section: {
    flexDirection: "row",
    marginTop: 10,
  },
  imageStar: {
    marginHorizontal: 2,
  },
  color: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: "#e7b753",
    marginHorizontal: 3,
  },
  sizeContainer: {
    height: 40,
    width: 40,
    borderRadius: 50,
    borderWidth: 1,
    marginHorizontal: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  textSize: {
    fontWeight: "bold",
  },
  border: {
    marginTop: 15,
    borderWidth: 0.5,
    width: "80%",
    borderColor: "gray",
  },
  buttonAdd: {
    height: 50,
    width: "80%",
    marginTop: 15,
    borderRadius: 50,
    backgroundColor: "#72f4ff",
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
});
