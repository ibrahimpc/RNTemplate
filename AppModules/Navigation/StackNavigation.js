import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../Screens/AuthScreen/LoginScreen';
import OTPScreen from '../Screens/AuthScreen/OTPScreen';
import HomeScreen from '../Screens/MainScreen/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ExpenseScreen from '../Screens/MainScreen/ExpenseScreen';
import SettingsScreen from '../Screens/MainScreen/SettingsScreen';
import ReportScreen from '../Screens/MainScreen/ReportScreen';
import {useSelector} from 'react-redux';
import {adaptNavigationTheme} from 'react-native-paper';

const {LightTheme} = adaptNavigationTheme({reactNavigationLight: DefaultTheme});

const Stack = createNativeStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Login Screen" component={LoginScreen} />
      <Stack.Screen name="OTP Screen" component={OTPScreen} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const HomeTabStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Sales" component={HomeScreen} />
      <Tab.Screen name="Expense" component={ExpenseScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Report" component={ReportScreen} />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  const userLoggedIn = useSelector(state => state?.isUserLoggedIn);
  return (
    <NavigationContainer theme={LightTheme}>
      {!userLoggedIn ? <LoginStack /> : <HomeTabStack />}
    </NavigationContainer>
  );
};
export default Navigation;
