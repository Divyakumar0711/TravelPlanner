import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import { useRouter } from "expo-router";
import { Colors } from "../../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

const SignUp = () => {
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={30} color="black" />
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 30,
          color: Colors.BLACK,
          marginTop: 50,
        }}
      >
        Create your account
      </Text>

      <View
        style={{
          marginTop: 80,
          borderWidth: 1,
          borderRadius: 20,
          height: 50,
          paddingLeft: 5,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Ionicons name="person" size={24} color="black" />
        <TextInput
          placeholder="Enter your name"
          placeholderTextColor={"#787586"}
          style={{
            paddingLeft: 5,
            width: "90%",
            fontFamily: "Outfit",
            fontSize: 16,
            color: "#292643",
          }}
        />
      </View>
      <View
        style={{
          marginTop: 10,
          borderWidth: 1,
          borderRadius: 20,
          height: 50,
          paddingLeft: 5,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Ionicons name="mail" size={24} color="black" />
        <TextInput
          placeholder="Enter Email Address"
          placeholderTextColor={"#787586"}
          style={{
            paddingLeft: 5,
            width: "90%",
            fontFamily: "Outfit",
            fontSize: 16,
            color: "#292643",
          }}
        />
      </View>

      <View
        style={{
          marginTop: 10,
          borderWidth: 1,
          borderRadius: 20,
          height: 50,
          paddingLeft: 5,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Ionicons name="lock-closed" size={24} color="black" />
        <TextInput
          placeholder="Enter Password"
          placeholderTextColor={"#787586"}
          style={{
            width: "82%",
            fontFamily: "Outfit",
            fontSize: 16,
            color: "#292643",
            paddingLeft: 5,
          }}
        />
        <Ionicons name="eye" size={24} color="black" />
        {/* <Ionicons name="eye-off" size={24} color="black" /> */}
      </View>
      <View style={{ marginTop: 60 }}>
        <CommonButton
          onPress={() => router.push("auth/sign-in")}
          label={"Sign in"}
          enabled={true}
          width={"100%"}
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
      <View style={{ marginTop: 20 }}>
        <CommonButton
          onPress={() => router.replace("auth/sign-up")}
          label={"Create Account"}
          enabled={true}
          width={"100%"}
          height={50}
          borderRadius={25}
          backgroundColor={Colors.WHITE}
          borderWidth={1}
          borderColor={Colors.BLACK}
          fontColor={Colors.BLACK}
          fontSize={20}
          fontFamily={"outfit-medium"}
          textDecorationLine="none"
          letterSpacing={1}
        />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 25,
    paddingTop: 40,
    backgroundColor: Colors.WHITE,
  },
});
