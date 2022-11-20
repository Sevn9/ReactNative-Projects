import React from "react";
import { View, FlatList, Image, StyleSheet } from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    image:
      "https://i.pinimg.com/736x/f4/d2/96/f4d2961b652880be432fb9580891ed62.jpg",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    image:
      "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    image:
      "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d74",
    image:
      "https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d75",
    image:
      "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
  },
];

const UsersListScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.imageContainer}
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View>
            <Image
              style={styles.profileLogo}
              source={{
                uri: item.image,
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default UsersListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  profileLogo: {
    width: 196,
    height: 196,
    marginBottom: 5,
  },
});
