import { Redirect, Slot } from "expo-router";
import { useGlobalContext } from "../../context/GlobalProvider";
import { ActivityIndicator, View } from "react-native";

const _layout = () => {
  const { isLogged, isLoading } = useGlobalContext();

  if (isLoading) return (
    <View className="flex-1 justify-center items-center h-full bg-white">
      <ActivityIndicator size="large" color="#FE8C00" />
    </View>
  );

  if (!isLogged) { return <Redirect href="/(auth)/SignIn" /> };
  return <Slot />;
};

export default _layout;
