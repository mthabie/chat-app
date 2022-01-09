import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// import routes from "./routes";
// import useNotifications from "../hooks/useNotifications";
import colors from "../config/colors";
import {
  AccountScreen,
  ChannelsScreen,
  GroepChatScreen,
  PrivateChatScreen,
  SearchScreen,
} from "../screens";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  // You can import Ionicons from @expo/vector-icons/Ionicons if you use Expo or
  // react-native-vector-icons/Ionicons otherwise.
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTitleStyle: { color: colors.white },
        headerTintColor: colors.white,

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "HOME") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "DMs") {
            iconName = focused ? "wechat" : "wechat";
          } else if (route.name === "MENTION") {
            iconName = focused ? "at" : "at";
          } else if (route.name === "SEARCH") {
            iconName = focused ? "search-web" : "search-web";
          } else if (route.name === "YOU") {
            iconName = focused ? "account" : "account";
          }
          // You can return any component that you like here!
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.medium,
      })}
    >
      <Tab.Screen name="HOME" component={ChannelsScreen} />
      <Tab.Screen name="DMs" component={PrivateChatScreen} />
      <Tab.Screen name="MENTION" component={GroepChatScreen} />
      <Tab.Screen name="SEARCH" component={SearchScreen} />
      <Tab.Screen name="YOU" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
