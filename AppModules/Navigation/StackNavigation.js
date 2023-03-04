import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../Screens/AuthScreen/LoginScreen';
import OTPScreen from '../Screens/AuthScreen/OTPScreen';
import HomeScreen from '../Screens/MainScreen/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ExpenseScreen from '../Screens/MainScreen/ExpenseScreen';
import SettingsScreen from '../Screens/MainScreen/SettingsScreen';
import ReportScreen from '../Screens/MainScreen/ReportScreen';

const Stack = createNativeStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Login Screen" component={LoginScreen} />
      <Stack.Screen name="Otp Screen" component={OTPScreen} />
    </Stack.Navigator>
  );
};
// const HomeStack = () => {
//   return (
//     <Stack.Navigator initialRouteName="Home">
//       <Stack.Screen name="homeScreen" component={HomeScreen} />
//     </Stack.Navigator>
//   );
// };

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
  return (
    <NavigationContainer>
      <LoginStack />
      {/*<HomeStack />*/}
      {/*<HomeTabStack />*/}
    </NavigationContainer>
  );
};
export default Navigation;
