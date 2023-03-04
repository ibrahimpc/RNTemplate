import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const ReportScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={() => navigation.navigate('otpScreen')}>
        <Text>Report screen</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ReportScreen;
