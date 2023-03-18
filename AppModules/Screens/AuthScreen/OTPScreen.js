import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {isUserLoggedIn} from '../../Redux/Actions';
import {authStyles} from './AuthStyles';
const OTPScreen = ({route}) => {
  const {confirm} = route.params;
  const [otp, setOtp] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(confirm);
  });
  const handleVerifyOtp = async () => {
    try {
      const response = await confirm.confirm(otp);
      if (response) {
        console.log(response, 'OTP Verified');
        dispatch(isUserLoggedIn(true));
      }
      console.log(response, 'response');
    } catch (error) {
      console.log('Invalid code.', error);
    }
  };
  return (
    <SafeAreaView style={authStyles.safeAreaContainer}>
      <KeyboardAvoidingView style={authStyles.mainContainer} behavior="height">
        <TextInput
          style={authStyles.textInput}
          value={otp}
          onChangeText={text => setOtp(text)}
          placeholder={'Enter OTP'}
        />
        <TouchableOpacity
          onPress={handleVerifyOtp}
          style={authStyles.submitButton}>
          <Text style={authStyles.submitButtonText}>Submit OTP</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default OTPScreen;
