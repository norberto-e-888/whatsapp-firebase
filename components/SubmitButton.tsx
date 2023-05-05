import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Component } from "../types/shared";
import { GRAY, LIGHT_GRAY, PRIMARY } from "../constants/colors";

export const SubmitButton: Component<{
  disabled?: boolean;
  color?: string;
  title: string;
  onPress?: () => void;
}> = (props) => {
  const enabledBgColor = props.color || PRIMARY;
  const bgColor = props.disabled ? LIGHT_GRAY : enabledBgColor;

  return (
    <TouchableOpacity
      style={{ ...styles.button, backgroundColor: bgColor, ...props?.style }}
      onPress={props.disabled ? undefined : props.onPress}
    >
      <Text
        style={{
          color: props.disabled ? GRAY : "white",
        }}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: PRIMARY,
    borderRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
