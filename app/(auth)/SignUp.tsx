import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { router } from "expo-router";

const SignUp = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold">SignUp Page</Text>
      <View className="h-2" />
      <Button mode="contained" onPress={() => router.push("/SignIn")}>
        Sign In
      </Button>
    </View>
  );
};

export default SignUp;
