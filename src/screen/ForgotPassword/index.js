import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {redux_forgotPassword} from '../../store/action/auth';
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

function ForgotPassword(props) {
  // const router = useRouter();
  const [otp, setOtp] = useState();
  const [password, setPassword] = useState('');
  const [cPass, setCPass] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const auth = useSelector(state => state.auth);

  const [form, setForm] = useState({
    keyChangePassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  useEffect(() => {
    setForm({
      keyChangePassword: `${otp}`,
      newPassword: password,
      confirmPassword: cPass,
    });
  }, [cPass, otp, password]);

  const handleReset = async e => {
    try {
      console.log(form);
      setLoading(true);
      const result = await dispatch(redux_forgotPassword(form));
      setLoading(false);
      alert(result.value.data.msg);
      props.navigation.navigate('Login');
    } catch (error) {
      setLoading(false);
      alert(error.response.data.msg);
      console.log(error.response);
    }
  };

  return (
    <ScrollView style={[tw`m-10`]} showsVerticalScrollIndicator={false}>
      <View>
        <Text style={[tw`text-black text-left text-4xl font-mono font-bold mt-30`]}> Set Password</Text>
        <Text style={[tw`text-gray-500 text-left text-base font-mono mt-1 ml-2 mb-5`]}>Set your new password</Text>
      </View>
        <View>
          <TextInput
            placeholder="Cek your email and copas code hire"
            keyboardType="number-pad"
            maxLength={6}
            style={[tw`border-2 border-gray-100 bg-white text-gray-700 font-mono font-bold mt-2 pl-5`]}
            onChangeText={newText => setOtp(newText)}
            defaultValue={otp}
          />
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
            placeholder="Write your confirm password"
            autoComplete="password"
            secureTextEntry={true}
            style={[tw`border-2 border-gray-100 bg-white text-gray-700 font-mono font-bold mt-2 pl-5`]}
            onChangeText={newText => setCPass(newText)}
            defaultValue={cPass}
          />
        </View>
      </View>
      <View style={[tw`border-gray-500 rounded-xl bg-gray-500 p-1 font-mono font-semibold mt-3`]}>
        {loading === true ? (
          <ActivityIndicator size="large" color="white" />
        ) : (
          <Button title="Submit" color={'#6B7280'} onPress={handleReset} />
        )}
      </View>
    </ScrollView>
  );
}

export default ForgotPassword;
