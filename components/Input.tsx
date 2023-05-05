import { StyleSheet, Text, TextInput, View } from "react-native";
import { GRAY, NEARLY_BLACK, NEARLY_WHITE } from "../constants/colors";
import { Component } from "../types/shared";
import { Icon } from "@expo/vector-icons/build/createIconSet";

const Input: Component<{
  label: string;
  icon?: string;
  iconSize?: number;
  errorText?: string;
  iconFamily: Icon<any, any>;
}> = ({ ...props }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.inputContainer}>
        {props.icon && (
          <props.iconFamily
            name={props.icon as never}
            size={props.iconSize || 24}
            color="black"
            style={styles.icon}
          />
        )}
        <TextInput style={styles.input} />
      </View>
      {props.errorText && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{props.errorText}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  label: {
    marginVertical: 8,
    fontFamily: "bold",
    letterSpacing: 0.3,
    color: NEARLY_BLACK,
  },
  inputContainer: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 2,
    backgroundColor: NEARLY_WHITE,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
    color: GRAY,
  },
  input: {
    color: NEARLY_BLACK,
    flex: 1,
    fontFamily: "regular",
    letterSpacing: 0.3,
    paddingTop: 0,
  },
  errorContainer: {
    marginVertical: 5,
  },
  errorText: {
    color: "red",
    fontSize: 13,
    fontFamily: "regular",
    letterSpacing: 0.3,
  },
});

export default Input;
