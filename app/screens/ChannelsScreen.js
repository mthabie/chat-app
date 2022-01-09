import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Logout from "../components/Logout";

function ChannelsScreen(props) {
  return (
    <View style={styles.container}>
      <Logout />
      <Text>ChannelsScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ChannelsScreen;
