import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import Icon from "react-native-vector-icons/MaterialIcons";
import Home from '../screen/Home';

function MyTabBar({ state, descriptors, navigation }) {
  // console.log(state)
  // console.log(descriptors)
  // console.log(navigation)
  return (
    <View style={[tw`bg-gray-400 h-20 flex-row items-center`]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        console.log(options.tabBarIcon)

        const isFocused = state.index === index;

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const Icons =
          options.tabBarLabel === 'Home'
            ? <Icon style={{textAlign:'center'}} name='home' size={isFocused ? 30 : 25} color={isFocused ? '#673ab7' : '#222'} />
            : options.tabBarLabel === 'Find Station'
            ? <Icon name='ev-station' size={isFocused ? 30 : 25} color={isFocused ? '#673ab7' : '#222'} />
            : options.tabBarLabel === 'History'
            ? <Icon name='history-edu' size={isFocused ? 30 : 25} color={isFocused ? '#673ab7' : '#222'} />
            :<Icon name='person' size={isFocused ? 30 : 25} color={isFocused ? '#673ab7' : '#222'} />

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <View style={[tw`bg-black text-center`]}>
              {Icons}
            </View>
            <Text style={[{ color: isFocused ? '#673ab7' : '#222' }, tw`text-center text-lg`]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default (MyTabBar)
