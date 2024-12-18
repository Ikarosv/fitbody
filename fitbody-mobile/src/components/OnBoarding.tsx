import { Text, TouchableOpacity, View } from "react-native";
import Workout from "../../assets/svgs/workout";
import MemoNutrition from "../../assets/svgs/nutrition";
import MemoCommunity from "../../assets/svgs/community";
import { router } from "expo-router";
import BlurButton from "./Buttons/BlurButton";

export default function OnBoarding({
  index,
  setIndex,
  length,
}: {
  index: number;
  setIndex: (index: number) => void;
  length: number;
}) {
  const onBoardingButton = Array.from({ length }, (_, i) => (
    <TouchableOpacity key={i} className="p-1" onPress={() => setIndex(i + 1)}>
      <View
        className={`${
          i + 1 === index ? "bg-white" : "bg-secondary"
        } w-5 h-1 rounded-full`}
      />
    </TouchableOpacity>
  ));
  const message = [
    "Comece sua jornada rumo a um estilo de vida mais ativo",
    "Encontre dicas de nutrição adequadas ao seu estilo de vida",
    "Uma comunidade para você, desafie-se",
  ];
  const icons = [<Workout />, <MemoNutrition />, <MemoCommunity />];

  const start = () => {
    router.push("/login");
  };
  return (
    <View className="flex items-center justify-center w-full gap-4">
      <View className="flex items-center justify-center bg-tertiary px-10 h-fit w-full pt-4 pb-7 gap-2">
        {icons[index - 1]}
        <Text className="heading-2 text-white text-center capitalize">
          {message[index - 1]}
        </Text>
        <View className="flex flex-row">{onBoardingButton}</View>
      </View>
      {/* <TouchableOpacity
        className="rounded-full border-0.5 border-solid border-white overflow-hidden"
        style={{
          shadowColor: "#000",
          shadowOpacity: 0.25,
          shadowRadius: 0,
          elevation: 10,
        }}
        onPress={() => {
          if (index >= length) {
            start();
            return;
          }
          setIndex(index + 1);
        }}
      >
        <BlurView
          intensity={35}
          className="rounded-full  w-52 h-11 flex items-center justify-center"
          experimentalBlurMethod="dimezisBlurView"
        >
          <Text className="text-white heading-3">
            {index >= length ? "Começar" : "Próximo"}
          </Text>
        </BlurView>
      </TouchableOpacity> */}
      <BlurButton
        onPress={() => {
          if (index >= length) {
            start();
            return;
          }
          setIndex(index + 1);
        }}
      >
        <Text className="text-white heading-3">
          {index >= length ? "Começar" : "Próximo"}
        </Text>
      </BlurButton>
    </View>
  );
}
