import React from 'react';
import Card from '../../component/card';
// import {useDispatch} from 'react-redux';
// import {getAllMovie} from '../../store/action/movie';
// import {REACT_APP_LINK_CLOUDINARY} from '@env';
import {
  View,
  Text,
  // StyleSheet,
  TouchableOpacity,
  TouchableOpacityBase,
  // Button,
  ScrollView,
  // TextInput,
  // Image,
  // RefreshControl,
  // ActivityIndicator,
  // FlatList,
} from 'react-native';

import tw from 'twrnc';

function History(props) {
  const value = [
    {kwh : 100, date: '14-10-2022', location: 'Tebet'},
    {kwh : 110, date: '13-10-2022', location: 'Kuningan'},
    {kwh : 90, date: '12-10-2022', location: 'Manggarai'},
    {kwh : 80, date: '11-10-2022', location: 'Tebet'},
    {kwh : 120, date: '10-10-2022', location: 'BSD'},
  ]

  return (
    <ScrollView style={[tw`bg-white`]} >
      <View style={[tw`rounded-2xl m-5`]}>
        <Text style={[tw `text-black text-5xl text-center m-5`]}>
          History
        </Text>
      </View>
      <View style={[tw`mb-30`]}>
        {value.map((item, index) => 
        <View key={index}>
          <Card data={item} />
        </View>
        )}
      </View>

    </ScrollView>
  );
}


export default (History);
