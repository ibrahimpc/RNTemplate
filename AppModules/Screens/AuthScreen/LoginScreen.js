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
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSampleData());
  }, [dispatch]);
  useEffect(() => {
    GoogleSignin.configure();
  }, []);
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
    } catch (error) {
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
        <TouchableOpacity onPress={signIn}>
          <Text>google signin </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default LoginScreen;
// import React from 'react';
// import {View, Text} from 'react-native';
// import {createSlice, configureStore} from '@reduxjs/toolkit';
// import {useSelector} from 'react-redux';
// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: {
//     value: 0,
//   },
//   reducers: {
//     increment: state => (state.value += 1),
//     decrement: state => (state.value -= 1),
//   },
// });
// export const {increment, decrement} = counterSlice.actions;
// // export const { incremented, decremented } = counterSlice.actions
//
// const store = configureStore({
//   reducer: counterSlice.reducer,
// });
// // store.dispatch(increment());
// // {value: 1}
// // store.dispatch(increment());
// // {value: 2}
// // store.dispatch(decrement());
// // {value: 1}
// const LoginScreen = () => {
//   const count = useSelector(state => state);
//   console.log(count);
//   return (
//     <View>
//       <Text>hi</Text>
//       {/*<Text>{count}</Text>*/}
//     </View>
//   );
// };
// export default LoginScreen;
