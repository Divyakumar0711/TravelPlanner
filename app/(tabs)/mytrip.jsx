import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Colors } from "../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import StartNewTripCard from "../../constants/components/MyTrips/StartNewTripCard";

const MyTrip = () => {
  const [userTrip, setUserTrip] = useState([]);
  return (
    <View style={{ flex: 1, height: "100%", backgroundColor: Colors.WHITE }}>
      <View style={styles.textContainer}>
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 30,
            color: Colors.BLACK,
            letterSpacing: 0.5,
          }}
        >
          My Trips
        </Text>
        <Ionicons name="add-circle-sharp" size={40} color="black" />
      </View>
      {userTrip.length == 0 ? <StartNewTripCard /> : null}
    </View>
  );
};

export default MyTrip;

const styles = StyleSheet.create({
  textContainer: {
    marginTop: 80,
    width: "95%",
    paddingLeft: 25,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
