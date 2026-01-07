import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native-paper";
import { useRouter } from "expo-router";
import CustomInput from "../../components/CustomInput";
import { createUser } from "@/lib/appwrite";

const SignUp = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string }>({});

  const submit = async () => {
    setErrors({}); // Clear previous errors 
    const { name, email, password } = form;

    let newErrors: typeof errors = {};
    if (!name) newErrors.name = "Please enter your name";
    if (!email) newErrors.email = "Please enter your email";
    if (!password) newErrors.password = "Please enter your password";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await createUser({
        email: email,
        password: password,
        name: name,
      });
      // TODO: Implement actual Appwrite sign up logic here
      console.log("Signing up with", { email, password, name });
      // Simulating success for UI testing
      // setTimeout(() => {
      //   setIsSubmitting(false);
      //   router.replace("/SignIn");
      // }, 1000);
      Alert.alert("Success", "User created successfully");
      setIsSubmitting(false);
      router.replace("/SignIn");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View className="bg-white h-full px-6">
      <CustomInput
        label="Name"
        value={form.name}
        onChangeText={(text) => setForm({ ...form, name: text })}
        placeholder="Enter your name"
        containerStyles="mt-7"
        error={errors.name}
      />

      {/* <CustomInput
        label="Mobile Number"
        value={form.mobile}
        onChangeText={(text) => setForm({ ...form, mobile: text })}
        placeholder="Enter your mobile number"
        keyboardType="phone-pad"
        containerStyles="mt-7"
        error={errors.mobile}
      /> */}

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

      <Button
        mode="contained"
        onPress={submit}
        loading={isSubmitting}
        disabled={isSubmitting}
        buttonColor="#FE8C00"
        className="mt-10 rounded-xl py-1"
        labelStyle={{ fontSize: 18, color: 'white' }}
      >
        Sign Up
      </Button>

      <View className="flex-row justify-center pt-5 gap-2">
        <Text className="text-gray-100 font-quicksand-medium">
          Already have an account?
        </Text>
        <Text
          className="text-primary font-quicksand-semibold"
          onPress={() => router.push("/SignIn")}
        >
          Sign In
        </Text>
      </View>
    </View>
  );
};

export default SignUp;
