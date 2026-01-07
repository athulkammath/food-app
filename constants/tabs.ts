import { ImageSourcePropType } from "react-native";
import { images } from "./index";
import BannerList from "../components/BannerList";
import SearchScreen from "../components/SearchScreen";
import CartScreen from "../components/CartScreen";
import ProfileScreen from "../components/ProfileScreen";

export interface TabModel {
    name: string;
    title: string;
    icon: ImageSourcePropType;
    component: React.ComponentType<any>;
}

export const tabs: TabModel[] = [
    { name: "index", title: "Home", icon: images.home, component: BannerList },
    { name: "Search", title: "Search", icon: images.search, component: SearchScreen },
    { name: "Cart", title: "Cart", icon: images.bag, component: CartScreen },
    { name: "Profile", title: "Profile", icon: images.user, component: ProfileScreen },
];
