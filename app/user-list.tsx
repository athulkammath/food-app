import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { Stack } from "expo-router";
import { useGetAllUsersQuery } from "../src/services/jsonPlaceholderApi";

export default function UserList() {
    const { data, error, isLoading } = useGetAllUsersQuery({});

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <Stack.Screen options={{ title: "User List" }} />
            {isLoading && (
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <ActivityIndicator size="large" color="#FE8C00" />
                </View>
            )}

            {error && (
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "red", fontSize: 16 }}>Failed to load users.</Text>
                </View>
            )}

            {data && (
                <FlatList
                    data={data.users}
                    keyExtractor={(item: any) => item.id.toString()}
                    contentContainerStyle={{ padding: 16 }}
                    renderItem={({ item }: { item: any }) => (
                        <View style={{
                            padding: 16,
                            marginBottom: 12,
                            backgroundColor: "#f9f9f9",
                            borderRadius: 8,
                            borderWidth: 1,
                            borderColor: "#ddd"
                        }}>
                            <Text style={{ fontSize: 18, fontWeight: "500" }}>
                                {item.firstName} {item.lastName}
                            </Text>
                        </View>
                    )}
                />
            )}
        </View>
    );
}
