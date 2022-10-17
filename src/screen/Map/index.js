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

function Map(props) {

  return (
    <ScrollView>
      <View style={[tw`flex flex-row`]}>
        <Text style={[tw `text-3xl text-gray-500 text-center font-bold ml-25 mt-11`]}> Location </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}><Image source={require('../../assets/logo.png')}
         style={[tw`w-20 h-20 ml-9 mt-5 mb-5`]}/></TouchableOpacity>
      </View> 
      <View style={[tw`h-282 bg-white`]}>
      <View style={[tw`flex flex-cols`]}>

        <View style={[tw`rounded-xl bg-gray-100 mt-5 ml-5 mb-1 w-81 h-49`]}>
          <Text style={[tw`text-gray-500 text-2xl font-bold bg-gray-100 mt-2 ml-5`]}>Serpong, Test</Text>
          <Text style={[tw`text-gray-500 text-sm font-normal bg-gray-100 ml-5`]}>Serpong, Test</Text>
        <View style={[tw`bg-gray-100 mb-2 ml-0.21`]}>
         <TouchableOpacity><Image style={[tw`w-full h-35 mt-3 mb-1 justify-center items-center`]} source={require('../../assets/test.jpg')}/></TouchableOpacity> 
        </View>
        </View>

        <View style={[tw`rounded-xl bg-gray-100 mt-5 ml-5 mb-1 w-81 h-49`]}>
          <Text style={[tw`text-gray-500 text-2xl font-bold bg-gray-100 mt-2 ml-5`]}>Serpong, Test</Text>
          <Text style={[tw`text-gray-500 text-sm font-normal bg-gray-100 ml-5`]}>Serpong, Test</Text>
        <View style={[tw`bg-gray-100 mb-2 ml-0.21`]}>
        <TouchableOpacity><Image style={[tw`w-full h-35 mt-3 mb-1 justify-center items-center`]} source={require('../../assets/test.jpg')}/></TouchableOpacity> 
        </View>
        </View>

        <View style={[tw`rounded-xl bg-gray-100 mt-5 ml-5 mb-1 w-81 h-49`]}>
          <Text style={[tw`text-gray-500 text-2xl font-bold bg-gray-100 mt-2 ml-5`]}>Serpong, Test</Text>
          <Text style={[tw`text-gray-500 text-sm font-normal bg-gray-100 ml-5`]}>Serpong, Test</Text>
        <View style={[tw`bg-gray-100 mb-2 ml-0.21`]}>
        <TouchableOpacity><Image style={[tw`w-full h-35 mt-3 mb-1 justify-center items-center`]} source={require('../../assets/test.jpg')}/></TouchableOpacity> 
        </View>
        </View>

        <View style={[tw`rounded-xl bg-gray-100 mt-5 ml-5 mb-1 w-81 h-49`]}>
          <Text style={[tw`text-gray-500 text-2xl font-bold bg-gray-100 mt-2 ml-5`]}>Serpong, Test</Text>
          <Text style={[tw`text-gray-500 text-sm font-normal bg-gray-100 ml-5`]}>Serpong, Test</Text>
        <View style={[tw`bg-gray-100 mb-2 ml-0.21`]}>
        <TouchableOpacity><Image style={[tw`w-full h-35 mt-3 mb-1 justify-center items-center`]} source={require('../../assets/test.jpg')}/></TouchableOpacity> 
        </View>
        </View>

        <View style={[tw`rounded-xl bg-gray-100 mt-5 ml-5 mb-1 w-81 h-49`]}>
          <Text style={[tw`text-gray-500 text-2xl font-bold bg-gray-100 mt-2 ml-5`]}>Serpong, Test</Text>
          <Text style={[tw`text-gray-500 text-sm font-normal bg-gray-100 ml-5`]}>Serpong, Test</Text>
        <View style={[tw`bg-gray-100 mb-2 ml-0.21`]}>
        <TouchableOpacity><Image style={[tw`w-full h-35 mt-3 mb-1 justify-center items-center`]} source={require('../../assets/test.jpg')}/></TouchableOpacity> 
        </View>
        </View>

        {/* <View style={[tw`bg-gray-100 mt-5 ml-5 mb-1 w-81 h-41`]}> */}
         {/* <Text style={[tw`text-gray-500 text-2xl font-bold bg-gray-100 mt-2 ml-5`]}>Serpong, Test</Text> */}
        {/* <View style={[tw`flex flex-row`]}> */}
        {/* <View style={[tw`bg-gray-100  mb-2 w-1/3`]}> */}
         {/* <Text style={[tw`text-gray-500 text-xl font-bold mt-5 ml-5`]}>◉ Hari Ini</Text> */}
         {/* <Text style={[tw`text-gray-500 text-xl font-normal`]}><Text style={[tw`text-gray-500 text-xl font-bold`]}>        5.4</Text> KwH </Text> */}
        {/* </View> */}
        {/* <View style={[tw`bg-gray-100 mb-2 w-1/3`]}> */}
         {/* <Text style={[tw`text-gray-500 text-xl font-bold mt-5 ml-2`]}>◉ Bulan Ini</Text> */}
         {/* <Text style={[tw`text-gray-500 text-xl font-normal`]}><Text style={[tw`text-gray-500 text-xl font-bold`]}>     40.7</Text> KwH </Text> */}
        {/* </View> */}
         {/* <View style={[tw`border-l-2 border-gray-500 bg-gray-100 mb-2 ml-0.21 w-1/3`]}> */}
         {/* <TouchableOpacity><Image style={[tw`h-17 w-17 ml-5 mb-1 justify-center items-center`]} source={require('../../assets/charge.png')}/></TouchableOpacity>  */}
         {/* <Text style={[tw`text-gray-500 text-xl font-semibold mt-1 ml-5.7 mb-3`]}>Charge</Text> */}
        {/* </View> */}
        {/* </View> */}
        {/* </View> */}
        


        </View>
      </View>
    </ScrollView>
  );
}


export default (Map);
