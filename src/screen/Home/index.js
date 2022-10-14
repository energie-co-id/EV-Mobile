import React from 'react';
import Main from '../../component/main';
// import {useDispatch} from 'react-redux';
// import {getAllMovie} from '../../store/action/movie';
// import {REACT_APP_LINK_CLOUDINARY} from '@env';
import {
  View,
  Text,
  // StyleSheet,
  TouchableOpacity,
  // Button,
  ScrollView,
  // TextInput,
  Image,
  ImageBackground,
  // RefreshControl,
  // ActivityIndicator,
  // FlatList,
} from 'react-native';

import tw from 'twrnc';

function Home(props) {

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
     <View style={[tw`flex flex-row`]}>
     <TouchableOpacity style={[tw`rounded-2xl bg-gray-300 h-20 w-50 mt-5 ml-5`]}></TouchableOpacity>
     <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}><Image source={require('../../assets/logo.png')}
         style={[tw`w-20 h-20 ml-9 mt-5`]}/></TouchableOpacity>
     </View>
      <Text style={[tw `text-gray-500 text-2xl ml-7 mt-1.1 font-mono font-bold`]}> EV Charging Hyundai </Text>
      <Text style={[tw `text-gray-500 text-md ml-7 mb-5`]}> New Thinking, New Posibilities </Text>
      <Main/>
      
    </ScrollView>
  );
}


export default (Home);
