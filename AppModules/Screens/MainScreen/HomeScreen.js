import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';
import {isUserLoggedIn} from '../../Redux/Actions';
import {useDispatch} from 'react-redux';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const handleLogOut = () => {
    dispatch(isUserLoggedIn(false));
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.secondaryContainer,
      }}>
      <TouchableOpacity onPress={handleLogOut}>
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};
export default HomeScreen;
