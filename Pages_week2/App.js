import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import AcceptedOrderScreen from "./screens/AcceptedOrferScreen";
import ProfileScreen from "./screens/ProfileScreen";
import UsersListScreen from "./screens/UsersListScreen";
import ListMessagesScreen from "./screens/ListMessagesScreen";
import UserContactsScreen from "./screens/UserContactsScreen";
import CallingScreen from "./screens/CallingScreen";
import ShopItem from "./screens/ShopItem";
import PostScreen from "./screens/PostScreen";

export default function App() {
  //return <AcceptedOrderScreen />;
  //return <ProfileScreen />;
  //return <UsersListScreen />;
  //return <ListMessagesScreen />;
  //return <UserContactsScreen />;
  //return <CallingScreen />;
  //return <ShopItem />;
  return <PostScreen />;
}
