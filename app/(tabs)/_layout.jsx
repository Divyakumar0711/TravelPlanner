import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PINK,
        tabBarInactiveTintColor: Colors.BLACK,
      }}
    >
      <Tabs.Screen
        name="mytrip"
        options={{
          tabBarLabel: "My Trip",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="location-sharp"
              size={24}
              color={focused ? Colors.PINK : Colors.BLACK}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          tabBarLabel: "Discover",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="globe-sharp"
              size={24}
              color={focused ? Colors.PINK : Colors.BLACK}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person-circle-sharp"
              size={24}
              color={focused ? Colors.PINK : Colors.BLACK}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;

const styles = StyleSheet.create({});
