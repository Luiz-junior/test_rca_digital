import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from './src/screens/Login';
import Posts from './src/screens/Posts';

const AppNavigator = createStackNavigator({
 
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
  Posts: {
    screen: Posts,
  },
  
})

export default createAppContainer(AppNavigator);



/* import React from 'react';
import { View, StyleSheet } from 'react-native';
import Routes from './src/routes';

const App = () => {
  return (
    <View style={styles.container}>
      <Routes />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Lato, sans-serif',
  }
});

export default App; */
