import React, { useState} from 'react';

// import {useDispatch} from 'react-redux';
// import {getAllMovie} from '../../store/action/movie';
// import {REACT_APP_LINK_CLOUDINARY} from '@env';
import {
  View,
  Text,
  // StyleSheet,
  TouchableOpacity,
  Button,
  ScrollView,
  TextInput,
  Image,
  // RefreshControl,
  // ActivityIndicator,
  // FlatList,
} from 'react-native';

import tw from 'twrnc';

function Profile(props) {
  const [isShown, setIsShown] = useState(false);
  const [isShownEmail, setIsShownEmail] = useState(false);
  const [isShownNumber, setIsShownNumber] = useState(false);
  const [isShownPassword, setIsShownPassword] = useState(false);
  const handleClick = event => {
    setIsShown(current => !current);
    setIsShownEmail(false);
    setIsShownNumber(false);
    setIsShownPassword(false);
  };
  const handleClickEmail = event => {
    setIsShownEmail(current => !current);
    setIsShown(false);
    setIsShownNumber(false);
    setIsShownPassword(false);
  };
  const handleClickNumber = event => {
    setIsShownNumber(current => !current);
    setIsShown(false);
    setIsShownPassword(false);
    setIsShownEmail(false);
  };
  const handleClickPassword = event => {
    setIsShownPassword(current => !current);
    setIsShown(false);
    setIsShownEmail(false);
    setIsShownNumber(false);
  };
  

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[tw`flex flex-row bg-gray-100`]}>
         <View style={[tw`bg-gray-100 mt-5 w-1/4`]}>
          <View style={[tw`flex flex-row bg-gray-100`]}>
          <Text style={[tw` bg-gray-100 text-gray-700 text-lg font-semibold ml-3 mt-3 mb-2 w-85 pl-2`]}>Hyundai Mobile App</Text>
        </View>
        <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}><Image style={[tw`h-20 w-20 mt-1 ml-4.5 mb-5 justify-center items-center`]} source={require('../../assets/logo.png')}/></TouchableOpacity> 
        </View>
         <View style={[tw`bg-gray-100 mt-15 ml-2 w-1/4`]}>
          <Text style={[tw`text-gray-700 text-xl font-bold mt-6.7 ml-7`]}>105</Text>
          <Text style={[tw`text-gray-500 text-lg font-normal ml-5 mb-3`]}>Usaged</Text>
        </View>

        <View style={[tw`bg-gray-100 mt-15 w-1/4`]}>
          <Text style={[tw`text-gray-700 text-xl font-bold mt-6.7 ml-7`]}>24</Text>
          <Text style={[tw`text-gray-500 text-lg font-normal ml-5 mb-3`]}>Hours</Text>
        </View>
        
        <View style={[tw`bg-gray-100 mt-15 w-1/4`]}>
          <Text style={[tw`text-gray-700 text-xl font-bold mt-6.7 ml-5`]}>100</Text>
          <Text style={[tw`text-gray-500 text-lg font-normal ml-1 mb-3`]}>Stations</Text>
        </View>

      </View>
      <View style={[tw`h-full bg-gray-50`]}>
      <View  style={[tw`flex flex-row bg-gray-100`]}>
        <View style={[tw`bg-gray-100`]}><Text style={[tw`mt-2 text-gray-500 text-lg font-bold ml-5 pl-5`]}>Hyundai</Text></View>
        <TouchableOpacity onPress={handleClick} style={[tw`border-gray-100 bg-gray-200 font-mono font-semibold ml-50 mt-2 mb-3 p-2 `]}><Text style={[tw`text-gray-500 font-bold ml-1`]}>{isShown ? 'Cancel' : 'Change'}</Text></TouchableOpacity>
      </View>
      {isShown && <Box />}
    
      <View  style={[tw`flex flex-row bg-gray-100`]}>
        <View style={[tw`bg-gray-100`]}><Text style={[tw`mt-2 text-gray-500 text-lg font-bold ml-5 pl-5`]}>Blecky@gmail.com</Text></View>
        <TouchableOpacity  onPress={handleClickEmail} style={[tw`border-gray-100 bg-gray-200 font-mono font-semibold ml-27 mt-2 mb-3 p-2 `]}><Text style={[tw`text-gray-500 font-bold ml-1`]}>{isShownEmail ? 'Cancel' : 'Change'}</Text></TouchableOpacity>
      </View>
      <View>
      {isShownEmail && <Box1 />}
      </View>
      <View  style={[tw`flex flex-row bg-gray-100`]}>
        <View style={[tw`bg-gray-100`]}><Text  style={[tw`mt-2 text-gray-500 text-lg font-bold ml-5 pl-5`]}>+62895990090090</Text></View>
        <TouchableOpacity onPress={handleClickNumber} style={[tw`border-gray-100 bg-gray-200 font-mono font-semibold ml-27 mt-2 mb-3 p-2  `]}><Text style={[tw`text-gray-500 font-bold ml-1`]}>{isShownNumber ? 'Cancel' : 'Change'}</Text></TouchableOpacity>
      </View>
      <View>
      {isShownNumber && <Box2 />}
      </View>
      <View  style={[tw`flex flex-row bg-gray-100`]}>
        <View style={[tw`bg-gray-100`]}><Text style={[tw`mt-2 text-gray-500 text-lg font-bold ml-5 pl-5`]}>Password</Text></View>
        <TouchableOpacity onPress={handleClickPassword}  style={[tw`border-gray-100 bg-gray-200 font-mono font-semibold ml-46 mt-2 mb-3 p-2 `]}><Text style={[tw`text-gray-500 font-bold ml-1`]}>{isShownPassword ? 'Cancel' : 'Change'}</Text></TouchableOpacity>
      </View>
      <View>
      {isShownPassword && <Box3 />}
      </View>
      <Text style={[tw`text-gray-500 text-center text-xl font-bold font-mono mt-5 mb-3`]}>Your Stats of the Month</Text>
      <TouchableOpacity style={[tw`rounded-xl bg-gray-200 w-93 h-93 ml-5 mb-5 justify-center items-center`]}></TouchableOpacity>
    </View>
    </ScrollView>
  );
}

