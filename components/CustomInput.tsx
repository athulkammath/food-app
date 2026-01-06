import { View, Text, TextInput, TextInputProps, TouchableOpacity, Image } from 'react-native'
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

interface CustomInputProps extends TextInputProps {
    label: string;
    error?: string;
    containerStyles?: string;
    isPassword?: boolean;
}

export default function CustomInput({
    label,
    error,
    containerStyles,
    keyboardType,
    isPassword = false,
    ...props
}: CustomInputProps) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View className={`space-y-2 ${containerStyles}`}>
            <Text className="text-base text-gray-100 font-quicksand-medium">{label}</Text>

            <View className={`w-full h-12 border-b-2 ${error ? 'border-red-500' : 'border-[#E8E8E8]'} focus:border-primary flex-row items-center`}>
                <TextInput
                    className="flex-1 text-gray-100 font-quicksand-semibold text-base"
                    placeholderTextColor="#878792ff"
                    keyboardType={keyboardType}
                    secureTextEntry={isPassword ? !showPassword : props.secureTextEntry}
                    {...props}
                />

                {isPassword && (
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Ionicons
                            name={showPassword ? "eye" : "eye-off"}
                            size={20}
                            color="#878792"
                        />
                    </TouchableOpacity>
                )}
            </View>

            {error && (
                <Text className="text-red-500 font-quicksand-medium text-sm pt-1">{error}</Text>
            )}
        </View>
    )
}