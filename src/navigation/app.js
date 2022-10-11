import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import Icon from 'react-native-vector-icons/Feather';
// import Header from '../component/navbar';

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

import Home from '../screen/Home';
// import Profile from '../screen/Profile'

// import DrawerContent from '../component/DrawerContent';
import Profile from '../screen/Profile';
// import Ticket from '../screen/Ticket';
// import Midtrans from '../screen/Midtrans';

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Home}
        name="Home"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={Profile}
        name="Profile"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
