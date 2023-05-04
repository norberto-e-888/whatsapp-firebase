import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { Text, View, StyleSheet, Button } from "react-native";
import { TabParamList } from "../types/navigation";

type Props = BottomTabScreenProps<TabParamList, "ChatList">;

export const ChatListScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Chat List</Text>
      <Button
        title="Go to chat settings"
        onPress={() => {
          props.navigation.navigate("ChatSettings", { chatId: "1" });
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
