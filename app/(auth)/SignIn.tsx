import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { useRouter } from "expo-router";

const SignIn = () => {
  const router = useRouter();
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold">SignIn Page</Text>
      <View className="h-2" />
      <Button mode="contained" onPress={() => router.push("/SignUp")}>
        Sign Up
      </Button>
    </View>
  );
};

export default SignIn;
