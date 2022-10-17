import React from 'react';

// import {useDispatch} from 'react-redux';
// import {getAllMovie} from '../../store/action/movie';
// import {REACT_APP_LINK_CLOUDINARY} from '@env';
import {
  View,
  Text,
  // StyleSheet,
  TouchableOpacity,
  Button,
  ScrollView,
  // TextInput,
  Image,
  // RefreshControl,
  // ActivityIndicator,
  // FlatList,
} from 'react-native';

import tw from 'twrnc';

function Profile(props) {

  return (
    <ScrollView>
        <View style={[tw`flex flex-row bg-gray-200`]}>
        <View style={[tw`bg-gray-200 mt-5 ml-0.21 w-1/4`]}>
        <View style={[tw`flex flex-row bg-gray-200`]}>
        <Text style={[tw`bg-gray-200 text-gray-700 text-lg font-semibold ml-5 mt-3`]}>Lucy</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}><Image style={[tw`h-5 w-5 mt-4.7 ml-1.7 justify-center items-center`]} source={require('../../assets/dropdown.png')}/></TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}><Image style={[tw`h-5 w-5 mt-5.8 ml-59.5 justify-center items-center`]} source={require('../../assets/burger.png')}/></TouchableOpacity>  
        </View>
        <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}><Image style={[tw`h-20 w-20 mt-5 ml-3 justify-center items-center`]} source={require('../../assets/logo.png')}/></TouchableOpacity> 
        <Text style={[tw`text-gray-700 text-xl font-semibold ml-9 mb-3`]}>Lucy</Text>
        </View>
         <View style={[tw`bg-gray-200 mt-15 w-1/4`]}>
          <Text style={[tw`text-gray-700 text-xl font-bold mt-15 ml-7`]}>105K</Text>
          <Text style={[tw`text-gray-500 text-lg font-normal ml-5 mb-3`]}>Charged</Text>
        </View>

        <View style={[tw`bg-gray-200 mt-15 w-1/4`]}>
          <Text style={[tw`text-gray-700 text-xl font-bold mt-15 ml-5`]}>40.1K</Text>
          <Text style={[tw`text-gray-500 text-lg font-normal ml-5 mb-5`]}>Saved</Text>
        </View>
        
        <View style={[tw`bg-gray-200 mt-15 w-1/4`]}>
          <Text style={[tw`text-gray-700 text-xl font-bold mt-15 ml-7`]}>100</Text>
          <Text style={[tw`text-gray-500 text-lg font-normal ml-3 mb-3`]}>Stations</Text>
        </View>
 
         </View>
         <View style={[tw`bg-gray-200`]}>
         <TouchableOpacity onPress={() => props.navigation.navigate("Profile")} style={[tw`bg-gray-300 border-2 border-gray-200 ml-5 mr-5 mb-5`]}><Text style={[tw`text-gray-500 text-center text-lg font-bold p-1`]}>Edit Profile</Text></TouchableOpacity>  
         </View>
      
      <View style={[tw`h-117 bg-gray-100`]}>
      <TouchableOpacity style={[tw`bg-gray-100 h-97 w-85`]}></TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate("AppScreen", {screen: 'Home'})}><Image source={require('../../assets/back.png')} style={[tw`bg-gray-100 h-14.1 w-14.1 mt-1 ml-71 justify-center items-center`]}/></TouchableOpacity>
      
      </View>
        
    </ScrollView>
  );
}


export default (Profile);
