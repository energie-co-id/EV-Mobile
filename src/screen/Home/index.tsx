import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import tw from 'tailwind-react-native-classnames'

function Home(props) {
  return (
    // <View style={[tw`flex flex-row items-center h-8 bg-red-900 `,{
    //   position: "fixed"
    // }]}>

      // <View style={[tw`flex flex-row justify-between items-center h-8 p-2 w-full bg-red-900 `,{
      //   position: "absolute"
      // }]}>
      <View style={[tw`bg-indigo-900 w-full`]}>
        <Text numberOfLines={1} style={[tw`font-bold w-full text-white`]} >
          Home
        </Text>
    {/* </View> */}
     <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}><Text>profile</Text></TouchableOpacity>

      </View>
    
    // </View>
  )
}

export default Home

// import React from 'react';
// import { withExpoSnack } from 'nativewind';
// import Footer from '../../component/footer';
// // import {useDispatch} from 'react-redux';
// // import {getAllMovie} from '../../store/action/movie';
// // import {REACT_APP_LINK_CLOUDINARY} from '@env';
// import {
//   View,
//   Text,
//   // StyleSheet,
//   TouchableOpacity,
//   // Button,
//   ScrollView,
//   // TextInput,
//   // Image,
//   // RefreshControl,
//   // ActivityIndicator,
//   // FlatList,
// } from 'react-native';

// import { styled } from "nativewind";

// const StyledView = styled(View);
// const StyledText = styled(Text);
// const StyledTouch = styled(TouchableOpacity);


// function Home(props) {

//   return (
//     <ScrollView>
//       <StyledTouch className='bg-slate-200 rounded-2xl h-60 m-5 active:bg-slate-100'>
//         <StyledText className='text-black dark:text-white text-8xl text-center m-5'>
//           Home
//         </StyledText>
//       </StyledTouch>
//       <Footer/>
//     </ScrollView>
//   );
// }


// export default withExpoSnack(Home);
