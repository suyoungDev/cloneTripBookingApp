import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/'
import { COLORS, icons } from '../constants';
import { bookmark, search, user } from '../constants/icons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return(
    <Tab.Navigator
      tabBarOptions={{showLabel: false}}
      screenOptions={({route}) => ({
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? COLORS.primary : COLORS.gray;

          switch (route.name) {
            case "Home":
              return (
                <Image 
                  source={icons.home}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 30,
                    height: 30
                  }}
                />
              )
            case "Search":
              return (
                <Image 
                  source={icons.search}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 30,
                    height: 30
                  }}
                />
              )
            case "Bookmark":
              return (
                <Image 
                  source={icons.bookmark}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 30,
                    height: 30
                  }}
                />
              )
            case "Account":
              return (
                <Image 
                  source={icons.user}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 30,
                    height: 30
                  }}
                />
              )
          }
        }
      })}
    >

      <Tab.Screen
        name="Home"
        component={Home}
      />
      <Tab.Screen
        name="Search"
        component={Home}
      />
      <Tab.Screen
        name="Bookmark"
        component={Home}
      />
      <Tab.Screen
        name="Account"
        component={Home}
      />
    </Tab.Navigator>
  )
}

export default Tabs;
