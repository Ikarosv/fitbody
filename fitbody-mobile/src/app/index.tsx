import React, { useEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import OnBoarding from "../components/OnBoarding";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

const BG_IMAGES = [
  require("assets/images/beautiful-young-sporty-woman-training-workout-gym 3-3.png"),
  require("assets/images/beautiful-young-sporty-woman-training-workout-gym 3-2.png"),
  require("assets/images/beautiful-young-sporty-woman-training-workout-gym 3-1.png"),
  require("assets/images/beautiful-young-sporty-woman-training-workout-gym 3.png"),
];

export default function Page() {
  const [onBoardingIndex, setOnBoardingIndex] = useState(0);

  useEffect(() => {
    async function prepare() {
      try {
        if (BG_IMAGES.length < 4) {
          throw new Error("BG_IMAGES length must be 4");
        }
      } catch (e) {
        console.warn(e);
      } finally {
        setTimeout(() => setOnBoardingIndex(1), 3000);
      }
    }

    prepare();
  }, []);

  return (
    <ImageBackground
      source={BG_IMAGES[onBoardingIndex]}
      className=" bg-background relative"
    >
      <View
        className="absolute inset-0 bg-black w-full h-full"
        style={{
          opacity: onBoardingIndex === 0 ? 0.5 : 0.2,
        }}
      />
      {onBoardingIndex !== 0 && (
        <MaterialIcons.Button
          name="arrow-right"
          size={24}
          backgroundColor="transparent"
          color="#E2F163"
          onPress={() => router.push("/login")}
          underlayColor={"transparent"}
          style={{
            display: "flex",
            flexDirection: "row-reverse",
          }}
        >
          Pular
        </MaterialIcons.Button>
      )}

      <View className="flex items-center justify-center min-h-screen w-full">
        {onBoardingIndex === 0 ? (
          <View className="flex items-center justify-center gap-4">
            <Text className="text-primary heading-1">Bem-vindo(a) ao</Text>
            <Image source={require("assets/images/logo-with-name.png")} />
          </View>
        ) : (
          <OnBoarding
            index={onBoardingIndex}
            setIndex={setOnBoardingIndex}
            length={BG_IMAGES.length - 1}
          />
        )}
      </View>
    </ImageBackground>
  );
}
