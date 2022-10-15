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
  // Image,
  // RefreshControl,
  // ActivityIndicator,
  // FlatList,
} from 'react-native';

import tw from 'twrnc';

function Profile(props) {

  return (
    <ScrollView>
      <TouchableOpacity style={[tw`rounded-2xl h-60 m-5`]}>
        <Text style={[tw `text-black text-lg text-center m-5`]}>
          Profile
        </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("AppScreen", {screen: 'Home'})}><Text>Home</Text></TouchableOpacity>
      </TouchableOpacity>
    </ScrollView>
  );
}


export default (Profile);
