import React, { useContext } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FitnessCards from "../components/FitnessCards";
import { FitnessItems } from "../context";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  const {
    workout,

    colories,

    minutes,
  } = useContext(FitnessItems);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar backgroundColor="#CD853F" style="inverted" />

      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {/* Header Section */}
        <View
          style={{
            backgroundColor: "#CD853F",
            padding: 10,
            height: 200,
            width: "100%",
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
            HOME WORKOUT
          </Text>
         

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              marginTop: 20,
            }}
          >
            <View>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "white",
                  fontSize: 18,
                }}
              >
                {workout}
              </Text>
              <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>
                WORKOUTS
              </Text>
            </View>

            <View>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "white",
                  fontSize: 18,
                }}
              >
                {colories.toFixed(1)}
              </Text>
              <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>
                KCAL
              </Text>
            </View>

            <View>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "white",
                  fontSize: 18,
                }}
              >
                {minutes}
              </Text>
              <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>
                MINS
              </Text>
            </View>
          </View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              style={{
                width: "95%",
                height: 140,
                marginTop: 20,
                borderRadius: 7,
              }}
              source={{
                uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png",
              }}
            />
          </View>
        </View>

        {/* Fitness Cards Section */}
        <FitnessCards />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
