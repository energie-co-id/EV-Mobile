import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {redux_register} from '../../store/action/auth';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import tw from 'twrnc';

function Register(props) {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const auth = useSelector(state => state.auth);

  const [form, setForm] = useState({
    email: '',
    password: '',
    repeatPassword:'',
  });

  useEffect(() => {
    setForm({
      email: mail,
      password: password,
      repeatPassword: repeatPassword,
    });
  }, [mail, password, repeatPassword]);

  const handleRegister = async e => {
    try {
      console.log(form);
      setLoading(true);
      if (form.email === '') {
        alert('Email is required');
      } else if (form.password === '') {
        alert('Password is required');
      } else if (form.repeatPassword === '') {
        alert('You need to Repeat your password is required');
      } else {
        const result = await dispatch(redux_register(form));
        alert(result.value.data.msg);
        props.navigation.navigate('Login');
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert(error.response.data.msg);
      console.log(error.response);
    }
  };

  const handleLogin = () => {
    props.navigation.navigate('Login');
  };
  return (
    <ScrollView style={[tw`m-8.8`]} showsVerticalScrollIndicator={false}>
        <View>
        <Text style={[tw`text-black text-center text-4xl font-mono font-bold mt-5`]}> Buat Akun Baru </Text>
        </View>
        <View>
          <Image
            source={require('../../assets/logo.png')}
            style={[tw`w-full h-70 justify-center items-center`]}
          />
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
            placeholder="Write your password"
            autoComplete="password"
            secureTextEntry={true}
            style={[tw`border-2 border-gray-100 bg-white text-gray-700 font-mono font-bold mt-2 pl-5`]}
            onChangeText={newText => setPassword(newText)}
            defaultValue={password}
          />
        </View>
        <View>
          <TextInput
            placeholder="Repeat your password"
            autoComplete="password"
            secureTextEntry={true}
            style={[tw`border-2 border-gray-100 bg-white text-gray-700 font-mono font-bold mt-2 pl-5`]}
            onChangeText={newText => setRepeatPassword(newText)}
            defaultValue={password}
          />
        </View>
        <View>
        <Text style={[tw`text-gray-400 text-justify font-mono mt-2 mb-1 space-y-4`]}> By registering, you confirm that you accept our Terms of Use and Privacy Policy </Text>
        </View>
      </View>
      <View style={[tw`border-2 border-gray-500 rounded-lg bg-white font-mono font-semibold mt-3`]}>
        {loading === true ? (
          <ActivityIndicator size="large" color="white" />
        ) : (
          <Button title="REGISTER" color={'#676767'} onPress={handleRegister} />
        )}
      </View>
      <View style={[tw`justify-center flex-row`]}>
        <Text style={[tw`font-mono`]}>Already have an account?</Text>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={[tw`text-gray-400 font-mono`]}> {'  '}Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default Register;
