import React from "react";
import {Text, View, Platform} from "react-native";
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {createStackNavigator} from "react-navigation-stack";
import HomeScreen from "../HomeScreen";
import Contacts from "../Modules/Contacts/Contacts";
import DoctorsFormScreen from "../Modules/Doctors/DoctorsFormScreen";
import DoctorsListScreen from "../Modules/Doctors/DoctorsListScreen";
import LocationFormScreen from "../Modules/Locations/LocationScreen";
import DoctorsProfilecreen from "../Modules/Doctors/DoctorsProfileScreen";



const config = Platform.select({
  web: {headerMode: "screen"},
  default: {},
});
const HomeStack = createStackNavigator(
  {
    Home:HomeScreen,
    LocationForm:LocationFormScreen,
    DocsForm:DoctorsFormScreen,
    DocsList:DoctorsListScreen,
    DocProfile:DoctorsProfilecreen
  },
  {
    initialRouteName: "Home",
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#073664",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    },
  }
);

const ContactsStack = createStackNavigator({
  Contacts,
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
};

ContactsStack.navigationOptions = {
  tabBarLabel: "Saved Contacts",
};

const TabNavigator = createBottomTabNavigator({
  HomeStack,
  ContactsStack,
});

export default createAppContainer(TabNavigator);
