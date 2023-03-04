import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={() => navigation.navigate('otpScreen')}>
        <Text>Home screen</Text>
      </TouchableOpacity>
    </View>
  );
};
export default HomeScreen;
