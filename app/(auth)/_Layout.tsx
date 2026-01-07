import { Slot, usePathname, useRouter } from "expo-router";
import { Dimensions, KeyboardAvoidingView, Platform, View, ScrollView, Image, ImageBackground, TouchableOpacity, Text } from "react-native";

import { images } from "../../constants";

export default function _layout() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
      <ScrollView className="bg-white" contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View className="w-full relative " style={{ height: Dimensions.get('screen').height / 2.3 }}>
          <ImageBackground source={images.loginGraphic} className="size-full justify-end" resizeMode="stretch">
            <View className="w-full h-20 bg-white rounded-t-[30px] absolute -bottom-1" />
            <Image source={images.logo} className="self-center size-40 absolute absolute -bottom-5 z-10" resizeMode="contain" />
          </ImageBackground>
        </View>
        <View className="flex-row mt-5 mx-6 border border-[#E8E8E8]   shadow-sm bg-white rounded-lg overflow-hidden">
          <TouchableOpacity
            onPress={() => router.push("/(auth)/SignIn")}
            className={`flex-1 items-center py-3 ${!pathname.endsWith("/SignUp") ? "bg-white" : "bg-gray-50"}`}
            activeOpacity={0.7}
          >
            <Text className={`text-xl ${!pathname.endsWith("/SignUp") ? "text-primary font-quicksand-semibold" : "text-gray-100 font-quicksand-semibold"}`}>
              Sign-in
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/(auth)/SignUp")}
            className={`flex-1 items-center py-3 ${pathname.endsWith("/SignUp") ? "bg-white" : "bg-gray-50"}`}
            activeOpacity={0.7}
          >
            <Text className={`text-xl ${pathname.endsWith("/SignUp") ? "text-primary font-quicksand-semibold" : "text-gray-100 font-quicksand-semibold"}`}>
              Sign-up
            </Text>
          </TouchableOpacity>
        </View>
        <Slot />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
