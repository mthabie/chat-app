import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import colors from "../config/colors";

const globalNavScreenOptions = {
  headerStyle: { backgroundColor: colors.primary },
  headerTitleStyle: { color: colors.white },
  headerTintColor: colors.white,
};

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator screenOptions={globalNavScreenOptions}>
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
