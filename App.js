import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Login from './src/screens/Login';

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
})

export default createAppContainer(AppNavigator);
