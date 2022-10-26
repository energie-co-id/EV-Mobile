import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/MaterialIcons";

const Stack = createNativeStackNavigator();

import Home from '../screen/Home';
import History from '../screen/History';
import Map from '../screen/Map';
import TabContent from '../component/TabContent'
import BarcodeScanner from '../screen/BarcodeScanner';
import Charge from '../screen/Charge';
import Live from '../screen/Live';

const Tab = createBottomTabNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Home}
        name="HomeStack"
        options={{headerShown: false}}
      />
      
      
    </Stack.Navigator>
  );
}

function MapStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Map}
        name="MapStack"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={BarcodeScanner}
        name="BarcodeScanner"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={Charge}
        name="Charge"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={Live}
        name="Live"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function HistoryStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={History}
        name="HistoryStack"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function AppNavigator() {
  return (
    <Tab.Navigator
      tabBar={props => <TabContent {...props} />}
      screenOptions={{
        headerShown:false
      }}>
      <Tab.Screen 
        name="Map" 
        component={MapStackScreen}
        options={{
          tabBarLabel: 'Station',
        }}
      />
      <Tab.Screen 
        name="Home" 
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen 
        name="History" 
        component={HistoryStackScreen}
        options={{
          tabBarLabel: 'History',
        }}
      />
    </Tab.Navigator>
  );
}

export default AppNavigator;
