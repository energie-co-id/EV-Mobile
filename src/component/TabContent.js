import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import Icon from "react-native-vector-icons/MaterialIcons";

function MyTabBar({ state, descriptors, navigation }) {
  const textActive = tw`text-center text-white text-3xl rounded-full`
  const textNotActive = tw`text-center text-gray-500 text-2xl mt-3`
  return (
    <View style={[tw`items-center`]}>
      <View style={[tw`absolute bg-gray-300 h-20 w-90 flex-row bottom-3 rounded-xl`]}>
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
              ? <Icon style={isFocused ? textActive : textNotActive} name='home' />
              : options.tabBarLabel === 'Station'
              ? <Icon style={isFocused ? textActive : textNotActive} name='ev-station' />
              : options.tabBarLabel === 'History'
              ? <Icon style={isFocused ? textActive : textNotActive} name='history-edu' />
              :<Icon style={isFocused ? textActive : textNotActive} name='person'/>

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
              style={ isFocused ? tw`flex-1 bg-indigo-500 -mt-2 rounded-full mb-4 mx-6 pt-1 pb-4` : tw`flex-1 mx-6`}
            >
              <View>
                {Icons}
              </View>
              <Text style={[{ color: isFocused ? 'white' : 'gray' }, tw`text-center text-sm`]}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

export default (MyTabBar)
