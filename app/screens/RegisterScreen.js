import React, { useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Yup from "yup";
import { ActivityIndicator, Screen } from "../components";
import { AppForm, AppFormField, SubmitButton } from "../components/form";

import { collection, addDoc, setDoc, doc } from "firebase/firestore";

import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen({ navigation }) {
  // const getRandomProfilePic = () => Faker.image.avatar();
  const getRandomProfilePic = async () => {
    const res = await fetch("https://randomuser.me/api");
    const data = await res.json();
    console.log(data);
    return data.results[0].picture.large;
  };

  console.log(getRandomProfilePic());

  const handleSubmit = async ({ email, password, username }) => {
    try {
      const authUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await setDoc(doc(db, "users", authUser.user.uid), {
        user_id: authUser.user.uid,
        displayName: username,
        email: authUser.user.email,
        photoURL: await getRandomProfilePic(),
      });
      console.log("Firebase created the user successfully");
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <>
      <ActivityIndicator />
      <Screen style={styles.container}>
        <AppForm
          initialValues={{ username: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <AppFormField
            autoCorrect={false}
            icon="account"
            name="username"
            placeholder="Username"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Register" />
        </AppForm>
        <View>
          <Text>Already have an account</Text>
          <TouchableOpacity onPress={() => navigation.push("Login")}>
            <Text> Sign in</Text>
          </TouchableOpacity>
        </View>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
