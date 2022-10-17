import React from 'react';
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
  // RefreshControl,
  // ActivityIndicator,
  // FlatList,
} from 'react-native';

import tw from 'twrnc';

function History(props) {

  return (
    <ScrollView>
      <View style={[tw`flex flex-row`]}>
        <Text style={[tw `text-3xl text-gray-500 text-center font-bold ml-27 mt-11`]}> History </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}><Image source={require('../../assets/logo.png')}
         style={[tw`w-20 h-20 ml-11 mt-5 mb-5`]}/></TouchableOpacity>
      </View> 

      <View style={[tw`h-227 bg-white`]}>
      <View style={[tw`rounded-xl bg-gray-200 mt-5 ml-5 mb-1 w-81 h-19`]}>

      </View>

      <View style={[tw`rounded-xl bg-gray-200 mt-2 ml-5 mb-1 w-81 h-19`]}>

      </View>

     <View style={[tw`rounded-xl bg-gray-200 mt-2 ml-5 mb-1 w-81 h-19`]}>

      </View>

      <View style={[tw`rounded-xl bg-gray-200 mt-2 ml-5 mb-1 w-81 h-19`]}>

      </View>

      <View style={[tw`rounded-xl bg-gray-200 mt-2 ml-5 mb-1 w-81 h-19`]}>

      </View>

      <View style={[tw`rounded-xl bg-gray-200 mt-2 ml-5 mb-1 w-81 h-19`]}>

      </View>

      <View style={[tw`rounded-xl bg-gray-200 mt-2 ml-5 mb-1 w-81 h-19`]}>

      </View>

      <View style={[tw`rounded-xl bg-gray-200 mt-2 ml-5 mb-1 w-81 h-19`]}>

      </View>

      <View style={[tw`rounded-xl bg-gray-200 mt-2 ml-5 mb-1 w-81 h-19`]}>

      </View>

      <View style={[tw`rounded-xl bg-gray-200 mt-2 ml-5 mb-1 w-81 h-19`]}>

      </View>

      </View>
    </ScrollView>
  );
}


export default (History);
