import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import HomeCard from "../../components/HomeCard";
import { observer } from "mobx-react-lite";
import productStore from "../../store/productStore";

const HomeScreen = observer(() => {
  const renderHomeCard = ({ item }) => (
    <>
      <View style={styles.container}>
        <HomeCard item={item} />
      </View>
    </>
  );

  return (
    <>
      <FlatList
        contentContainerStyle={{
          backgroundColor: "blue",
        }}
        data={productStore.products}
        renderItem={renderHomeCard}
        keyExtractor={(item) => item.id}
      />
    </>
  );
});

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
});
