import BlurButton from "@/components/Buttons/BlurButton";
import ControlledInput from "../../../components/Input";
import { MaterialIcons, FontAwesome6, Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { MainButton } from "@/components/Buttons/MainButton";

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
        <Text className="text-primary heading-2 flex-1 text-center -translate-x-3">
          Entrar
        </Text>
      </View>

      <View className="min-h-full flex items-center justify-center">
        <View className="flex flex-col items-center justify-center gap-4 mb-16">
          <Text className="text-white heading-1">Bem-vindo(a)</Text>
          <Text className="text-white paragraph">
            Que bom te ver novamente!
          </Text>
        </View>
        <View className="w-full px-10 py-7 bg-tertiary">
          <KeyboardAwareScrollView>
            <View className="flex flex-col gap-5">
              {/* Usuario ou email */}
              <View className="flex flex-col gap-2">
                <Text
                  className="text-onPrimary paragraph"
                  style={{
                    fontFamily: "LeagueSpartan_Medium",
                  }}
                >
                  Usuário ou Email
                </Text>
                <ControlledInput
                  id="usernameOrEmail"
                  textContentType="emailAddress"
                  placeholder="Digite seu email"
                />
              </View>
              {/* Senha */}
              <View className="flex flex-col gap-2">
                <Text
                  className="text-onPrimary paragraph"
                  style={{
                    fontFamily: "LeagueSpartan_Medium",
                  }}
                >
                  Senha
                </Text>
                <ControlledInput
                  id="password"
                  textContentType="password"
                  placeholder="Digite sua senha"
                  secureTextEntry
                />
                <Link href="/forgot-password">
                  <Text
                    className="text-onPrimary paragraph text-right"
                    style={{
                      fontFamily: "LeagueSpartan_Medium",
                    }}
                  >
                    Esqueceu a senha?
                  </Text>
                </Link>
              </View>
            </View>
          </KeyboardAwareScrollView>
        </View>
        <BlurButton className="mt-10">
          <Text className="text-white heading-3">Entrar</Text>
        </BlurButton>
        <View className="mt-5 flex flex-col gap-5">
          <Text className="text-white paragraph text-center">
            ou entre com:
          </Text>
          <View className="flex flex-row gap-5 justify-center">
            <MainButton>
              <FontAwesome6 name="google" size={24} />
            </MainButton>
            <MainButton>
              <MaterialIcons name="facebook" size={24} />
            </MainButton>
            <MainButton>
              <Ionicons name="finger-print-outline" size={24} />
            </MainButton>
          </View>
        </View>
        <View className="flex flex-row gap-2 justify-center mt-12">
          <Text className="text-white paragraph">Não tem uma conta?</Text>
          <Link href="/signup" className="text-primary paragraph">
            Registre-se
          </Link>
        </View>
      </View>
    </View>
  );
};

export default Login;
