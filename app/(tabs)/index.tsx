import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BannerList from "./BannerList";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 px-4 my-4 bg-white">
      <View className="h-2" />
      <BannerList />
    </SafeAreaView>
  );
}
