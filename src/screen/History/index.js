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
        <Text style={[tw `text-3xl text-gray-700 text-center  font-bold ml-25 mt-9`]}> History </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}><Image source={require('../../assets/logo.png')}
         style={[tw`w-20 h-20 ml-11 mt-5 mb-5`]}/></TouchableOpacity>
      </View> 
      <View style={[tw`h-170 bg-white`]}>

      </View>
    </ScrollView>
  );
}


export default (History);
