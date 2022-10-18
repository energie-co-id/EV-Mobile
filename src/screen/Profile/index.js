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
  TextInput,
  Image,
  // RefreshControl,
  // ActivityIndicator,
  // FlatList,
} from 'react-native';

import tw from 'twrnc';

function Profile(props) {

  return (
    <ScrollView>
        <View style={[tw`flex flex-row bg-gray-100`]}>
         <View style={[tw`bg-gray-100 mt-5 ml-0.21 w-1/4`]}>
          <View style={[tw`flex flex-row bg-gray-100`]}>
           <Text style={[tw`bg-gray-100 text-gray-700 text-lg font-semibold ml-5 mt-3`]}>Lucy</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}><Image style={[tw`h-5 w-5 mt-4.7 ml-1.7 justify-center items-center`]} source={require('../../assets/dropdown.png')}/></TouchableOpacity>
           <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}><Image style={[tw`h-5 w-5 mt-5.8 ml-59.5 justify-center items-center`]} source={require('../../assets/burger.png')}/></TouchableOpacity>  
        </View>
        <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}><Image style={[tw`h-20 w-20 mt-5 ml-3 justify-center items-center`]} source={require('../../assets/logo.png')}/></TouchableOpacity> 
        <Text style={[tw`text-gray-700 text-xl font-semibold ml-9 mb-3`]}>Lucy</Text>
        </View>
         <View style={[tw`bg-gray-100 mt-15 w-1/4`]}>
          <Text style={[tw`text-gray-700 text-xl font-bold mt-15 ml-7`]}>105 K</Text>
          <Text style={[tw`text-gray-500 text-lg font-normal ml-5 mb-3`]}>Charged</Text>
        </View>

        <View style={[tw`bg-gray-100 mt-15 w-1/4`]}>
          <Text style={[tw`text-gray-700 text-xl font-bold mt-15 ml-7`]}>5 H</Text>
          <Text style={[tw`text-gray-500 text-lg font-normal ml-5 mb-3`]}>Spent</Text>
        </View>
        
        <View style={[tw`bg-gray-100 mt-15 w-1/4`]}>
          <Text style={[tw`text-gray-700 text-xl font-bold mt-15 ml-7`]}>100</Text>
          <Text style={[tw`text-gray-500 text-lg font-normal ml-3 mb-3`]}>Stations</Text>
        </View>

      </View>
           
      <View style={[tw`h-131 bg-white`]}>
      <View style={[tw`flex flex-col bg-white p-5`]}>
        <View style={[tw`bg-white`]}><Text style={[tw`mt-2 text-gray-500 text-2xl font-bold ml-5`]}>Edit Profile</Text></View>

        <TextInput
         placeholder="Enter your new username"
         style={[tw` rounded-xl border-2 border-gray-100 bg-gray-100 text-base text-gray-500 mt-2 ml-7 mr-7 pl-5 font-bold`]}
       />

       <TextInput
         placeholder="Re-type your new username"
         style={[tw`  rounded-xl border-2 border-gray-100 bg-gray-100 text-base text-gray-500 mt-2 ml-7 mr-7 pl-5 font-bold`]}
       />

      <TextInput
         placeholder="Enter your new password"
         style={[tw` rounded-xl border-2 border-gray-100 bg-gray-100 text-base text-gray-500 mt-2 ml-7 mr-7 pl-5 font-bold`]}
       />

      <TextInput
         placeholder="Re-type your new password"
         style={[tw` rounded-xl border-2 border-gray-100 bg-gray-100 text-base text-gray-500 mt-2 ml-7 mr-7 pl-5 font-bold`]}
       />
      
      <Text style={[tw`text-base text-gray-500 text-xl mt-2 ml-5 font-bold`]}>Change Current Avatar</Text>
      <Button
       style={{fontSize: 20, color: 'green'}}
       styleDisabled={{color: 'red'}}
       onPress={() => this._handlePress()}
      title="Press Me"
      >
      Press Me
      </Button>
       
       </View>
         <TouchableOpacity onPress={() => props.navigation.navigate("AppScreen", {screen: 'Home'})}><Image source={require('../../assets/back.png')} style={[tw`bg-gray-50 h-15 w-15 mt-15 ml-71 justify-center items-center`]}/></TouchableOpacity>
      </View>
        
    </ScrollView>
  );
}


export default (Profile);
