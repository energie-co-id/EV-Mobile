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
  TextInput,
  Image,
  // RefreshControl,
  // ActivityIndicator,
  // FlatList,
} from 'react-native';

import tw from 'twrnc';

function Map(props) {

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[tw`flex flex-row justify-center items-center`]}>
      <Text style={[tw`text-gray-500 text-center font-normal ml-3 mt-3`]}><Text style={[tw `text-3xl text-gray-500 text-center font-bold`]}>Location</Text>{`\n`}This located EV Charging Nearby</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}><Image source={require('../../assets/logo.png')}
         style={[tw`w-20 h-20 ml-3 mt-7 mb-7`]}/></TouchableOpacity>
      </View> 
      <View style={[tw`h-full bg-white`]}>
      <View style={[tw`flex flex-col`]}>
      <View>
      <View style={[tw`flex flex-row rounded-xl bg-gray-100 mt-5 ml-5 w-95 h-11`]}>
      <TouchableOpacity onPress={() => props.navigation.navigate("Map")}><Image source={require('../../assets/search.png')}
         style={[tw`w-7 h-7 ml-3 mt-2 mb-2`]}/></TouchableOpacity> 
      <TextInput
      placeholder="Looking for Charger Station"
      style={[tw`text-gray-400 text-base font-mono px-2 py-2 ml-1`]}
      /> 
      </View>
      </View>
      <View style={[tw`rounded-xl bg-gray-100 mt-5 ml-5 w-95`]}><TouchableOpacity onPress={() => props.navigation.navigate("BarcodeScanner")}>
          <Text style={[tw`text-gray-500 text-2xl font-bold bg-gray-100 mt-1 ml-5`]}>Serpong, Test</Text>
          <Text style={[tw`text-gray-500 text-sm font-normal bg-gray-100 ml-5`]}>Serpong, Test</Text>
        <View style={[tw`bg-gray-100 ml-0.21`]}>
         <View><Image style={[tw`rounded-xl w-full h-30 mt-3 justify-center items-center`]} source={require('../../assets/test.jpg')}/></View> 
        </View>
        </TouchableOpacity>
        </View>

        <View style={[tw`rounded-xl bg-gray-100 mt-5 ml-5 w-95`]}><TouchableOpacity onPress={() => props.navigation.navigate("BarcodeScanner")}>
          <Text style={[tw`text-gray-500 text-2xl font-bold bg-gray-100 mt-1 ml-5`]}>Serpong, Test</Text>
          <Text style={[tw`text-gray-500 text-sm font-normal bg-gray-100 ml-5`]}>Serpong, Test</Text>
        <View style={[tw`bg-gray-100 ml-0.21`]}>
         <View><Image style={[tw`rounded-xl w-full h-30 mt-3 justify-center items-center`]} source={require('../../assets/test.jpg')}/></View> 
        </View>
        </TouchableOpacity>
        </View>

        <View style={[tw`rounded-xl bg-gray-100 mt-5 ml-5 w-95`]}><TouchableOpacity onPress={() => props.navigation.navigate("BarcodeScanner")}>
          <Text style={[tw`text-gray-500 text-2xl font-bold bg-gray-100 mt-1 ml-5`]}>Serpong, Test</Text>
          <Text style={[tw`text-gray-500 text-sm font-normal bg-gray-100 ml-5`]}>Serpong, Test</Text>
        <View style={[tw`bg-gray-100 ml-0.21`]}>
         <View><Image style={[tw`rounded-xl w-full h-30 mt-3 justify-center items-center`]} source={require('../../assets/test.jpg')}/></View> 
        </View>
        </TouchableOpacity>
        </View>

        <View style={[tw`rounded-xl bg-gray-100 mt-5 ml-5 w-95`]}><TouchableOpacity onPress={() => props.navigation.navigate("BarcodeScanner")}>
          <Text style={[tw`text-gray-500 text-2xl font-bold bg-gray-100 mt-1 ml-5`]}>Serpong, Test</Text>
          <Text style={[tw`text-gray-500 text-sm font-normal bg-gray-100 ml-5`]}>Serpong, Test</Text>
        <View style={[tw`bg-gray-100 ml-0.21`]}>
         <View><Image style={[tw`rounded-xl w-full h-30 mt-3 justify-center items-center`]} source={require('../../assets/test.jpg')}/></View> 
        </View>
        </TouchableOpacity>
        </View>

        <View style={[tw`rounded-xl bg-gray-100 mt-5 ml-5 w-95`]}><TouchableOpacity onPress={() => props.navigation.navigate("BarcodeScanner")}>
          <Text style={[tw`text-gray-500 text-2xl font-bold bg-gray-100 mt-1 ml-5`]}>Serpong, Test</Text>
          <Text style={[tw`text-gray-500 text-sm font-normal bg-gray-100 ml-5`]}>Serpong, Test</Text>
        <View style={[tw`bg-gray-100 ml-0.21 mb-5`]}>
         <View><Image style={[tw`rounded-xl w-full h-30 mt-3 justify-center items-center`]} source={require('../../assets/test.jpg')}/></View> 
        </View>
        </TouchableOpacity>
        </View>
        </View>
      </View>
    </ScrollView>
  );
}


export default (Map);
