import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { Redirect, useNavigation } from "expo-router";
import { Colors } from "../../../constants/Colors";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../../../configs/FirebaseConfig";
const SignIn = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const auth = FIREBASE_AUTH;

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const emailError = useRef(null);
  const passwordError = useRef(null);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const onShowPassword = (password) => {
    setShowPassword(!showPassword);
  };

  const validateEmail = () => {
    const emailRes = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      emailError.current = "Email is required";
    } else if (!emailRes.test(email)) {
      emailError.current = "Enter valid email";
    } else {
      emailError.current = null;
    }
  };

  const validatePassword = () => {
    const passwordRes = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (!password) {
      passwordError.current = "Password is required";
    } else if (!passwordRes.test(password)) {
      passwordError.current = "Enter valid password";
    } else {
      passwordError.current = null;
    }
  };

  const onSignIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) router.replace("/mytrip");
    } catch (error) {
      console.log(error);
      //alert("Sign in failed: " + error.message);
      alert("Sign in failed, invalid credential");
    }
  };

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
          paddingTop: 60,
        }}
      >
        Let's Sign In
      </Text>
      <Text
        style={{
          fontFamily: "outfit-medium",
          fontSize: 24,
          color: Colors.PINK,
          paddingTop: 10,
        }}
      >
        Welcome back
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 18,
          color: Colors.LIGHTGREY,
          paddingTop: 10,
        }}
      >
        Enter your credential to continue
      </Text>

      <View
        style={{
          marginTop: 40,
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
          onFocus={() => {
            setEmail("");
            emailError.current = null;
          }}
          onBlur={validateEmail}
          onChangeText={(txt) => setEmail(txt)}
        />
      </View>
      {emailError.current && (
        <Text style={styles.errorText}>{emailError.current}</Text>
      )}

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
          secureTextEntry={showPassword ? false : true}
          style={{
            width: "82%",
            fontFamily: "Outfit",
            fontSize: 16,
            color: "#292643",
            paddingLeft: 5,
          }}
          onChangeText={(txt) => setPassword(txt)}
          onFocus={() => {
            setPassword("");
            passwordError.current = null;
          }}
          onBlur={validatePassword}
        />
        <Ionicons
          name={showPassword ? "eye" : "eye-off"}
          size={24}
          color="black"
          onPress={onShowPassword}
        />
      </View>
      {passwordError.current && (
        <Text style={styles.errorText}>{passwordError.current}</Text>
      )}
      <View style={{ marginTop: 60 }}>
        <CommonButton
          onPress={onSignIn}
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

export default SignIn;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 25,
    paddingTop: 40,
    backgroundColor: Colors.WHITE,
  },
  errorText: {
    color: Colors.PINK,
    marginLeft: 10,
    marginTop: 5,
    fontFamily: "Outfit",
    fontSize: 14,
  },
});
