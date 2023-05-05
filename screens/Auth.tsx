import { StyleSheet } from "react-native";
import { PageContainer } from "../components/PageContainer";
import Input from "../components/Input";
import { Feather } from "@expo/vector-icons";

export const AuthScreen = () => {
  return (
    <PageContainer>
      <Input label="First name" icon="user" iconFamily={Feather} />
      <Input label="Last name" icon="user" iconFamily={Feather} />
      <Input label="Email" icon="mail" iconFamily={Feather} />
      <Input label="Password" icon="lock" iconFamily={Feather} />
    </PageContainer>
  );
};

const styles = StyleSheet.create({});
