import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../../Colors";
import CommonButton from "../CommonButton";
const StartNewTripCard = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="location-sharp" size={40} color="black" />
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 26,
          paddingTop: 20,
          color: Colors.BLACK,
        }}
      >
        No trips planned yet
      </Text>
      <Text
        style={{
          fontFamily: "outfit-medium",
          fontSize: 22,
          paddingTop: 40,
          color: Colors.LIGHTGREY,
        }}
      >
        It's time to plane a new travel experience! Get Started below
      </Text>
      <View style={{ marginTop: 40 }}>
        <CommonButton
          label={"Start a new trip"}
          enabled={true}
          width={"40%"}
          height={50}
          borderRadius={25}
          backgroundColor={Colors.BLACK}
          fontColor={Colors.WHITE}
          fontSize={16}
          fontFamily={"outfit-medium"}
          textDecorationLine="none"
          letterSpacing={1}
          paddingLeft={10}
          paddingRight={10}
        />
      </View>
    </View>
  );
};

export default StartNewTripCard;

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    justifyContent: "center",
    alignItems: "center",
  },
});
