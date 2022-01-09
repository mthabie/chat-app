import React, { useState } from "react";
import * as Yup from "yup";
import { StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";
import { AppButton, AppTextInput, Screen } from "../components";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  ErrorMessage,
} from "../components/form";

import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen({ navigation }) {
  //const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    try {
      await signInWithEmailAndPassword(auth, email, password).then((data) => {
        console.log("Fire base login successful", data);
        // alert(auth.user.email);
      });
    } catch (error) {
      Alert.alert(
        "Login Error Msg",
        error.message + "\n\n What would you like to do next?",
        [
          { text: "Cancel", onPress: () => console.log("OK"), style: "cancel" },
          { text: "Register", onPress: () => navigation.push("Register") },
        ]
      );
    }
  };

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error="Invalid email and/or password."
          // visible={loginFailed}
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          name="email"
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          textContentType="password"
          secureTextEntry
        />
        <SubmitButton title="Login" />
      </AppForm>
      <View>
        <Text>Dant have an account</Text>
        <TouchableOpacity onPress={() => navigation.push("Register")}>
          <Text> Register</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default LoginScreen;
