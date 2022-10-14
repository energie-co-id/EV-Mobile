import React, {useEffect} from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import tw from 'twrnc';
import AsyncStorage from '@react-native-async-storage/async-storage';
const image = require('../../assets/ss.jpg');
// const jwt_decode = require('jwt-decode');

function SpleshSreen(props) {
  useEffect(() => {
    cekToken();
  }, []);
  const cekToken = async () => {
    const token = await AsyncStorage.getItem('token');
    setTimeout(async () => {
      if (token) {
        // const decoded = jwt_decode(token);
        // if (decoded.exp < Date.now() / 1000) {
        //   await AsyncStorage.clear();
        //   props.navigation.replace('AuthScreen');
        // } else {
          props.navigation.replace('AppScreen', {screen: 'HomeNavigator'});
        // }
      } else {
        props.navigation.replace('AuthScreen');
      }
    }, 3000);
  };
  return (
    <View style={[tw`flex-1`]}>
      <ImageBackground source={image} resizeMode="cover" style={[tw`flex-1 justify-center items-center`]}>
        <View style={[tw`flex-row`]}>
          <View>
            <Text style={[tw`text-black text-4xl mt-25 ml-3 font-mono`]}> Logo </Text>
          </View>
          <View>
            <Image source={require('../../assets/logo.png')} style={tw`w-20 h-20 p-5 mt-17`}/>
          </View>
        </View>
        <View>
          <Text style={[tw`text-black text-2xl m-15 font-mono`]}> Welcome ^_^ </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

export default SpleshSreen;
