import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';

import WelcomeScreen from '../screens/WelcomeScreen'
const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: WelcomeScreen,
            navigationOptions: { title: 'Home' }
        },
        Details: {
            screen: HomeScreen,
            navigationOptions: { title: 'Details' }
        }
    },
    {
        initialRouteName: "WelcomeScreen"
    }
);

export default AppNavigator;