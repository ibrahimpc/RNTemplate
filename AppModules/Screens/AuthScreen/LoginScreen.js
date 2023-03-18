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
      console.log(userInfo, '111');
    } catch (error) {
      setDisableGoogleSignIn(false);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
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
        {/*<TouchableOpacity onPress={signIn}>*/}
        {/*  <Text>google sign in</Text>*/}
        {/*</TouchableOpacity>*/}
        <Text>or</Text>
        <GoogleSigninButton
          style={{width: 192, height: 48}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={signIn}
          disabled={disableGoogleSignIn}
        />
        {/*<TextInput*/}
        {/*    value={phoneNo}*/}
        {/*    onChangeText={text => setPhoneNo(text)}*/}
        {/*    style={{width: 250, height: 40, borderWidth: 1, padding: 10}}*/}
        {/*    placeholder={'Phone No'}*/}
        {/*/>*/}
        {/*<TouchableOpacity*/}
        {/*    style={{*/}
        {/*      height: 40,*/}
        {/*      backgroundColor: 'blue',*/}
        {/*      alignItems: 'center',*/}
        {/*      justifyContent: 'center',*/}
        {/*      marginTop: 5,*/}
        {/*      borderRadius: 5,*/}
        {/*    }}*/}
        {/*    onPress={signInWithPhoneNumber}>*/}
        {/*  <Text style={{color: 'white', fontSize:10}}>Get OTP</Text>*/}
        {/*</TouchableOpacity>*/}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default LoginScreen;

//
//
// import React, {useEffect, useState} from 'react';
// import { Button, TextInput } from 'react-native';
// import auth from '@react-native-firebase/auth';
//
// function LoginScreen() {
//   // If null, no SMS has been sent
//   const [confirm, setConfirm] = useState(null);
//
//   // verification code (OTP - One-Time-Passcode)
//   const [code, setCode] = useState('');
//
//   // Handle login
//   function onAuthStateChanged(user) {
//     if (user) {
//       // Some Android devices can automatically process the verification code (OTP) message, and the user would NOT need to enter the code.
//       // Actually, if he/she tries to enter it, he/she will get an error message because the code was already used in the background.
//       // In this function, make sure you hide the component(s) for entering the code and/or navigate away from this screen.
//       // It is also recommended to display a message to the user informing him/her that he/she has successfully logged in.
//     }
//   }
//
//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);
//
//   // Handle the button press
//   async function signInWithPhoneNumber(phoneNumber) {
//     const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
//     setConfirm(confirmation);
//   }
//
//   async function confirmCode() {
//     try {
//       await confirm.confirm(code);
//     } catch (error) {
//       console.log('Invalid code.');
//     }
//   }
//
//   if (!confirm) {
//     return (
//         <Button
//             title="Phone Number Sign In"
//             onPress={() => signInWithPhoneNumber('+91 7338942977')}
//         />
//     );
//   }
//
//   return (
//       <>
//         <TextInput value={code} onChangeText={text => setCode(text)} />
//         <Button title="Confirm Code" onPress={() => confirmCode()} />
//       </>
//   );
// }
// export default LoginScreen;
