import { StyleSheetProperties, ViewStyle } from "react-native";

export type HeartButtonProps = {
  onPress: () => void,
  isLarge?: boolean,
  customStyle: ViewStyle,
  isHearted: boolean,
};
