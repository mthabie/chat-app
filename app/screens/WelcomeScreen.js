import React from "react";
import { StyleSheet, Text, View, Avatar } from "react-native";
import { AppButton, Screen } from "../components";
import routes from "../navigation/routes";
// import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.tagline}>Chat with your friends</Text>
      </View>
      <AppButton
        title="Login"
        onPress={() => navigation.navigate(routes.LOGIN)}
      />
      <AppButton
        title="Register"
        onPress={() => navigation.navigate(routes.REGISTER)}
        color="secondary"
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  tagline: {
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
