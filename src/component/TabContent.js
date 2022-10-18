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
    <View style={[tw`rounded-sm bg-gray-400 h-18.7 flex-row items-center`]}>
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
            ? <Icon style={{textAlign:'center'}} name='home' size={isFocused ? 30 : 25} color={isFocused ? '#ffff' : '#fafafa'} />
            : options.tabBarLabel === 'Find Station'
            ? <Icon style={{textAlign:'center'}} name='ev-station' size={isFocused ? 30 : 25} color={isFocused ? '#ffff' : '#fafafa'} />
            : options.tabBarLabel === 'History'
            ? <Icon style={{textAlign:'center'}} name='history-edu' size={isFocused ? 30 : 25} color={isFocused ? '#ffff' : '#ffff'} />
            :<Icon style={{textAlign:'center'}} name='person' size={isFocused ? 30 : 25} color={isFocused ? '#ffff' : '#ffff'} />

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
            <View style={[tw`text-center`]}>
              {Icons}
            </View>
            <Text style={[{ color: isFocused ? '#ffff' : '#fafafa' }, tw`text-center text-lg`]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default (MyTabBar)
