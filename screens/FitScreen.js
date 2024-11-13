import { useRoute } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { FitnessItems } from "../context";

const FitScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const exercises = route.params.excersises;
  const current = exercises[index];
  console.log(current.name)

  const { 
    completed, 
    setcompleted, 
    workout, 
    setworkout, 
    colories, 
    setcolories, 
    minutes, 
    setminutes 
  } = useContext(FitnessItems);
console.log(completed)
  const handleCompleteExercise = () => {
    navigation.navigate("Rest");
    setcompleted([...completed, current.name]);
    setworkout(workout + 1);
    setminutes(minutes + 2.5);
    setcolories(colories + 6.3);
    
    setTimeout(() => {
      setIndex(index + 1);
    }, 2000);
  };

  const handleSkipExercise = () => {
    navigation.navigate("Rest");
    setTimeout(() => {
      setIndex(index + 1);
    }, 2000);
  };

  const handlePrevExercise = () => {
    if (index > 0) {
      navigation.navigate("Rest");
      setTimeout(() => {
        setIndex(index - 1);
      }, 2000);
    }
  };

  return (
    <SafeAreaView>
      <Image
        style={{ width: "100%", height: 370 }}
        source={{ uri: current.image }}
      />
      <Text
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
          fontSize: 30,
          fontWeight: "bold",
        }}
      >
        {current.name}
      </Text>
      <Text
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
          fontSize: 38,
          fontWeight: "bold",
        }}
      >
        x{current.sets}
      </Text>
      
      {index + 1 >= exercises.length ? (
        <Pressable
          onPress={() => {
            setcompleted([...completed, current.name]);
            
            navigation.navigate("Home")}}
          style={styles.doneButton}
        >
          <Text style={styles.buttonText}>DONE</Text>
        </Pressable>
      ) : (
        <Pressable onPress={handleCompleteExercise} style={styles.doneButton}>
          <Text style={styles.buttonText}>DONE</Text>
        </Pressable>
      )}

      <Pressable style={styles.navigationButtonsContainer}>
        <Pressable
          disabled={index === 0}
          onPress={handlePrevExercise}
          style={styles.prevButton}
        >
          <Text style={styles.buttonText}>PREV</Text>
        </Pressable>
        
        {index + 1 >= exercises.length ? (
          <Pressable
            onPress={() => navigation.navigate("Home")}
            style={styles.skipButton}
          >
            <Text style={styles.buttonText}>SKIP</Text>
          </Pressable>
        ) : (
          <Pressable onPress={handleSkipExercise} style={styles.skipButton}>
            <Text style={styles.buttonText}>SKIP</Text>
          </Pressable>
        )}
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  doneButton: {
    backgroundColor: "blue",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
    borderRadius: 20,
    padding: 10,
    width: 150,
  },
  navigationButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 50,
  },
  prevButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 20,
    width: 100,
  },
  skipButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 20,
    width: 100,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
});

export default FitScreen;
