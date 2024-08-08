import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Colors } from "../Colors";
import CommonButton from "../components/CommonButton";
import { useRouter } from "expo-router";

const WelcomeScreen = () => {
  const router = useRouter()
  return (
    <View>
      <Image
        source={require("../../assets/images/travel.jpg")}
        style={{ height: 500, width: "100%" }}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 24,
            letterSpacing: 0.5,
            color: Colors.BLACK,
            textAlign: "center",
          }}
        >
          Travel Planner
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 14,
            color: Colors.LIGHTGREY,
            textAlign: "center",
            marginTop:10
          }}
        >
          Effortlessly plan your trips from start to finish. Find the best
          flights, book accommodations, and create personalized itineraries—all
          in one place.
        </Text>

        <View style={{ marginTop:60 }}>
          <CommonButton
          onPress = {() => router.push("auth/sign-in")}
            label={"Get Start"}
            enabled={true}
            marginLeft={20}
            marginRight={20}
            width={"90%"}
            height={50}
            borderRadius={25}
            backgroundColor={Colors.BLACK}
            fontColor={Colors.WHITE}
            fontSize={20}
            fontFamily={"outfit-medium"}
            textDecorationLine="none"
            letterSpacing={1}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    marginTop: -40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: "100%",
    paddingTop: 5,
  },
});

export default WelcomeScreen;
