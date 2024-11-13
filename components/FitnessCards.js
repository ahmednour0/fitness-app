import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import fitness from "../data/fitness";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const FitnessCards = () => {
  const FitnessData = fitness;
const navigation =useNavigation()
  return (
    <View style={{marginTop:70}}>
      {FitnessData.map((item, key) => (
        <Pressable
        onPress={()=>navigation.navigate("Workout",{
          image:item.image,
          excersises:item.excersises,
          id:item.id,
        })}
          key={key}
          style={{ alignItems: "center", justifyContent: "center",margin:10}}
        >
          <Image
            style={{
              width: "95%",
              height: 140,
            
              borderRadius: 7,
            }}
            source={{ uri: item.image }}
          />

          <Text
            style={{
              position: "absolute",
              color: "white",
              fontWeight: "bold",
              left: 20,
              top: 20,
              fontSize: 16,
            }}
          >
            {item.name}
          </Text>
          <MaterialCommunityIcons
            style={{ position: "absolute", color: "white", bottom: 15,left:20 }}
            name="lightning-bolt"
            size={24}
            color="black"
          />
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});

export default FitnessCards;
