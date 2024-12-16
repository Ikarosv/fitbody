import { SafeAreaProvider } from "react-native-safe-area-context";
import "../global.css";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as poppins from "@expo-google-fonts/poppins";
import * as leagueSpartan from "@expo-google-fonts/league-spartan";
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [loaded, error] = useFonts({
    Poppins: poppins.Poppins_400Regular,
    Poppins_Thin: poppins.Poppins_100Thin,
    Poppins_Light: poppins.Poppins_300Light,
    Poppins_Medium: poppins.Poppins_500Medium,
    Poppins_SemiBold: poppins.Poppins_600SemiBold,
    Poppins_Bold: poppins.Poppins_700Bold,
    LeagueSpartan: leagueSpartan.LeagueSpartan_400Regular,
    LeagueSpartan_Thin: leagueSpartan.LeagueSpartan_100Thin,
    LeagueSpartan_Light: leagueSpartan.LeagueSpartan_300Light,
    LeagueSpartan_Medium: leagueSpartan.LeagueSpartan_500Medium,
    LeagueSpartan_SemiBold: leagueSpartan.LeagueSpartan_600SemiBold,
    LeagueSpartan_Bold: leagueSpartan.LeagueSpartan_700Bold,
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
      <View className="font-poppins relative">
        <Slot />
      </View>
    </SafeAreaProvider>
  );
}
