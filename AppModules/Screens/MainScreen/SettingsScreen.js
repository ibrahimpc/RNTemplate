import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const SettingsScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={() => navigation.navigate('otpScreen')}>
        <Text>Setting screen</Text>
      </TouchableOpacity>
    </View>
  );
};
export default SettingsScreen;
