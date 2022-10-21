import React, {useEffect, useState} from 'react';
// import axios from '../../utils/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
// import {redux_login} from '../../store/action/auth';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  ScrollView,
  TextInput,
  Image,
  ActivityIndicator,
} from 'react-native';

import tw from 'twrnc';

function Login(props) {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const auth = useSelector(state => state.auth);

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    auth;
    setForm({email: mail, password: password});
  }, [mail, password]);

  const handleLogin = async e => {
    try {
      e.preventDefault();
      console.log(form);
      setLoading(true);
      if (mail === '') {
        alert  ('Email address is required');
      } else if (password === '') {
        alert('Password is required');
      } else  {
        // const result = await dispatch(redux_login(form));
        // console.log(result.value.data);
        // await AsyncStorage.setItem('token', result.value.data.data.token);
        // await AsyncStorage.setItem(
        //   'refreshToken',
        //   result.value.data.data.refreshToken,
        // );
        // await AsyncStorage.setItem('id', result.value.data.data.id);
        alert ("Welcome to Hyundai EV Mobile") ;
        props.navigation.navigate('AppScreen', {screen: 'Home'});
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      // alert(error.response.data.msg);
      console.log(error.response);
    }
  };

  const handleRegister = () => {
    props.navigation.navigate('Register');
  };

  const handlePassword = () => {
    props.navigation.navigate('ResetPassword');
  };
  return (
    <ScrollView style={[tw`m-8.8`]} showsVerticalScrollIndicator={false}>
    <View>
     <Text style={[tw`text-black text-center text-4xl font-mono font-bold mt-10`]}>Hai, Electrizen!</Text>
     <Text style={[tw`text-gray-400 text-center text-base font-mono mt-1`]}>
     Selamat Datang di Hyundai EV Charger Mobile.
     </Text>
   </View>
   <View>
     <View>
       <Image
         source={require('../../assets/logo.png')}
         style={[tw`w-full h-70 justify-center items-center`]}
       />
     </View>
   </View>
   <View>
     <View>
       <TextInput
         placeholder="Email Address"
         autoComplete="email"
         keyboardType="email-address"
         style={[tw`border-2 border-gray-100 bg-white text-gray-700 font-mono font-bold mt-1 pl-5`]}
         onChangeText={newText => setMail(newText)}
         defaultValue={mail}
       />
     </View>
     <View>
       <TextInput
         placeholder="Password"
         autoComplete="password"
         secureTextEntry={true}
         style={[tw`border-2 border-gray-100 bg-white text-gray-700 font-mono font-bold mt-2 pl-5`]}
         onChangeText={newText => setPassword(newText)}
         defaultValue={password}
       />
     </View>
    <View style={[tw`mt-1`]}> 
    {/* <Text>Forgot your password? </Text>  */}
     <TouchableOpacity onPress={handlePassword}>
       <Text style={[tw`text-gray-700 text-center font-mono`]}> {'  '}Forgot Password</Text>
     </TouchableOpacity> 
   </View>
   </View>
   <View style={[tw`border-gray-500 rounded-xl bg-gray-500 p-1 font-mono font-semibold mt-3 mb-1`]}>
     {loading === true ? (
       <ActivityIndicator size="large" color="white" />
     ) : (
       <Button title="Login" color={'#6B7280'} onPress={handleLogin} />
     )}
   </View>
   <View style={[tw`justify-center flex-row`]}>
     <Text style={[tw`font-mono text-gray-500 mr-1`]}>Don’t have an account?</Text>
     <TouchableOpacity onPress={handleRegister}>
       <Text style={[tw`text-gray-700 font-mono`]}>Sign Up</Text>
     </TouchableOpacity>
   </View>
 </ScrollView>
);
}

export default Login;
