import { Text, View } from "react-native";
import LoginScreen from "../constants/screens/LoginScreen";
import CommonButton from "../constants/components/CommonButton";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <LoginScreen />
    </View>
  );
}
