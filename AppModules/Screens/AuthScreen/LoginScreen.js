import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
import {getSampleData, isUserLoggedIn} from '../../Redux/Actions';
import {useDispatch} from 'react-redux';
import {authStyles} from './AuthStyles';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({navigation}) => {
  const [phoneNo, setPhoneNo] = useState('');
  const [disableGoogleSignIn, setDisableGoogleSignIn] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    GoogleSignin.configure();
  }, []);
  useEffect(() => {
    dispatch(getSampleData());
  }, [dispatch]);

  const signIn = async () => {
    try {
      setDisableGoogleSignIn(true);
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      if (userInfo) dispatch(isUserLoggedIn(true));
    } catch (error) {
      setDisableGoogleSignIn(false);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.warn('Login Cancelled')
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.warn('Signing in progress')
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.warn('Play Service not available')
      } else {
        // some other error happened
        console.warn('Oops something went wrong')
      }
    }
  };
  const signInWithPhoneNumber = async () => {
    const confirm = await auth().signInWithPhoneNumber(`+91 ${phoneNo}`);
    confirm && navigation.navigate('OTP Screen', {confirm});
    console.log({confconfirmirmation});
  };
  return (
    <SafeAreaView style={authStyles.safeAreaContainer}>
      <KeyboardAvoidingView style={authStyles.mainContainer} behavior="height">
        <TextInput
          style={authStyles.textInput}
          placeholder={'Enter Your Mobile Number'}
          value={phoneNo}
          onChangeText={text => setPhoneNo(text)}
        />
        <TouchableOpacity
          onPress={signInWithPhoneNumber}
          style={authStyles.submitButton}>
          <Text style={authStyles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
        <Text>or</Text>
        <GoogleSigninButton
          style={{width: 192, height: 48}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={signIn}
          disabled={disableGoogleSignIn}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default LoginScreen;