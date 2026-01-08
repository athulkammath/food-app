import { increment, decrement, setIsChecked } from "@/src/store/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { View } from "react-native";
import { Button, Checkbox, Surface, Text } from "react-native-paper";
import { router } from "expo-router";

export default function SearchScreen() {
    const count = useSelector((state: any) => state.counter.value);
    const isChecked = useSelector((state: any) => state.counter.isChecked);
    const dispatch = useDispatch();

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f4f6f8",
            }}
        >
            <Surface
                elevation={4}
                style={{
                    padding: 32,
                    width: 320,
                    borderRadius: 12,
                    alignItems: 'center',
                    backgroundColor: "#f4f6f8",
                }}
            >
                <Text variant="headlineSmall" style={{ fontWeight: "bold", marginBottom: 16 }}>
                    Counter Screen
                </Text>

                <Text
                    variant="displayMedium"
                    style={{ fontWeight: "bold", marginVertical: 24 }}
                >
                    {count}
                </Text>

                <View style={{ flexDirection: "row", gap: 16, paddingVertical: 16, justifyContent: "center" }}>
                    {count > 0 && (
                        <Button
                            mode="contained"
                            buttonColor="red"
                            onPress={() => dispatch(decrement())}
                        >
                            Decrement -
                        </Button>
                    )}

                    <Button
                        mode="contained"
                        buttonColor="green"
                        onPress={() => {
                            dispatch(increment());
                        }}
                    >
                        Plus +
                    </Button>
                </View>
                {count > 0 && (
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <Text style={{ color: "black", fontSize: 14, fontWeight: "bold" }}>I have agreed the terms & conditions.</Text>
                        <Checkbox
                            status={isChecked ? 'checked' : 'unchecked'}
                            color="green"
                            uncheckedColor="red"
                            onPress={() => {
                                dispatch(setIsChecked(!isChecked));
                            }}
                        />
                    </View>
                )}
                {isChecked && <Button
                    mode="contained"
                    style={{ marginTop: 25 }}
                    buttonColor="#FE8C00"
                    textColor="black"
                    onPress={() => {
                        router.push("/user-list");
                    }}
                >
                    See user Details
                </Button>}
            </Surface>
        </View>
    );
}
