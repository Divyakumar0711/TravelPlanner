import { Text, View } from "react-native";
import WelcomeScreen from "../constants/screens/WelcomeScreen";
import CommonButton from "../constants/components/CommonButton";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <WelcomeScreen />
    </View>
  );
}
