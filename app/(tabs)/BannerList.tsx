import {
  Text,
  View,
  FlatList,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Badge } from "react-native-paper";

import { images, offers } from "../../constants";
import CartButton from "../../components/CartButton";

const BannerList = () => {
  return (
    <>
      <FlatList
        data={offers}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={AppBar()}
        renderItem={({ item, index }) => (
          <Pressable onPress={() => console.log(item.title)}>
            <CardView item={item} index={index} />
          </Pressable>
        )}
      />
    </>
  );
};

export default BannerList;

const CardView = ({
  item,
  index,
}: {
  item: {
    id: number;
    title: string;
    image: any;
    color: string;
    price: string;
  };
  index: number;
}) => {
  const isOdd = index % 2 === 1;

  return (
    <View
      className={`mb-4 rounded-2xl w-full h-40 flex-row items-center justify-between overflow-hidden ${
        isOdd ? "pr-4" : "pl-4"
      }`}
      style={{ backgroundColor: item.color }}
    >
      {isOdd ? (
        <>
          <Image
            source={item.image}
            className="w-40 h-full"
            resizeMode="cover"
          />
          <View style={{ width: 4 }} />
          <View className="max-w-[150px] p-4 h-full">
            <View style={{ height: 10 }} />
            <Text
              className="text-white text-2xl font-bold font-quicksand-bold"
              numberOfLines={2}
            >
              {item.title}
            </Text>
            <View style={{ height: 15 }} />
            <Image source={images.arrowRight} resizeMode="none" />
          </View>
        </>
      ) : (
        <View className="flex-row flex-1">
          <View
            className="p-4 flex-none items-start justify-between"
            style={{ width: 140 }}
          >
            <View style={{ height: 10 }} />
            <Text
              className="text-white text-2xl font-bold font-quicksand-bold"
              numberOfLines={2}
            >
              {item.title}
            </Text>
            <View style={{ height: 15 }} />
            <Image source={images.arrowRight} resizeMode="none" />
          </View>

          <View className="flex-1">
            <Image
              source={item.image}
              style={{ width: "100%", height: "100%" }}
              resizeMode="cover"
            />
          </View>
        </View>
      )}
    </View>
  );
};

export function AppBar() {
  return (
    <View className="justify-between flex-row  items-center py-2">
      <View className="flex-1 items-start">
        <Text className="text-xs font-quicksand-bold text-primary">
          DELIVER TO
        </Text>
        <TouchableOpacity
          onPress={() => {
            console.log("pressed");
          }}
          activeOpacity={0.5}
        >
          <View className="flex-row items-center gap-2">
            <Text className="text-lg font-quicksand-semibold">Bangalore</Text>
            <Image
              source={images.arrowDown}
              className="w-3 h-3"
              style={{ tintColor: "#000000" }}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          console.log("pressed");
        }}
        activeOpacity={0.6}
      >
        <CartButton />
      </TouchableOpacity>
    </View>
  );
}
