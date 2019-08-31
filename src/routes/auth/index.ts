import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Carousel from '../../scenes/auth/Carousel';
import Splash from '../../scenes/Splash';
import Login from '../../scenes/auth/Login';
import SignUp from '../../scenes/auth/SignUp';
import Start from '../../scenes/Start';
import Main from '../main/index';

const AuthNavigator = createStackNavigator(
  {
    Splash,
    Carousel,
    Login,
    SignUp,
    Start,
    Main: {
      screen: Main,
    },
  },
  {
    initialRouteName: 'Splash',
  },
);

const Auth = createAppContainer(AuthNavigator);

export default Auth;
