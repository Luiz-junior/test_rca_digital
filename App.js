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
