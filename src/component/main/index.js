import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import tw from 'twrnc';

function Main (props) {
  const handleHome = () => {
    props.navigation.navigate('Home');
  };
  const handleViewAll = () => {
    props.navigation.navigate('Profile')
  };
  return (
    <View style={[tw`h-140 bg-white`]}>
     <View style={[tw`border-2 border-gray-300 rounded-xl bg-white mt-5 mr-5 ml-5 mb-2`]}>
      <Text style={[tw`text-gray-500 text-2xl font-bold mt-2 ml-5`]}>Konsumsi Energi Anda</Text>
      <View style={[tw`flex flex-row`]}>
      <Text style={[tw`text-gray-500 text-xl mt-2 ml-5`]}>● Hari Ini{"\n"}
      <Text style={[tw`text-gray-500 text-xl font-bold`]}>     5.4 </Text><Text style={[tw`font-normal text-lg`]}>KwH</Text></Text>
      
      <Text style={[tw`text-gray-500 text-xl mt-2 ml-5`]}>● Bulan Ini{"\n"}
      <Text style={[tw`text-gray-500 text-xl font-bold`]}>     40.7 </Text><Text style={[tw`font-normal text-lg`]}>KwH</Text></Text>

      <TouchableOpacity><Image style={[tw`h-20 w-20 ml-4.1 mb-3.5 justify-center items-center`]} source={require('../../assets/charge.png')}/></TouchableOpacity>
      </View>
      </View>
     
      <Text style={[tw`text-gray-500 text-2xl font-bold mt-1 ml-7 mb-1`]}>Konsumsi Energi Tahun ini</Text>
     <TouchableOpacity style={[tw`bg-gray-200 h-75 w-79 mt-2 ml-5`]}></TouchableOpacity>
    </View>
  );
}


export default Main;
