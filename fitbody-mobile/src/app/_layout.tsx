import { SafeAreaProvider } from "react-native-safe-area-context";
import "../global.css";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { View } from "react-native";
import { useFonts } from "expo-font";
import * as poppins from "@expo-google-fonts/poppins";
import * as leagueSpartan from "@expo-google-fonts/league-spartan";
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { KeyboardProvider } from "react-native-keyboard-controller";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [loaded, error] = useFonts({
    Poppins: poppins.Poppins_400Regular,
    "Poppins Thin": poppins.Poppins_100Thin,
    "Poppins Light": poppins.Poppins_300Light,
    "Poppins Medium": poppins.Poppins_500Medium,
    "Poppins SemiBold": poppins.Poppins_600SemiBold,
    "Poppins Bold": poppins.Poppins_700Bold,
    "League Spartan": leagueSpartan.LeagueSpartan_400Regular,
    "League Spartan Thin": leagueSpartan.LeagueSpartan_100Thin,
    "League Spartan Light": leagueSpartan.LeagueSpartan_300Light,
    "League Spartan Medium": leagueSpartan.LeagueSpartan_500Medium,
    "League Spartan SemiBold": leagueSpartan.LeagueSpartan_600SemiBold,
    "League Spartan Bold": leagueSpartan.LeagueSpartan_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <StatusBar style="light" translucent />
      <KeyboardProvider statusBarTranslucent>
        <View className="font-poppins relative">
          <Slot />
        </View>
      </KeyboardProvider>
    </SafeAreaProvider>
  );
}
