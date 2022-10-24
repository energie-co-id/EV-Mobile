import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {redux_resetPassword} from '../../store/action/auth';
import {
  View,
  Text,
  Button,
  ScrollView,
  TextInput,
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
    <ScrollView style={[tw`m-10`]} showsVerticalScrollIndicator={false}>
      <View>
        <Text style={[tw`text-black text-left text-4xl font-mono font-bold mt-30 ml-2`]}>Forgot{`\n`}Password</Text>
        <Text style={[tw`text-gray-500 text-left text-base font-mono mt-1 ml-2 mb-5`]}>We'll send a link to your email shortly</Text>
      </View>
      <View>
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
      <View style={[tw`border-gray-500 rounded-xl bg-gray-500 p-1 font-mono font-semibold mt-3`]}>
        {loading === true ? (
          <ActivityIndicator size="large" color="white" />
        ) : (
          <Button title="Send" color={'#6B7280'} onPress={() => props.navigation.navigate("ForgotPassword")} />
        )}
      </View>
    </ScrollView>
  );
}



export default ResetPassword;
