import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {getSampleData} from '../../Redux/Actions';
import {useDispatch} from 'react-redux';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSampleData());
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={() => navigation.navigate('Otp Screen')}>
        <Text>login screen</Text>
      </TouchableOpacity>
    </View>
  );
};
export default LoginScreen;
