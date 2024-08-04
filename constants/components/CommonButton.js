// import { StyleSheet, Text, View,TouchableWithoutFeedback } from "react-native";
// import React from "react";

// const CommonButton = () => {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//         <TouchableWithoutFeedback>
//       <View
//         style={{
//           width: "90%",
//           height: 50,
//           backgroundColor: "red",
//           borderRadius: 25,
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Text
//           style={{
//             fontFamily: "outfit-medium",
//             fontSize: 16,
//             color: "black",
//             letterSpacing: 1,
//           }}
//         >
//           Button
//         </Text>
//       </View>
//       </TouchableWithoutFeedback>
//     </View>
//   );
// };

// export default CommonButton;

// const styles = StyleSheet.create({});
import React from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
export default CommonButton = props => (
  <TouchableWithoutFeedback
    onPress={() => (props.enabled == true ? props.onPress() : null)}>
    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: props.marginTop, width: props.width, marginLeft: props.marginLeft, marginRight: props.marginRight, backgroundColor: props.backgroundColor, height: props.height, borderRadius: props.borderRadius }}>
      <Text style={{ fontSize: props.fontSize, color: props.fontColor, fontFamily: props.fontFamily, textDecorationLine: props.textDecorationLine === 'none' ? 'none' : 'underline', letterSpacing: props.letterSpacing }}>
        {props.label}
      </Text>
    </View>
  </TouchableWithoutFeedback>
);
