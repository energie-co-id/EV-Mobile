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
  const handleClick = event => {
    setIsShown(current => !current);
  };

  return (
    <ScrollView>
        <View style={[tw`flex flex-row bg-gray-100`]}>
         <View style={[tw`bg-gray-100 mt-5 ml-0.21 w-1/4`]}>
          <View style={[tw`flex flex-row bg-gray-100`]}>
           <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}><Image style={[tw`h-5 w-5 mt-5.8 ml-59.5 justify-center items-center`]} source={require('../../assets/burger.png')}/></TouchableOpacity>  
        </View>
        <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}><Image style={[tw`h-20 w-20 mt-5 ml-3 justify-center items-center`]} source={require('../../assets/logo.png')}/></TouchableOpacity> 
        <Text style={[tw`text-gray-700 text-xl font-semibold ml-9 mb-3`]}>Lucy</Text>
        </View>
         <View style={[tw`bg-gray-100 mt-15 w-1/4`]}>
          <Text style={[tw`text-gray-700 text-xl font-bold mt-15 ml-7`]}>105 K</Text>
          <Text style={[tw`text-gray-500 text-lg font-normal ml-5 mb-3`]}>Charged</Text>
        </View>

        <View style={[tw`bg-gray-100 mt-15 w-1/4`]}>
          <Text style={[tw`text-gray-700 text-xl font-bold mt-15 ml-7`]}>5 H</Text>
          <Text style={[tw`text-gray-500 text-lg font-normal ml-5 mb-3`]}>Spent</Text>
        </View>
        
        <View style={[tw`bg-gray-100 mt-15 w-1/4`]}>
          <Text style={[tw`text-gray-700 text-xl font-bold mt-15 ml-7`]}>100</Text>
          <Text style={[tw`text-gray-500 text-lg font-normal ml-3 mb-3`]}>Stations</Text>
        </View>

      </View>
        
      <View style={[tw`h-131 bg-white`]}>
        
      <View style={[tw`flex flex-col bg-white p-5`]}>
      <View style={[tw`flex flex-row`]}>
        <View style={[tw`bg-white`]}><Text style={[tw`mt-2 text-gray-700 text-2xl font-bold ml-5`]}>Edit Profile</Text></View>
        <TouchableOpacity  onPress={handleClick}><Image style={[tw`h-5 w-5 mt-4.7 ml-1.7 mb-2 justify-center items-center`]} source={require('../../assets/dropdown.png')}/></TouchableOpacity>
      </View>
      {isShown && <Box />}
      </View>
    </View>
    </ScrollView>
  );
}

function Box(){
  return (
    <><View style={[tw`flex flex-row`]}>
      <TextInput
        placeholder="First Name"
        style={[tw`rounded-sm border-2 border-gray-100 bg-gray-100 text-base text-gray-500 mt-2 ml-7 mr-1 pl-5 font-bold w-35`]} />

      <TextInput
        placeholder="Last Name"
        style={[tw`rounded-sm border-2 border-gray-100 bg-gray-100 text-base text-gray-500 mt-2 pl-5 font-bold w-30`]} />
    </View><View style={[tw`flex flex-row`]}>
        <TextInput
          placeholder="Email Address"
          autoComplete="email"
          keyboardType="email-address"
          style={[tw`rounded-sm border-2 border-gray-100 bg-gray-100 text-base text-gray-500 mt-2 ml-7 mr-1 pl-5 font-bold w-35`]} 
          onChangeText={newText => setMail(newText)}
          />
    
        <TextInput
          placeholder="Phone Number"
          style={[tw`rounded-sm border-2 border-gray-100 bg-gray-100 text-base text-gray-500 mt-2 pl-5  font-bold w-30`]} />
      </View><TextInput
        placeholder="Password"
        autoComplete="password"
        secureTextEntry={true}
        onChangeText={newText => setPassword(newText)}
        style={[tw`rounded-sm border-2 border-gray-100 bg-gray-100 text-base text-gray-500 mt-2 ml-7 mr-7 pl-5 font-bold`]} /><View style={[tw`rounded-sm p-1 font-mono font-semibold mt-3 ml-45 mr-7`]}>
        
        <Button title="Upload file" color={'#F3F4F6'} onPress={() => this._handlePress()} />

      </View></>
  );
}



export default (Profile);
