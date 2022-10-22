import React from 'react'

import {
    View,
    Text,
    // StyleSheet,
    TouchableOpacity,
    // Button,
    ScrollView,
    TextInput,
    Image,
    ImageBackground,
    // RefreshControl,
    // ActivityIndicator,
    // FlatList,
  } from 'react-native';
  
  import tw from 'twrnc';

const Charge = (props) => {
  return (
    <ScrollView>
    <View style={[tw`flex flex-row bg-white`]}>
      <TouchableOpacity onPress={() => props.navigation.navigate("Home")}><Image style={[tw`h-5 w-5 mt-7.8 ml-5 mb-5`]} source={require('../../assets/back.png')} /></TouchableOpacity>
      <Text style={[tw`text-3xl text-center text-gray-700 ml-27 mt-7 mb-5 font-bold font-mono`]}>Scan</Text>
  </View>
  <View style={[tw`h-161 bg-white`]}>
    <View style={[tw`border-dashed rounded-xl border-2 border-gray-700 bg-gray-100 mt-29 ml-19 w-55 h-55`]}>
    </View>
    <Text style={[tw`mt-11 ml-9 text-gray-500 font-semibold`]}>RFID</Text> 
    <TextInput
        placeholder="325FAA21D"
        style={[tw` border-b-2 rounded-sm border-gray-500 bg-white text-base text-gray-500 uppercase mt-2 ml-7 mr-7 pl-2 py-1 font-bold `]} />
    <TouchableOpacity onPress={() => props.navigation.navigate("Charge")} style={[tw`rounded-xl border-gray-200 bg-gray-200 font-mono font-semibold ml-5 mr-5 mt-5 py-2`]}><Text style={[tw`text-xl text-gray-700 font-bold font-mono ml-25`]}>Start Charging</Text></TouchableOpacity>
 </View>
</ScrollView>
  )
}

export default Charge