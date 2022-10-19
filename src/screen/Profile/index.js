import React, {useState} from 'react';

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
  };
  const handleClickEmail = event => {
    setIsShownEmail(current => !current);
  };
  const handleClickNumber = event => {
    setIsShownNumber(current => !current);
  };
  const handleClickPassword = event => {
    setIsShownPassword(current => !current);
  };


  return (
    <ScrollView>
        <View style={[tw`flex flex-row bg-gray-100`]}>
         <View style={[tw`bg-gray-100 mt-5 w-1/4`]}>
          <View style={[tw`flex flex-row bg-gray-100`]}>
          <Text style={[tw`bg-gray-100 text-gray-700 text-xl font-semibold ml-4.7 mt-3`]}>Hyundai</Text>
          <Text style={[tw`bg-gray-100 text-gray-700 text-xl font-semibold ml-1.5 mt-3`]}></Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}><Image style={[tw`h-5 w-5 mt-5.8 ml-57.5 justify-center items-center`]} source={require('../../assets/burger.png')}/></TouchableOpacity>  
        </View>
        <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}><Image style={[tw`h-20 w-20 mt-1 ml-4.5 mb-5 justify-center items-center`]} source={require('../../assets/logo.png')}/></TouchableOpacity> 
        </View>
         <View style={[tw`bg-gray-100 mt-15 ml-2 w-1/4`]}>
          <Text style={[tw`text-gray-700 text-xl font-bold mt-7 ml-7`]}>105</Text>
          <Text style={[tw`text-gray-500 text-lg font-normal ml-5 mb-3`]}>Usaged</Text>
        </View>

        <View style={[tw`bg-gray-100 mt-15 w-1/4`]}>
          <Text style={[tw`text-gray-700 text-xl font-bold mt-7 ml-7`]}>24</Text>
          <Text style={[tw`text-gray-500 text-lg font-normal ml-5 mb-3`]}>Hours</Text>
        </View>
        
        <View style={[tw`bg-gray-100 mt-15 w-1/4`]}>
          <Text style={[tw`text-gray-700 text-xl font-bold mt-7 ml-5`]}>100</Text>
          <Text style={[tw`text-gray-500 text-lg font-normal ml-1 mb-3`]}>Stations</Text>
        </View>

      </View>
      <View style={[tw`h-191 bg-white`]}>
      <View style={[tw`flex flex-col bg-white pl-5 px-5 py-1`]}>
      <View  style={[tw`flex flex-row bg-gray-50`]}>
        <View style={[tw`bg-white`]}><Text onPress={handleClick} style={[tw`mt-2 text-gray-500 text-lg font-bold ml-5`]}>Hyundai</Text></View>
        <TouchableOpacity onPress={handleClick}><Image style={[tw`h-5 w-5 mt-3.5 ml-47 mb-2 justify-center items-center`]} source={require('../../assets/change.png')}/></TouchableOpacity>
      </View>
      {isShown && <Box />}
      </View>
      <View  style={[tw`flex flex-row bg-gray-50`]}>
        <View style={[tw`bg-white`]}><Text onPress={handleClickEmail} style={[tw`mt-2 text-gray-500 text-lg font-bold ml-5 pl-5`]}>Email Address</Text></View>
        <TouchableOpacity onPress={handleClickEmail}><Image style={[tw`h-5 w-5 mt-3.5 ml-36 mb-2 justify-center items-center`]} source={require('../../assets/change.png')}/></TouchableOpacity>
      </View>
      <View>
      {isShownEmail && <Box1 />}
      </View>
      <View  style={[tw`flex flex-row bg-gray-50`]}>
        <View style={[tw`bg-white`]}><Text onPress={handleClickNumber} style={[tw`mt-2 text-gray-500 text-lg font-bold ml-5 pl-5`]}>Phone Number</Text></View>
        <TouchableOpacity onPress={handleClickNumber}><Image style={[tw`h-5 w-5 mt-3.5 ml-37 mb-2 justify-center items-center`]} source={require('../../assets/change.png')}/></TouchableOpacity>
      </View>
      <View>
      {isShownNumber && <Box2 />}
      </View>
      <View  style={[tw`flex flex-row bg-gray-50`]}>
        <View style={[tw`bg-white`]}><Text onPress={handleClickPassword} style={[tw`mt-2 text-gray-500 text-lg font-bold ml-5 pl-5`]}>Password</Text></View>
        <TouchableOpacity onPress={handleClickPassword}><Image style={[tw`h-5 w-5 mt-3.5 ml-44.5 mb-2 justify-center items-center`]} source={require('../../assets/change.png')}/></TouchableOpacity>
      </View>
      <View>
      {isShownPassword && <Box3 />}
      </View>
    </View>
    </ScrollView>
  );
}

