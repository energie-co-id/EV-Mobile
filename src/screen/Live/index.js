import React, {useState} from 'react'


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
 


function Live (props) {
  
  const [condition, setCondition] = useState('off');
  const handleCondition = () => {
    condition === 'off' ? setCondition('on') : setCondition('off')
  };
  
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={[tw`flex flex-row bg-white`]}>
     <TouchableOpacity onPress={() => props.navigation.navigate("Charge")}><Image style={[tw`h-5 w-5 mt-7.8 ml-5 mb-5`]} source={require('../../assets/back.png')} /></TouchableOpacity>
      <Text style={[tw`text-3xl text-center text-gray-700 ml-15 mt-7 mb-5 font-bold font-mono`]}>On Charging</Text>
    
     </View>
     <View style={[tw`h-full bg-white`]}>
     <Image style={[tw` rounded-xl w-81 h-81 mt-3 ml-5 mr-5`]} source={require('../../assets/test.jpg')}/>
     <View style={[tw`flex flex-row bg-white`]}>

     <View style={[tw`bg-white w-40 mt-3 ml-5`]}>
        <Text style={[tw`text-gray-700 ml-9.5 text-lg font-bold`]}>Energy</Text>
        <Icon style={[tw`rounded-xl bg-gray-100 ml-7 text-center w-20 p-1`]} name='ev-station' size={50} color={'#333333'} />
        <Text style={[tw`text-gray-700 ml-7 font-bold text-lg`]}><Text style={[tw`text-gray-700 text-lg p-2`]}>10.32 </Text>KwH</Text>
    </View>

    <View style={[tw`bg-white w-38 mt-3 ml-3.5`]}>
         <Text style={[tw`text-gray-700 ml-13.5 text-lg font-bold`]}>Duration</Text>
         <Icon style={[tw` rounded-xl bg-gray-100 ml-12.5 text-center w-20 p-1`]} name='timer' size={50} color={'#333333'} />
         <Text style={[tw`text-gray-700 ml-12.5 text-lg font-bold`]}>00:01:59</Text>
     </View>
     
     </View>
     <TouchableOpacity onPress={handleCondition} style={[tw`rounded-full flex flex-col ${condition === 'on' ? 'bg-green-100' : 'bg-gray-100'} h-30 w-30 ml-32 mr-5 mt-5 mb-11`]}>
     <Icon style={[{ color: condition=== 'on' ? '#7fff94' : '#FF5C5C'  },tw`ml-3 mt-3`]} name='power-settings-new' size={95} />
        </TouchableOpacity>
     
    
     </View>
    
    </ScrollView>
    
  );
}

export default Live