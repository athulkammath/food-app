import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import "./global.css";
import GlobalProvider from "../context/GlobalProvider";
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://260f2d1acac48eb7f3b557f11b223015@o4510662905888768.ingest.de.sentry.io/4510662926860368',

  // Adds more context data to events (IP address, cookies, user, etc.)
  // For more information, visit: https://docs.sentry.io/platforms/react-native/data-management/data-collected/
  sendDefaultPii: true,

  // Enable Logs
  enableLogs: true,

  // Configure Session Replay
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1,
  integrations: [Sentry.mobileReplayIntegration(), Sentry.feedbackIntegration()],

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: __DEV__,
});

import { Provider } from "react-redux";
import { store } from "@/src/store/store";

export default Sentry.wrap(function Layout() {
  return (
    <Provider store={store}>
      <GlobalProvider>
        <PaperProvider>
          <Stack screenOptions={{ headerShown: false }} />
        </PaperProvider>
      </GlobalProvider>
    </Provider>
  );
});