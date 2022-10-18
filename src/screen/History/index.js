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

function History(props) {

  return (
    <ScrollView>
      <View style={[tw`flex flex-row`]}>
      <Text style={[tw`text-gray-500 font-normal text-center ml-19 mt-9`]}><Text style={[tw `text-3xl text-gray-500 text-center font-bold`]}> History </Text>{`\n`}   Present our charging record </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}><Image source={require('../../assets/logo.png')}
         style={[tw`w-20 h-20 ml-5 mt-5 mb-5`]}/></TouchableOpacity>
      </View> 

      <View style={[tw`h-227 bg-white`]}>
      <View style={[tw`rounded-xl bg-gray-100 mt-5 ml-5 mb-1 w-81 h-19`]}>
      <View style={[tw`flex flex-row`]}>
      <Text style={[tw`text-gray-500 font-normal  text-lg text-center ml-7.5 mt-3.5`]}><Text style={[tw`text-xl text-gray-500 text-center font-bold`]}>Hyundai Station</Text>{`\n`}18/10/2022- 14:10</Text>
      <Text style={[tw`text-gray-500 font-bold text-xl text-center ml-15.5 mt-6.5`]}><Text style={[tw`text-gray-500 font-normal text-xl text-center ml-17.5 mt-6.5`]}> 400</Text> KwH </Text>
      </View>
      </View>

      <View style={[tw`rounded-xl bg-gray-100 mt-2 ml-5 mb-1 w-81 h-19`]}>
      <View style={[tw`flex flex-row`]}>
      <Text style={[tw`text-gray-500 font-normal  text-lg text-center ml-7.5 mt-3.5`]}><Text style={[tw`text-xl text-gray-500 text-center font-bold`]}>Hyundai Station</Text>{`\n`}18/10/2022- 14:10</Text>
      <Text style={[tw`text-gray-500 font-bold text-xl text-center ml-15.5 mt-6.5`]}><Text style={[tw`text-gray-500 font-normal text-xl text-center ml-17.5 mt-6.5`]}> 400</Text> KwH </Text>
      </View>
      </View>

     <View style={[tw`rounded-xl bg-gray-100 mt-2 ml-5 mb-1 w-81 h-19`]}>
     <View style={[tw`flex flex-row`]}>
     <Text style={[tw`text-gray-500 font-normal  text-lg text-center ml-7.5 mt-3.5`]}><Text style={[tw`text-xl text-gray-500 text-center font-bold`]}>Hyundai Station</Text>{`\n`}18/10/2022- 14:10</Text>
      <Text style={[tw`text-gray-500 font-bold text-xl text-center ml-15.5 mt-6.5`]}><Text style={[tw`text-gray-500 font-normal text-xl text-center ml-17.5 mt-6.5`]}> 400</Text> KwH </Text>
      </View>
      </View>

      <View style={[tw`rounded-xl bg-gray-100 mt-2 ml-5 mb-1 w-81 h-19`]}>
      <View style={[tw`flex flex-row`]}>
      <Text style={[tw`text-gray-500 font-normal  text-lg text-center ml-7.5 mt-3.5`]}><Text style={[tw`text-xl text-gray-500 text-center font-bold`]}>Hyundai Station</Text>{`\n`}18/10/2022- 14:10</Text>
      <Text style={[tw`text-gray-500 font-bold text-xl text-center ml-15.5 mt-6.5`]}><Text style={[tw`text-gray-500 font-normal text-xl text-center ml-17.5 mt-6.5`]}> 400</Text> KwH </Text>
      </View>
      </View>

      <View style={[tw`rounded-xl bg-gray-100 mt-2 ml-5 mb-1 w-81 h-19`]}>
      <View style={[tw`flex flex-row`]}>
      <Text style={[tw`text-gray-500 font-normal  text-lg text-center ml-7.5 mt-3.5`]}><Text style={[tw`text-xl text-gray-500 text-center font-bold`]}>Hyundai Station</Text>{`\n`}18/10/2022- 14:10</Text>
      <Text style={[tw`text-gray-500 font-bold text-xl text-center ml-15.5 mt-6.5`]}><Text style={[tw`text-gray-500 font-normal text-xl text-center ml-17.5 mt-6.5`]}> 400</Text> KwH </Text>
      </View>
      </View>

      <View style={[tw`rounded-xl bg-gray-100 mt-2 ml-5 mb-1 w-81 h-19`]}>
      <View style={[tw`flex flex-row`]}>
      <Text style={[tw`text-gray-500 font-normal  text-lg text-center ml-7.5 mt-3.5`]}><Text style={[tw`text-xl text-gray-500 text-center font-bold`]}>Hyundai Station</Text>{`\n`}18/10/2022- 14:10</Text>
      <Text style={[tw`text-gray-500 font-bold text-xl text-center ml-15.5 mt-6.5`]}><Text style={[tw`text-gray-500 font-normal text-xl text-center ml-17.5 mt-6.5`]}> 400</Text> KwH </Text>
      </View>
      </View>

      <View style={[tw`rounded-xl bg-gray-100 mt-2 ml-5 mb-1 w-81 h-19`]}>
      <View style={[tw`flex flex-row`]}>
      <Text style={[tw`text-gray-500 font-normal  text-lg text-center ml-7.5 mt-3.5`]}><Text style={[tw`text-xl text-gray-500 text-center font-bold`]}>Hyundai Station</Text>{`\n`}18/10/2022- 14:10</Text>
      <Text style={[tw`text-gray-500 font-bold text-xl text-center ml-15.5 mt-6.5`]}><Text style={[tw`text-gray-500 font-normal text-xl text-center ml-17.5 mt-6.5`]}> 400</Text> KwH </Text>
      </View>
      </View>

      <View style={[tw`rounded-xl bg-gray-100 mt-2 ml-5 mb-1 w-81 h-19`]}>
      <View style={[tw`flex flex-row`]}>
      <Text style={[tw`text-gray-500 font-normal  text-lg text-center ml-7.5 mt-3.5`]}><Text style={[tw`text-xl text-gray-500 text-center font-bold`]}>Hyundai Station</Text>{`\n`}18/10/2022- 14:10</Text>
      <Text style={[tw`text-gray-500 font-bold text-xl text-center ml-15.5 mt-6.5`]}><Text style={[tw`text-gray-500 font-normal text-xl text-center ml-17.5 mt-6.5`]}> 400</Text> KwH </Text>
      </View>
      </View>

      <View style={[tw`rounded-xl bg-gray-100 mt-2 ml-5 mb-1 w-81 h-19`]}>
      <View style={[tw`flex flex-row`]}>
      <Text style={[tw`text-gray-500 font-normal  text-lg text-center ml-7.5 mt-3.5`]}><Text style={[tw`text-xl text-gray-500 text-center font-bold`]}>Hyundai Station</Text>{`\n`}18/10/2022- 14:10</Text>
      <Text style={[tw`text-gray-500 font-bold text-xl text-center ml-15.5 mt-6.5`]}><Text style={[tw`text-gray-500 font-normal text-xl text-center ml-17.5 mt-6.5`]}> 400</Text> KwH </Text>
      </View>
      </View>

      <View style={[tw`rounded-xl bg-gray-100 mt-2 ml-5 mb-1 w-81 h-19`]}>
      <View style={[tw`flex flex-row`]}>
      <Text style={[tw`text-gray-500 font-normal  text-lg text-center ml-7.5 mt-3.5`]}><Text style={[tw`text-xl text-gray-500 text-center font-bold`]}>Hyundai Station</Text>{`\n`}18/10/2022- 14:10</Text>
      <Text style={[tw`text-gray-500 font-bold text-xl text-center ml-15.5 mt-6.5`]}><Text style={[tw`text-gray-500 font-normal text-xl text-center ml-17.5 mt-6.5`]}> 400</Text> KwH </Text>
      </View>
      </View>

      </View>
    </ScrollView>
  );
}


export default (History);
