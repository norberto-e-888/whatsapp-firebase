import React from "react";
import { StyleSheet } from "react-native";
import { Component } from "../types/shared";
import { SafeAreaView } from "react-native-safe-area-context";

export const PageContainer: Component = (props) => {
  return (
    <SafeAreaView style={{ ...styles.container, ...props?.style }}>
      {props.children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: "white",
  },
});
