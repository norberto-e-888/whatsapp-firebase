import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { PageContainer } from "../components/PageContainer";
import Input from "../components/Input";
import { Feather } from "@expo/vector-icons";
import { SubmitButton } from "../components/SubmitButton";
import { BLUE } from "../constants/colors";
import { useState } from "react";

export const AuthScreen = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <PageContainer>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === "ios" ? "height" : undefined}
      >
        {isSignUp && (
          <>
            <Input label="First name" icon="user" iconFamily={Feather} />
            <Input label="Last name" icon="user" iconFamily={Feather} />
          </>
        )}

        <Input label="Email" icon="mail" iconFamily={Feather} />
        <Input label="Password" icon="lock" iconFamily={Feather} />

        <SubmitButton
          style={{ marginTop: 8 }}
          title={isSignUp ? "Sign Up" : "Sign In"}
        />

        <TouchableOpacity
          style={styles.linkContainer}
          onPress={() => {
            setIsSignUp((current) => !current);
          }}
        >
          <Text style={styles.link}>
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  linkContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
  },
  link: {
    color: BLUE,
    fontFamily: "medium",
    letterSpacing: 0.3,
  },
  keyboardAvoidingView: {
    flex: 1,
    justifyContent: "center",
  },
});
