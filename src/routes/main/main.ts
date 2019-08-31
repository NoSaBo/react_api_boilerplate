import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../../scenes/Home';

const RecruitmentNavigator = createStackNavigator(
  {
    Home,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);
const Recruitment = createAppContainer(RecruitmentNavigator);

export default Recruitment;
