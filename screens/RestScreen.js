import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const RestScreen = () => {
    let timer = 0
    const navigation= useNavigation()

    const [timeLeft, settimeLeft] = useState(3)
    const startTime = () => {
        setTimeout(() => {
          if (timeLeft <= 0) {
            navigation.goBack();
            clearTimeout(timer);
          }
          settimeLeft(timeLeft - 1);
        }, 1000);
      };
    useEffect(() => {
      startTime()
      return ()=>clearTimeout(timer)
    },)
    return (
        <SafeAreaView >
             <Image
        // resizeMode="contain"
        source={{
          uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_500:300,c_fit/dpr_2/image/carefit/bundle/CF01032_magazine_2.png",
        }}
        style={{ width: "100%", height: 420 }}
      />

      <Text
        style={{
          fontSize: 30,
          fontWeight: "900",
          marginTop: 50,
          textAlign: "center",
        }}
      >
        TAKE A BREAK!
      </Text>
      <Text
    style={{
          fontSize: 40,
          fontWeight: "800",
          marginTop: 50,
          textAlign: "center",
        }}
      >
        {timeLeft}
      </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default RestScreen;
