import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {redux_resetPassword} from '../../store/action/auth';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  TextInput,
  Image,
  ActivityIndicator,
} from 'react-native';

import tw from 'twrnc';

function ResetPassword(props) {
  const [mail, setMail] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const auth = useSelector(state => state.auth);

  const [form, setForm] = useState({
    email: '',
  });

  useEffect(() => {
    setForm({
      email: mail,
    });
  }, [mail]);

  const handlePassword = async e => {
    try {
      console.log(form);
      setLoading(true);
      if (form.email === '') {
        alert('write your email');
      } else {
        const result = await dispatch(redux_resetPassword(form));
        alert(result.value.data.msg);
        props.navigation.navigate('ForgotPassword');
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert(error.response.data.msg);
      console.log(error.response);
    }
  };
  return (
    <ScrollView style={[tw`m-8.8`]} showsVerticalScrollIndicator={false}>
      <View>
        <Text style={[tw`text-black text-left text-4xl font-mono font-bold mt-7`]}> Forgot Password</Text>
        <Text style={[tw`text-gray-400 text-left text-base font-mono mt-1`]}>We'll send a link to your email shortly</Text>
      </View>
      <View style={reset.formulir}>
        <View>
          <TextInput
            placeholder="Write your Email Address"
            autoComplete="email"
            keyboardType="email-address"
            style={[tw`border-2 border-gray-100 bg-white text-gray-700 font-mono font-bold mt-1 pl-5`]}
            onChangeText={newText => setMail(newText)}
            defaultValue={mail}
          />
        </View>
      </View>
      <View style={[tw`border-2 border-gray-500 rounded-lg bg-white font-mono font-semibold mt-3`]}>
        {loading === true ? (
          <ActivityIndicator size="large" color="white" />
        ) : (
          <Button title="Send" color={'#676767'} onPress={handlePassword} />
        )}
      </View>
    </ScrollView>
  );
}

const reset = StyleSheet.create({
  container: {
    margin: 25,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 30,
    marginTop: 30,
  },
  logo: {
    fontSize: 35,
    color: '#5F2EEA',
    fontWeight: '600',
    padding: 5,
  },
  title: {
    fontSize: 30,
    color: 'black',
    fontWeight: '500',
  },
  image: {width: 50, height: 50, top: 6, padding: 5},
  tag: {fontSize: 15, color: '#8692A6', fontWeight: '300', marginTop: 5},
  formulir: {marginTop: 20},
  name: {fontSize: 15, marginTop: 25},
  form: {
    backgroundColor: '#FFFFFF',
    borderColor: '#8692A6',
    borderRadius: 8,
    borderWidth: 1,
    padding: 15,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#5F2EEA',
    color: 'white',
    borderRadius: 10,
    marginTop: 40,
    marginBottom: 15,
    padding: 5,
  },
});

export default ResetPassword;
