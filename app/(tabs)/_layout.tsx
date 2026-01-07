import { Redirect, Slot, Tabs } from "expo-router";
import useAuthStore from "../../store/auth.store";
import { ActivityIndicator, View, Text, Image } from "react-native";
import { images } from "../../constants";
import { tabs } from "../../constants/tabs";
import { useGlobalContext } from "../../context/GlobalProvider";
import TabIcon from "../../components/TabIcon";

const _layout = () => {
  const { isLogged, isLoading } = useGlobalContext();

  if (isLoading) return (
    <View className="flex-1 justify-center items-center h-full bg-white">
      <ActivityIndicator size="large" color="#FE8C00" />
    </View>
  );

  if (!isLogged) return <Redirect href="/(auth)/SignIn" />;

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FE8C00",
        tabBarInactiveTintColor: "#b8b8baff",
        tabBarStyle: {
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(255, 255, 255, 1)",
          height: 60,
          bottom: 40,
          borderTopWidth: 0,
          elevation: 2,
          borderRadius: 24,
          marginHorizontal: 12,
          marginBottom: 15,
          position: "absolute",
          paddingTop: 10,
        },
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={tab.icon}
                color={color}
                name={tab.title}
                focused={focused}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default _layout;

