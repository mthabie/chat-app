import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator, AuthNavigator } from "./app/navigation";
import React, { useEffect, useState } from "react";

import { auth } from "./firebase";
import { connectFirestoreEmulator } from "firebase/firestore";

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const restoreUser = (user) => {
    user ? setCurrentUser(user) : setCurrentUser(null);
  };

  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => restoreUser(user));
  // }, []);

  useEffect(() => auth.onAuthStateChanged((user) => restoreUser(user)), []);

  return (
    <NavigationContainer>
      {currentUser ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