function Box(){
  return (
    <><View>
      <TextInput
        placeholder="First Name"
        autoComplete="name-prefix"
        style={[tw`rounded-sm border-2 border-gray-100 bg-white text-base text-gray-500 mt-2 ml-7 mr-7 pl-5 py-1 font-bold `]} />

      <TextInput
        placeholder="Last Name"
        autoComplete="name-suffix"
        style={[tw`rounded-sm border-2 border-gray-100 bg-white text-base text-gray-500 mt-2 ml-7 mr-7 pl-5 py-1 font-bold`]} />
    </View>
        
      <TouchableOpacity onPress={() => props.navigation.navigate("Profile")} style={[tw`border-gray-100 bg-gray-100 font-mono font-semibold mt-2 ml-47 mr-7 mb-2 `]}><Text style={[tw`pl-5 mt-2  ml-3 mb-2 text-gray-500 font-bold`]}>Update</Text></TouchableOpacity>
      </>
  );
}

function Box1 (){
  return (
    <><View>
      <TextInput
        placeholder="Current Email Address"
        autoComplete="email"
        keyboardType="email-address"
        style={[tw`rounded-sm border-2 border-gray-100 bg-white text-base text-gray-500 mt-2 ml-11 mr-12 pl-5 py-1 font-bold`]} 
        />
        
<TextInput
        placeholder="New Email Address"
        autoComplete="email"
        keyboardType="email-address"
        style={[tw`rounded-sm border-2 border-gray-100 bg-white text-base text-gray-500 mt-2 ml-11 mr-12 pl-5 py-1 font-bold`]} />
    </View>
      <TouchableOpacity onPress={() => props.navigation.navigate("Profile")} style={[tw`border-gray-100 bg-gray-100 font-mono font-semibold mt-2 ml-51 mr-12 mb-5`]}><Text style={[tw`pl-5 mt-2 ml-3 mr-7 mb-2 text-gray-500 font-bold`]}>Update</Text></TouchableOpacity>
      </>
  );

}
function Box2 (){
  return (
    <><View>
      <View style={[tw`flex flex-row`]} >
        <Text style={[tw`rounded-sm border-2 border-gray-200 bg-gray-200 text-gray-500 text-center mt-2 ml-11 pl-5 px-5 py-2`]}>+62</Text>
      <TextInput
        placeholder="Phone Number"
        autoComplete="cc-number"
        style={[tw`rounded-sm border-2 border-gray-100 bg-white text-base text-gray-500 mt-2 mr-17 px-25 pl-3 py-1 font-bold`]} />
    </View>
    </View>
      <TouchableOpacity onPress={() => props.navigation.navigate("Profile")} style={[tw`border-gray-100 bg-gray-100 font-mono font-semibold mt-2 ml-51 mr-12 mb-5`]}><Text style={[tw`pl-5 mt-2 ml-3 mr-5 mb-2 text-gray-500 font-bold`]}>Update</Text></TouchableOpacity>
      </>
  );

}
function Box3 (){
  return (
    <><View>
      <TextInput
        placeholder="Current Password"
        autoComplete="password"
        secureTextEntry={true}
        style={[tw`rounded-sm border-2 border-gray-100 bg-white text-base text-gray-500 mt-2 ml-11 mr-12 pl-5 py-1 font-bold`]} />

<TextInput
        placeholder="New Password"
        autoComplete="password-new"
        secureTextEntry={true}
        style={[tw`rounded-sm border-2 border-gray-100 bg-white text-base text-gray-500 mt-2 ml-11 mr-12 pl-5 py-1 font-bold`]} />
    </View>
      <TouchableOpacity onPress={() => props.navigation.navigate("Profile")} style={[tw`border-gray-100 bg-gray-100 font-mono font-semibold mt-2 ml-51 mr-12 mb-5`]}><Text style={[tw`pl-5 mt-2 ml-3 mr-5 mb-2 text-gray-500 font-bold`]}>Update</Text></TouchableOpacity>
      </>
  );

}


export default (Profile);
