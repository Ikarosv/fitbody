import { BlurView } from "expo-blur";
import {
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

interface BlurButtonProps extends TouchableOpacityProps {
  shadowColor?: string;
  shadowOpacity?: number;
  shadowRadius?: number;
  elevation?: number;
  style?: StyleProp<ViewStyle> & object;
}

const BlurButton = ({
  children,
  style,
  shadowColor = "#000",
  shadowOpacity = 0.25,
  shadowRadius = 0,
  elevation = 10,
  ...props
}: BlurButtonProps) => {
  return (
    <TouchableOpacity
      className="rounded-full border-0.5 border-solid border-white overflow-hidden"
      style={{
        shadowColor,
        shadowOpacity,
        shadowRadius,
        elevation,
        ...style,
      }}
      {...props}
    >
      <BlurView
        intensity={35}
        className="rounded-full  w-52 h-11 flex items-center justify-center"
        experimentalBlurMethod="dimezisBlurView"
      >
        {children}
      </BlurView>
    </TouchableOpacity>
  );
};

export default BlurButton;
