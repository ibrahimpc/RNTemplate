import React from 'react';
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
const OTPScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const handleVerifyOtp = () => {
    dispatch(isUserLoggedIn(true));
  };
  return (
    <SafeAreaView style={authStyles.safeAreaContainer}>
      <KeyboardAvoidingView style={authStyles.mainContainer} behavior="height">
        <TextInput style={authStyles.textInput} placeholder={'Enter OTP'} />
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
