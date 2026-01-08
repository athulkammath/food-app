import { View, Text } from "react-native";
import { Stack } from "expo-router";

export default function UserList() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Stack.Screen options={{ title: "User List" }} />
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>User List Screen</Text>
        </View>
    );
}