function Box(){
  return (
    <View style={[tw`bg-gray-100`]}>
      <TextInput
        placeholder="First Name"
        autoComplete="name-prefix"
        style={[tw`rounded-sm border-2 border-gray-50 bg-white text-base text-gray-500 mt-2 ml-11 mr-11 pl-5 py-1 font-bold `]} />

      <TextInput
        placeholder="Last Name"
        autoComplete="name-suffix"
        style={[tw`rounded-sm border-2 border-gray-50 bg-white text-base text-gray-500 mt-2 ml-11 mr-11 pl-5 py-1 font-bold`]} />

    <TouchableOpacity style={[tw` border-2 border-gray-100 bg-gray-200 font-mono font-semibold ml-11 mr-11 mt-2 mb-2 py-1`]}><Text style={[tw`text-base text-center text-gray-500 font-bold font-mono`]}>Submit</Text></TouchableOpacity>

    </View>
  );
}

function Box1 (){
  return (
    <View style={[tw`bg-gray-100`]}>
      <TextInput
        placeholder="Current Email Address"
        autoComplete="email"
        keyboardType="email-address"
        style={[tw`rounded-sm border-2 border-gray-50 bg-gray-50 text-base text-gray-500 mt-2 ml-11 mr-12  pl-5 py-1 font-bold`]} 
        />
        
<TextInput
        placeholder="New Email Address"
        autoComplete="email"
        keyboardType="email-address"
        style={[tw`rounded-sm border-2 border-gray-50 bg-gray-50 text-base text-gray-500 mt-2 ml-11 mr-12 pl-5 py-1 font-bold`]} />

<TouchableOpacity  style={[tw` border-2 border-gray-100 bg-gray-200 font-mono font-semibold mt-2 ml-11 mr-12 mb-2 py-1`]}><Text style={[tw`text-base text-center text-gray-500 font-bold font-mono`]}>Submit</Text></TouchableOpacity>
    </View>
   
      
  );

}
function Box2 (){
  return (
    <View style={tw`bg-gray-100`}>
      <View style={[tw`flex flex-row mb-2`]} >
        <Text style={[tw`rounded-sm border-2 border-gray-100 bg-gray-50 text-gray-500 text-center mt-2 ml-11 pl-5 px-5 py-3`]}>+62</Text>
      <TextInput
        placeholder="Phone Number"
        keyboardType="number-pad"
        maxLength={12}
        autoComplete="tel"
        style={[tw`rounded-sm border-2 border-gray-100 bg-gray-50 text-base text-gray-500 mt-2 mr-17.9 px-17 pl-3 py-1 font-bold`]} />
    </View>
    <TouchableOpacity  style={[tw` border-2 border-gray-100 bg-gray-200 font-mono font-semibold ml-11 mr-13 mb-2 py-1`]}><Text style={[tw`text-base text-center text-gray-500 font-bold font-mono`]}>Submit</Text></TouchableOpacity>
    </View>
    
  );

}
function Box3 (){
  return (
    <View  style={tw`bg-gray-100`}>
      <TextInput
        placeholder="Current Password"
        autoComplete="password"
        secureTextEntry={true}
        style={[tw`rounded-sm border-2 border-gray-100 bg-gray-50 text-base text-gray-500 mt-2 ml-11 mr-12 pl-5 py-1 font-bold`]} />

<TextInput
        placeholder="New Password"
        autoComplete="password-new"
        secureTextEntry={true}
        style={[tw`rounded-sm border-2 border-gray-100 bg-gray-50 text-base text-gray-500 mt-2 ml-11 mr-12 pl-5 py-1 font-bold`]} />
<TouchableOpacity  style={[tw` border-2 border-gray-100 bg-gray-200 font-mono font-semibold  mt-2 ml-11 mr-12 mb-2 py-1`]}><Text style={[tw`text-base text-center text-gray-500 font-bold font-mono`]}>Submit</Text></TouchableOpacity>

    </View>
      
  );

}


export default (Profile);
