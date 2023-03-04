import React, {useEffect} from 'react';
import {
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
import {getSampleData} from '../../Redux/Actions';
import {useDispatch} from 'react-redux';
import {authStyles} from './AuthStyles';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSampleData());
  }, [dispatch]);
  return (
    <SafeAreaView style={authStyles.safeAreaContainer}>
      <KeyboardAvoidingView style={authStyles.mainContainer} behavior="height">
        <TextInput
          style={authStyles.textInput}
          placeholder={'Enter Your Mobile Number'}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('OTP Screen')}
          style={authStyles.submitButton}>
          <Text style={authStyles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default LoginScreen;
