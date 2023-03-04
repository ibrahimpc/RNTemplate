import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const ExpenseScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={() => navigation.navigate('otpScreen')}>
        <Text>Expense screen</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ExpenseScreen;
