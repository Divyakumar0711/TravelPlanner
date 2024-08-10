import React from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
export default CommonButton = (props) => (
  <TouchableWithoutFeedback
    onPress={() => (props.enabled == true ? props.onPress() : null)}
  >
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        marginTop: props.marginTop,
        width: props.width,
        marginLeft: props.marginLeft,
        marginRight: props.marginRight,
        backgroundColor: props.backgroundColor,
        height: props.height,
        borderRadius: props.borderRadius,
        borderColor: props.borderColor,
        borderWidth: props.borderWidth,
      }}
    >
      <Text
        style={{
          fontSize: props.fontSize,
          color: props.fontColor,
          fontFamily: props.fontFamily,
          textDecorationLine:
            props.textDecorationLine === "none" ? "none" : "underline",
          letterSpacing: props.letterSpacing,
          textAlign: "center",
          paddingLeft: props.paddingLeft,
          paddingRight: props.paddingRight,
        }}
      >
        {props.label}
      </Text>
    </View>
  </TouchableWithoutFeedback>
);
