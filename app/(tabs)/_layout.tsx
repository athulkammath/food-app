import { Redirect, Slot } from "expo-router";

const _Layout = () => {
  const isAuthenticated = true;

  if (!isAuthenticated) return <Redirect href="/(auth)/SignIn" />;
  return <Slot />;
};

export default _Layout;
