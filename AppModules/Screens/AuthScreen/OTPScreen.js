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
import {
  getHash,
  getOtp,
  removeListener,
  startOtpListener,
} from 'react-native-otp-verify';
const OTPScreen = ({navigation}) => {
  const [otp, setOtp] = useState(null);
  useEffect(() => {
    getHash()
      .then(hash => {
        // alert(hash);
        // console.log(hash);
        // use this hash in the message.
      })
      .catch(console.log);
    getOtp().then(() => {
      startOtpListener(message => {
        console.log(message);
        console.log(typeof message, 'type');
        if (message !== 'Timeout Error.') {

          try {
            const otp = /(\d{4})/g.exec(message)[1];
            setOtp(otp);
            console.log('otp success');
          } catch {
            alert('catch');
          }
        }
      });
      return () => removeListener();
    });
  }, []);
  const dispatch = useDispatch();

  const handleVerifyOtp = () => {
    dispatch(isUserLoggedIn(true));
  };
  return (
    <SafeAreaView style={authStyles.safeAreaContainer}>
      <KeyboardAvoidingView style={authStyles.mainContainer} behavior="height">
        <TextInput
          value={otp}
          style={authStyles.textInput}
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
