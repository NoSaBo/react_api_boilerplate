import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import {Dimensions} from 'react-native';
import Main from './main';
// import { SideMenu } from "../../components/menu";

const MainNavigator = createDrawerNavigator(
  {
    Main,
  },
  {
    initialRouteName: 'Main',
    // contentComponent: SideMenu,
    drawerType: 'slide',
    overlayColor: 'transparent',
    drawerWidth: Dimensions.get('window').width - 50,
  },
);

const MainNav = createStackNavigator(
  {
    MainNavigator: {
      screen: MainNavigator,
    },
  },
  {
    initialRouteName: 'MainNavigator',
    transparentCard: true,
    mode: 'modal',
    headerMode: 'none',
    cardStyle: {
      backgroundColor: 'transparent',
      opacity: 1,
    },
  },
);

const MainRoute = createAppContainer(MainNav);
export default MainRoute;
