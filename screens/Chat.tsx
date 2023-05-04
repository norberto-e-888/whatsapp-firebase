import { Text, View, StyleSheet, Button } from "react-native";
import { TabParamList } from "../types/navigation";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

type Props = BottomTabScreenProps<TabParamList, "Chat">;

export const ChatScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Chat {props.route.params.chatId}</Text>
      <Button
        title="Go to settings"
        onPress={() => {
          props.navigation.navigate("ChatSettings", {
            chatId: props.route.params.chatId,
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
