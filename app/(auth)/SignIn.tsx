import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native-paper";
import { useRouter } from "expo-router";
import CustomInput from "../../components/CustomInput";
import { useGlobalContext } from "../../context/GlobalProvider";
import { signIn } from "@/lib/appwrite";

const SignIn = () => {
  const router = useRouter();
  const { setIsLogged } = useGlobalContext();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const submit = async () => {
    setErrors({}); // Clear previous errors

    if (!form.email) {
      setErrors((prev) => ({ ...prev, email: "Please enter your email" }));
    }
    if (!form.password) {
      setErrors((prev) => ({ ...prev, password: "Please enter your password" }));
    }

    if (!form.email || !form.password) return;

    setIsSubmitting(true);

    try {
      setIsLogged(true);
      await signIn({ email: form.email, password: form.password });

      console.log("Logging in with", form);
      Alert.alert("Success", "Logged in successfully");
      router.replace("/");
      setTimeout(() => setIsSubmitting(false), 1000);

    } catch (error: any) {
      Alert.alert("Error", error.message);
      setIsSubmitting(false);
    }
  };

  return (
    <View className="bg-white h-full px-6">

      <CustomInput
        label="Email"
        value={form.email}
        onChangeText={(text) => setForm({ ...form, email: text })}
        placeholder="Enter your email"
        keyboardType="email-address"
        containerStyles="mt-7"
        error={errors.email}
      />

      <CustomInput
        label="Password"
        value={form.password}
        onChangeText={(text) => setForm({ ...form, password: text })}
        placeholder="Enter your password"
        keyboardType="default"
        isPassword
        containerStyles="mt-7"
        error={errors.password}
      />

      <View className="mt-2 flex-row justify-end">
        <Text className="text-primary font-quicksand-medium">Forgot Password?</Text>
      </View>

      <Button
        mode="contained"
        onPress={submit}
        loading={isSubmitting}
        disabled={isSubmitting}
        buttonColor="#FE8C00"
        className="mt-5 rounded-xl py-1"
        labelStyle={{ fontFamily: 'Quicksand-Bold', fontSize: 18, color: 'white' }}
      > Login
      </Button>

      <View className="flex-row justify-center pt-1 gap-2">
        <Text className="text-gray-100 font-quicksand-medium">
          Don't have an account?
        </Text>
        <Text
          className="text-primary font-quicksand-semibold"
          onPress={() => router.push("/SignUp")}
        >
          Sign Up
        </Text>
      </View>
    </View>
  );
};

export default SignIn;
