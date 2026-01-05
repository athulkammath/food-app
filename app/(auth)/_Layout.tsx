import { Slot, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native-paper";

export default function _Layout() {
  return (
    <SafeAreaView>
      <Text>Auth Layout</Text>
      <Slot />
      {/* <Stack screenOptions={{ headerShown: false }} /> */}
    </SafeAreaView>
  );
}
