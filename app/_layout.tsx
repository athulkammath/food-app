import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import "./global.css";
import React from "react";
import GlobalProvider from "../context/GlobalProvider";

export default function Layout() {
  return (
    <GlobalProvider>
      <PaperProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </PaperProvider>
    </GlobalProvider>
  );
}
