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
  import Icon from "react-native-vector-icons/MaterialIcons";
  import tw from 'twrnc';

const Live = (props) => {
  return (
    <ScrollView>
   
    <View style={[tw`flex flex-row bg-white`]}>
     <TouchableOpacity onPress={() => props.navigation.navigate("Charge")}><Image style={[tw`h-5 w-5 mt-7.8 ml-5 mb-5`]} source={require('../../assets/back.png')} /></TouchableOpacity>
      <Text style={[tw`text-3xl text-center text-gray-700 ml-15 mt-7 mb-5 font-bold font-mono`]}>On Charging</Text>
    
     </View>
     <View style={[tw`h-161 bg-white`]}>
     <Image style={[tw`w-81 h-81 mt-3 ml-5 mr-5`]} source={require('../../assets/test.jpg')}/>
     <View style={[tw`flex flex-row bg-white`]}>

     <View style={[tw`bg-white w-40 mt-3 ml-5`]}>
        <Text style={[tw`text-gray-700 ml-12.5 text-lg font-bold`]}>Energy</Text>
        <Icon style={[tw`rounded-xl bg-gray-200 ml-11 text-center w-20 p-1`]} name='ev-station' size={50} color={'#333333'} />
        <Text style={[tw`text-gray-700 ml-10.5 text-lg`]}><Text style={[tw`text-gray-500 text-lg font-bold p-2`]}>10.32 </Text>KwH</Text>
    </View>

    <View style={[tw`bg-white w-38 mt-3 ml-3.5`]}>
         <Text style={[tw`text-gray-700 ml-11.5 text-lg font-bold`]}>Duration</Text>
         <Icon style={[tw` rounded-xl bg-gray-200 ml-10.5 text-center w-20 p-1`]} name='timer' size={50} color={'#333333'} />
         <Text style={[tw`text-gray-700 ml-9.5 text-lg font-bold`]}>00:01:59</Text>
     </View>
     
     </View>
     <View style={[tw` rounded-full flex flex-col bg-gray-500 h-30 w-30 ml-33 mr-5 mt-5`]}>
     <TouchableOpacity onPress={() => props.navigation.navigate("Live")}><Icon style={[tw`ml-3 mt-3`]} name='power-settings-new' size={95} color={'#ffff'} /></TouchableOpacity> 
        </View>
     
    
     </View>
    
    </ScrollView>
    
  )
}

export default Live