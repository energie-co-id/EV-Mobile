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
    <View>
      </View>
      
  );
}


export default Main;
