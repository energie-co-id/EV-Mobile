import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
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
    <View style={[tw`h-3/4 bg-white`]}>
     <Text style={[tw`border-2 border-gray-500 bg-white`]}>
       
     </Text>
    </View>
      
  );
}


export default Main;
