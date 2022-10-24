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
  TextInput,
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
      <Text style={[tw`text-gray-500 font-normal ml-11 mt-9`]}><Text style={[tw `text-3xl text-gray-500 font-bold`]}>History</Text>{`\n`}Present our charging record</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}><Image source={require('../../assets/logo.png')}
         style={[tw`w-20 h-20 ml-5 mt-5 mb-5`]}/></TouchableOpacity>
      </View> 
      
      <View style={[tw`h-212 bg-white`]}>
      <View style={[tw`flex flex-row rounded-xl bg-gray-100 mt-3 mb-2 ml-3 w-85 h-17`]}>
      <TouchableOpacity onPress={() => props.navigation.navigate("History")}><Image source={require('../../assets/search.png')}
         style={[tw`w-7 h-7 ml-3 mt-5`]}/></TouchableOpacity> 
      <View style={[tw`flex flex-col`]}>   
      <Text style={[tw`text-gray-500 text-sm font-normal ml-3 mt-2`]}><Text style={[tw `text-sm text-gray-500 font-bold`]}>Your Transaction:</Text> 11</Text>  
      <TextInput
      placeholder="Search your Recent History"
      style={[tw`border-b-2 border-gray-300 text-gray-400 text-base text-gray-400 w-69 ml-3 py-0.1`]}
      /> 
      
      </View> 
      </View> 
    
      <View style={[tw`rounded-xl bg-gray-100 mt-1 ml-3 mb-1 w-85 h-19`]}><TouchableOpacity onPress={() => props.navigation.navigate("TransactionDetail")}>
      <View style={[tw`flex flex-row`]}>
      <View><Image source={require('../../assets/reverse.png')}
         style={[tw`w-9 h-9 ml-3 mt-5 mb-5`]}/></View>
      <Text style={[tw`text-gray-500 font-bold text-base ml-2 mt-5`]}><Text style={[tw`text-sm text-gray-500 font-normal`]}><Text style={[tw`text-gray-500 font-bold text-lg`]}>Hyundai Station</Text>{`\n`}18/10/2022 </Text>14:10 - 17:00</Text>
      <Text style={[tw`text-gray-500 font-bold text-lg text-center ml-5 mt-7`]}><Text style={[tw`text-gray-500 font-normal text-lg text-center ml-17.5 mt-6.5`]}>400</Text> KwH</Text>
      </View>
      </TouchableOpacity>
      </View>
      

      <View style={[tw`rounded-xl bg-gray-100 mt-1 ml-3 mb-1 w-85 h-19`]}><TouchableOpacity onPress={() => props.navigation.navigate("TransactionDetail")}>
      <View style={[tw`flex flex-row`]}>
      <View><Image source={require('../../assets/reverse.png')}
         style={[tw`w-9 h-9 ml-3 mt-5 mb-5`]}/></View>
      <Text style={[tw`text-gray-500 font-bold text-base ml-2 mt-5`]}><Text style={[tw`text-sm text-gray-500 font-normal`]}><Text style={[tw`text-gray-500 font-bold text-lg`]}>Hyundai Station</Text>{`\n`}18/10/2022 </Text>14:10 - 17:00</Text>
      <Text style={[tw`text-gray-500 font-bold text-lg text-center ml-5 mt-7`]}><Text style={[tw`text-gray-500 font-normal text-lg text-center ml-17.5 mt-6.5`]}>400</Text> KwH</Text>
      </View>
      </TouchableOpacity>
      </View>

      <View style={[tw`rounded-xl bg-gray-100 mt-1 ml-3 mb-1 w-85 h-19`]}><TouchableOpacity onPress={() => props.navigation.navigate("TransactionDetail")}>
      <View style={[tw`flex flex-row`]}>
      <View><Image source={require('../../assets/reverse.png')}
         style={[tw`w-9 h-9 ml-3 mt-5 mb-5`]}/></View>
      <Text style={[tw`text-gray-500 font-bold text-base ml-2 mt-5`]}><Text style={[tw`text-sm text-gray-500 font-normal`]}><Text style={[tw`text-gray-500 font-bold text-lg`]}>Hyundai Station</Text>{`\n`}18/10/2022 </Text>14:10 - 17:00</Text>
      <Text style={[tw`text-gray-500 font-bold text-lg text-center ml-5 mt-7`]}><Text style={[tw`text-gray-500 font-normal text-lg text-center ml-17.5 mt-6.5`]}>400</Text> KwH</Text>
      </View>
      </TouchableOpacity>
      </View>

      <View style={[tw`rounded-xl bg-gray-100 mt-1 ml-3 mb-1 w-85 h-19`]}><TouchableOpacity onPress={() => props.navigation.navigate("TransactionDetail")}>
      <View style={[tw`flex flex-row`]}>
      <View ><Image source={require('../../assets/reverse.png')}
         style={[tw`w-9 h-9 ml-3 mt-5 mb-5`]}/></View>
      <Text style={[tw`text-gray-500 font-bold text-base ml-2 mt-5`]}><Text style={[tw`text-sm text-gray-500 font-normal`]}><Text style={[tw`text-gray-500 font-bold text-lg`]}>Hyundai Station</Text>{`\n`}18/10/2022 </Text>14:10 - 17:00</Text>
      <Text style={[tw`text-gray-500 font-bold text-lg text-center ml-5 mt-7`]}><Text style={[tw`text-gray-500 font-normal text-lg text-center ml-17.5 mt-6.5`]}>400</Text> KwH</Text>
      </View>
      </TouchableOpacity>
      </View>

      <View style={[tw`rounded-xl bg-gray-100 mt-1 ml-3 mb-1 w-85 h-19`]}><TouchableOpacity onPress={() => props.navigation.navigate("TransactionDetail")}>
      <View style={[tw`flex flex-row`]}>
      <View ><Image source={require('../../assets/reverse.png')}
         style={[tw`w-9 h-9 ml-3 mt-5 mb-5`]}/></View>
      <Text style={[tw`text-gray-500 font-bold text-base ml-2 mt-5`]}><Text style={[tw`text-sm text-gray-500 font-normal`]}><Text style={[tw`text-gray-500 font-bold text-lg`]}>Hyundai Station</Text>{`\n`}18/10/2022 </Text>14:10 - 17:00</Text>
      <Text style={[tw`text-gray-500 font-bold text-lg text-center ml-5 mt-7`]}><Text style={[tw`text-gray-500 font-normal text-lg text-center ml-17.5 mt-6.5`]}>400</Text> KwH</Text>
      </View>
      </TouchableOpacity>
      </View>

      <View style={[tw`rounded-xl bg-gray-100 mt-1 ml-3 mb-1 w-85 h-19`]}><TouchableOpacity onPress={() => props.navigation.navigate("TransactionDetail")}>
      <View style={[tw`flex flex-row`]}>
      <View ><Image source={require('../../assets/reverse.png')}
         style={[tw`w-9 h-9 ml-3 mt-5 mb-5`]}/></View>
      <Text style={[tw`text-gray-500 font-bold text-base ml-2 mt-5`]}><Text style={[tw`text-sm text-gray-500 font-normal`]}><Text style={[tw`text-gray-500 font-bold text-lg`]}>Hyundai Station</Text>{`\n`}18/10/2022 </Text>14:10 - 17:00</Text>
      <Text style={[tw`text-gray-500 font-bold text-lg text-center ml-5 mt-7`]}><Text style={[tw`text-gray-500 font-normal text-lg text-center ml-17.5 mt-6.5`]}>400</Text> KwH</Text>
      </View>
      </TouchableOpacity>
      </View>

      <View style={[tw`rounded-xl bg-gray-100 mt-1 ml-3 mb-1 w-85 h-19`]}><TouchableOpacity onPress={() => props.navigation.navigate("TransactionDetail")}>
      <View style={[tw`flex flex-row`]}>
      <View ><Image source={require('../../assets/reverse.png')}
         style={[tw`w-9 h-9 ml-3 mt-5 mb-5`]}/></View>
      <Text style={[tw`text-gray-500 font-bold text-base ml-2 mt-5`]}><Text style={[tw`text-sm text-gray-500 font-normal`]}><Text style={[tw`text-gray-500 font-bold text-lg`]}>Hyundai Station</Text>{`\n`}18/10/2022 </Text>14:10 - 17:00</Text>
      <Text style={[tw`text-gray-500 font-bold text-lg text-center ml-5 mt-7`]}><Text style={[tw`text-gray-500 font-normal text-lg text-center ml-17.5 mt-6.5`]}>400</Text> KwH</Text>
      </View>
      </TouchableOpacity>
      </View>

      <View style={[tw`rounded-xl bg-gray-100 mt-1 ml-3 mb-1 w-85 h-19`]}><TouchableOpacity onPress={() => props.navigation.navigate("TransactionDetail")}>
      <View style={[tw`flex flex-row`]}>
      <View ><Image source={require('../../assets/reverse.png')}
         style={[tw`w-9 h-9 ml-3 mt-5 mb-5`]}/></View>
      <Text style={[tw`text-gray-500 font-bold text-base ml-2 mt-5`]}><Text style={[tw`text-sm text-gray-500 font-normal`]}><Text style={[tw`text-gray-500 font-bold text-lg`]}>Hyundai Station</Text>{`\n`}18/10/2022 </Text>14:10 - 17:00</Text>
      <Text style={[tw`text-gray-500 font-bold text-lg text-center ml-5 mt-7`]}><Text style={[tw`text-gray-500 font-normal text-lg text-center ml-17.5 mt-6.5`]}>400</Text> KwH</Text>
      </View>
      </TouchableOpacity>
      </View>

      <View style={[tw`rounded-xl bg-gray-100 mt-1 ml-3 mb-1 w-85 h-19`]}><TouchableOpacity onPress={() => props.navigation.navigate("TransactionDetail")}>
      <View style={[tw`flex flex-row`]}>
      <View ><Image source={require('../../assets/reverse.png')}
         style={[tw`w-9 h-9 ml-3 mt-5 mb-5`]}/></View>
      <Text style={[tw`text-gray-500 font-bold text-base ml-2 mt-5`]}><Text style={[tw`text-sm text-gray-500 font-normal`]}><Text style={[tw`text-gray-500 font-bold text-lg`]}>Hyundai Station</Text>{`\n`}18/10/2022 </Text>14:10 - 17:00</Text>
      <Text style={[tw`text-gray-500 font-bold text-lg text-center ml-5 mt-7`]}><Text style={[tw`text-gray-500 font-normal text-lg text-center ml-17.5 mt-6.5`]}>400</Text> KwH</Text>
      </View>
      </TouchableOpacity>
      </View>
      </View>
    </ScrollView>
  );
}


export default (History);
