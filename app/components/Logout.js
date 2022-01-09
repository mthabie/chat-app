import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { auth } from "../../firebase";
import colors from "../config/colors";

const signOut = async () => {
  try {
    await auth.signOut();
    console.log("Signout successful");
  } catch (error) {
    console.log(erorr);
  }
};

function Logout() {
  return (
    <TouchableOpacity style={styles.container} onPress={signOut}>
      <Text style={styles.text}>Log out</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "20%",
    backgroundColor: colors.secondary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 10,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default Logout;
