import {
  Text,
  View,
  StyleSheet,
  Button,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  GestureResponderEvent,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { TabParamList } from "../types/navigation";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { BLUE, LIGHT_GRAY } from "../constants/colors";
import { useState } from "react";

const backgroundImage = require("../assets/images/droplet.jpeg");

type Props = BottomTabScreenProps<TabParamList, "Chat">;

export const ChatScreen = (props: Props) => {
  const [message, setMessage] = useState("");
  const handleSendMessage = (
    e:
      | GestureResponderEvent
      | NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => {
    e.preventDefault();
    console.log("Message sent", message);
    setMessage("");
  };

  return (
    <SafeAreaView edges={["bottom", "left", "right"]} style={styles.container}>
      <KeyboardAvoidingView
        style={styles.screen}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={100}
      >
        <ImageBackground
          source={backgroundImage}
          style={styles.backgroundImage}
        ></ImageBackground>

        <View style={styles.inputContainer}>
          <TouchableOpacity>
            <Feather name="plus" size={24} color={BLUE} />
          </TouchableOpacity>

          <TextInput
            style={styles.textBox}
            value={message}
            onChangeText={(value) => {
              setMessage(value);
            }}
            onSubmitEditing={handleSendMessage}
          />

          {message.length === 0 ? (
            <TouchableOpacity>
              <Feather name="camera" size={24} color={BLUE} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={handleSendMessage}>
              <Feather name="send" size={24} color={BLUE} />
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  backgroundImage: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 10,
    height: 50,
  },
  textBox: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: LIGHT_GRAY,
    marginRight: 16,
    marginLeft: 13, // the plus icon has more apparent margin
  },
  screen: {
    flex: 1,
  },
});
