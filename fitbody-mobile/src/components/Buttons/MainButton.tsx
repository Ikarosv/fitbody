import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface MainButtonProps {
  children?: React.ReactNode;
  onPress?: () => void;
  className?: string;
}

export const MainButton: React.FC<MainButtonProps> = ({
  children,
  onPress,
  className,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        className={`overflow-hidden gap-2.5 self-stretch px-3 py-2 text-lg tracking-normal leading-none text-center text-violet-500 bg-white rounded-[100px] ${className}`}
      >
        <Text className="text-violet-500 text-lg">{children}</Text>
      </View>
    </TouchableOpacity>
  );
};
