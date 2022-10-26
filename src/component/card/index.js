import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import tw from 'twrnc';

function card(props) {
  const kwh = props.data.kwh
  const date = props.data.date
  const location = props.data.location
  return (
    <TouchableOpacity style={[tw`rounded-lg h-60 m-5 bg-gray-300 dark:bg-gray-800 h-16 mb-3 flex-row items-center px-4`]}>
      <View style={[tw`flex-1`]}>
        <Text style={[tw`text-black dark:text-white font-bold text-xl`]}>{kwh} Kwh</Text>
      </View>
      <View style={[tw`flex-auto`]}>
        <Text style={[tw`text-right`]}>{date}</Text>
        <Text style={[tw`text-black dark:text-white text-right font-bold text-base`]}>{location}</Text>
      </View>
    </TouchableOpacity>

  );
}

export default card;
