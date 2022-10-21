import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/MaterialIcons";

const Stack = createNativeStackNavigator();

import Home from '../screen/Home';
import History from '../screen/History';
import Map from '../screen/Map';
import TabContent from '../component/TabContent'


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
        name="Home" 
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, focused}) => (
            <Icon name='home' size={focused ? 30 : 25} color={color} />
          )
        }}
      />
      <Tab.Screen 
        name="Map" 
        component={MapStackScreen}
        options={{
          tabBarLabel: 'Find Station',
          tabBarIcon: ({color, focused}) => (
            <Icon name='ev-station' size={focused ? 30 : 25} color={color} />
          )
        }}
      />
      <Tab.Screen 
        name="History" 
        component={HistoryStackScreen}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({color, focused}) => (
            <Icon name='history-edu' size={focused ? 30 : 25} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default AppNavigator;
