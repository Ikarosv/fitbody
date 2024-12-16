import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Login: React.FC = () => {
  return (
    <View className="bg-background min-w-screen min-h-screen relative p-safe-offset-1">
      <View className="flex flex-row px-safe-offset-5 justify-center items-center">
        <MaterialIcons
          name="arrow-left"
          size={24}
          onPress={() => router.back()}
          color="#E2F163"
        />
        <Text className="text-primary font-poppins font-bold text-xl flex-1 text-center -translate-x-3">
          Log In
        </Text>
      </View>

      <View className="min-h-full flex items-center justify-center">
        <View className="flex flex-col items-center justify-center gap-4 mb-16">
          <Text className="text-white heading-1">Bem-vindo(a)</Text>
          <Text className="text-white paragraph">
            Que bom te ver novamente!
          </Text>
        </View>
        <View className="flex flex-col gap-4 w-full px-10 py-7 bg-tertiary">
          <View className="flex flex-col gap-2">
            <Text className="text-white paragraph">Usuário ou Email</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
