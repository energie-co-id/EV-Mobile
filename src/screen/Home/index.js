import React from 'react';
import Footer from '../../component/footer';
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

function Home(props) {

  return (
    <ScrollView>
      <TouchableOpacity style={[tw`rounded-2xl bg-gray-300 h-60 m-12`]}>
        <Text style={[tw `text-black text-5xl text-center m-5`]}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}><Text>Profile</Text></TouchableOpacity>
      <Footer/>
    </ScrollView>
  );
}


export default (Home);
