import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from '../src/screens/Login';
import Posts from '../src/screens/Posts';

const Routes = createStackNavigator({
  Posts: {
    screen: Posts,
  },
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
  
})

export default createAppContainer(Routes);
