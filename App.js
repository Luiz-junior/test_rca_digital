import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Posts from './src/screens/Posts';


const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
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
