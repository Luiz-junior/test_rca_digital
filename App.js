import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from './src/screens/Login';
import Home from './src/screens/Home';
import NewAccount from './src/screens/NewAccount';
import Posts from './src/screens/Posts';


const AppNavigator = createStackNavigator({
  NewAccount: {
    screen: NewAccount,
    navigationOptions: {
      header: null,
    },
  },
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
})

export default createAppContainer(AppNavigator);
