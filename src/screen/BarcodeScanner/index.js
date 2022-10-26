import React from 'react'
import {
    View,
    Text,
    // StyleSheet,
    TouchableOpacity,
    // Button,
    ScrollView,
    // TextInput,
    Image,
    ImageBackground,
    // RefreshControl,
    // ActivityIndicator,
    // FlatList,
  } from 'react-native';
  
  import tw from 'twrnc';
  
const BarcodeScanner = (props) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[tw`flex flex-row bg-white`]}>
          <TouchableOpacity onPress={() => props.navigation.navigate("Home")}><Image style={[tw`h-5 w-5 mt-7.8 ml-7 mb-5`]} source={require('../../assets/back.png')} /></TouchableOpacity>
          <Text style={[tw`text-3xl text-center text-gray-700 ml-31 mt-7 mb-5 font-bold font-mono`]}>Scan</Text>
      </View>
      <View style={[tw`h-full bg-white`]}>
        <View style={[tw` rounded-xl bg-gray-100 w-100 h-100`]}>
        <View style={[tw`border-dashed rounded-xl border-2 border-gray-700 bg-gray-100 mt-25 ml-25 w-55 h-55`]}>
        </View>
        </View> 
        <TouchableOpacity onPress={() => props.navigation.navigate("Charge")} style={[tw`rounded-xl border-gray-200 bg-gray-200 font-mono font-semibold ml-5 mr-5 mt-25 mb-25 py-2`]}><Text style={[tw`text-xl text-gray-700 font-bold font-mono ml-27`]}>Masukan ID</Text></TouchableOpacity>
     </View>
    </ScrollView>
  )
}

export default BarcodeScanner