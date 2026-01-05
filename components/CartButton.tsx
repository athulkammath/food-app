import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "@/constants";
import { Badge } from "react-native-paper";

const CartButton = () => {
  return (
    // <View>
    <View className="flex-col items-center justify-center pr-3">
      <View
        style={{
          backgroundColor: "black",
          padding: 7,
          borderRadius: 30,
          position: "relative",
        }}
      >
        <Image
          source={images.bag}
          className="w-4 h-4"
          style={{ tintColor: "white" }}
          resizeMode="contain"
        />
        {2 > 0 && (
          <Badge
            visible={true}
            size={16}
            style={{
              position: "absolute",
              top: -5,
              right: -5,
              backgroundColor: "#FE8C00",
              color: "white",
              fontSize: 10,
              fontWeight: "bold",
            }}
          >
            2
          </Badge>
        )}
      </View>
      <Text className="text-sm font-quicksand-bold">Cart</Text>
    </View>
    // </View>
  );
};

export default CartButton;
