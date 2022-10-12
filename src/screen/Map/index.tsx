import React from 'react';
import { withExpoSnack } from 'nativewind';
import Footer from '../../component/footer';
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
  // Image,
  // RefreshControl,
  // ActivityIndicator,
  // FlatList,
} from 'react-native';

import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouch = styled(TouchableOpacity);


function Map(props) {

  return (
    <ScrollView>
      <StyledTouch className='bg-slate-200 rounded-2xl h-60 m-5 active:bg-slate-100'>
        <StyledText className='text-black dark:text-white text-8xl text-center m-5'>
          Map
        </StyledText>
      </StyledTouch>
      <Footer/>
    </ScrollView>
  );
}


export default withExpoSnack(Map);
