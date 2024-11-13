import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useContext } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FitnessItems } from "../context";
import AntDesign from "@expo/vector-icons/AntDesign";
import { StatusBar } from "expo-status-bar";
const WorkoutScreen = () => {
  const route = useRoute();
  //   console.log(route.params);
  const navigation = useNavigation();
  const { completed, setcompleted } = useContext(FitnessItems);
  console.log(completed)
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "white", marginTop: 24 }}
      >
             <StatusBar backgroundColor="black" style="light" />

        <Image
          style={{ width: "100%", height: 190 }}
          source={{ uri: route.params.image }}
        />
        <Ionicons
          onPress={() => navigation.goBack()}
          style={{ position: "absolute", top: 30, left: 20 }}
          name="arrow-back-outline"
          size={28}
          color="white"
        />
        {route.params.excersises.map((item, key) => (
          <Pressable
            style={{ margin: 10, flexDirection: "row", alignItems: "center" }}
            key={key}
          >
            <Image
              style={{ width: 90, height: 90 }}
              source={{ uri: item.image }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 17, fontWeight: "bold", width: 170 }}>
                {item.name}
              </Text>
              <Text style={{ fontSize: 16, marginTop: 4, color: "gray" }}>
                x {item.sets}
              </Text>
            </View>
            {completed.includes(item.name) ? (
              <AntDesign style={{marginLeft:40}} name="checkcircle" size={24} color="green" />
            ) : null}
          </Pressable>
        ))}
      </ScrollView>
      <Pressable
        onPress={() => {
          navigation.navigate("Fit", { excersises: route.params.excersises });
          setcompleted([])
        }}
        style={{
          backgroundColor: "blue",
          padding: 10,
          marginVertical: 20,
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: 6,
          width: 120,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 15,
            fontWeight: "600",
          }}
        >
          START
        </Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({});

export default WorkoutScreen;
