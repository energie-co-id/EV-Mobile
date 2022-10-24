import React from 'react';
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
const TransactionDetail = (props) => {
  return (
    <ScrollView>
    <View style={[tw`flex flex-row bg-white`]}>
        <TouchableOpacity onPress={() => props.navigation.navigate("History")}><Image style={[tw`h-5 w-5 mt-7.8 ml-5 mb-5`]} source={require('../../assets/back.png')} /></TouchableOpacity>
     <Text style={[tw`text-center text-2xl ml-15 mt-6 font-bold`]}> Your Invoice</Text>
     </View>
     <View style={[tw`h-171 bg-white`]}>
     <View style={[tw`rounded-xl border-2 border-gray-50 bg-gray-50 mt-11 ml-5 w-81 h-111s`]}>
     <View style={[tw`border-b-2 border-gray-500 flex flex-col ml-5 mr-5 mb-1`]}>
     <Text style={[tw`text-center text-xl mt-7 font-bold`]}>Transaction Detail</Text>
     <Text style={[tw`text-center text-base font-normal mb-2`]}>06/09/2022 18.00-19.00</Text>
     </View>
     <View style={[tw`flex flex-col`]}>
     
     <View style={[tw`flex flex-row w-1/2`]}>
     <Text style={[tw`text-center mt-5 ml-3 font-semibold`]}>Transcation Number    </Text>
     <Text style={[tw`text-center mt-5 font-normal mb-2`]}>088809830948239808</Text>
     </View>
     <View style={[tw`flex flex-row w-1/2`]}>
     <Text style={[tw`text-center mt-5 ml-3 font-semibold`]}>Location                     </Text>
     <Text style={[tw`text-center mt-5 font-normal mb-2`]}>Hyundai Manggarai</Text>
     </View>
     <View style={[tw`flex flex-row w-1/2`]}>
     <Text style={[tw`text-center mt-5 ml-3 font-semibold`]}>Type of Charger         </Text>
     <Text style={[tw`text-center mt-5 font-normal mb-2`]}>Type 2</Text>
     </View>
     <View style={[tw`flex flex-row w-1/2`]}>
     <Text style={[tw`text-center mt-5 ml-3 font-semibold`]}>Charging Duration      </Text>
     <Text style={[tw`text-center mt-5 font-normal mb-2`]}>45 Minutes</Text>
     </View>
     <View style={[tw`flex flex-row w-1/2`]}>
     <Text style={[tw`text-center mt-5 ml-3 font-semibold`]}>Total KwH                   </Text>
     <Text style={[tw`text-center mt-5 font-normal mb-2`]}>122.6 KwH</Text>
     </View>
     <View style={[tw`flex flex-row w-1/2`]}>
     <Text style={[tw`text-center mt-5 ml-3 font-semibold`]}>Status                        </Text>
     <Text style={[tw`text-center mt-5 font-normal mb-2`]}>Finished</Text>
     </View>
     <View style={[tw`flex flex-row w-1/2`]}>
     <Text style={[tw`text-center mt-5 ml-3 font-semibold`]}>Price                          </Text>
     <Text style={[tw`text-center mt-5 font-normal mb-2`]}>IDR 200.000,00</Text>
     </View>
   
     </View>
     </View>
     <TouchableOpacity style={[tw`rounded-xl border-gray-100 bg-gray-100 font-mono font-semibold ml-5 mr-5 mt-5 py-2`]}><Text style={[tw`text-lg text-gray-500 font-bold font-mono ml-23`]}>Print your Invoice</Text></TouchableOpacity>
     </View>
     </ScrollView>
     
  )
}

export default TransactionDetail;