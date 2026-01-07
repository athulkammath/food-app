import { View, Text, Image, ImageSourcePropType } from 'react-native'
import React from 'react'

interface TabIconProps {
    icon: ImageSourcePropType;
    color: string;
    name: string;
    focused: boolean;
}

const TabIcon = ({ icon, color, name, focused }: TabIconProps) => {
    return (
        <View className="items-center justify-center gap-2 w-20">
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6"
            />
            <Text
                className={`${focused ? "font-psemibold" : "font-pregular"} text-xs w-full text-center`}
                style={{ color: color }}
                numberOfLines={1}
            >
                {name}
            </Text>
        </View>
    )
}

export default TabIcon
