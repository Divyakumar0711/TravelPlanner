import React, { useEffect, useState } from "react";
import { View } from "react-native";
import WelcomeScreen from "../constants/screens/WelcomeScreen";
import { FIREBASE_AUTH } from "../configs/FirebaseConfig";
import { Redirect } from "expo-router";

export default function Index() {
  const user = FIREBASE_AUTH.currentUser;
  return (
    <View style={{ flex: 1 }}>{user ? <Redirect href={"/mytrip"}/> : <WelcomeScreen />}</View>
  );
}
