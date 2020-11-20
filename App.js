import React from 'react';
import {
  Image,
  TouchableOpacity,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { icons, COLORS, SIZES } from './constants';

// Screens
import {Onboarding, DestinationDetail } from './screens/';

// Tabs
import Tabs from './navigation/tabs';


const theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const Stack = createStackNavigator();

const App = () =>{
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator 
        initialRouteName={'Onboarding'}
      >
        {/* Screen */}
        <Stack.Screen 
          name="Onboarding"
          component={Onboarding}
          options={{
            title: null,
            headerStyle: {
              backgroundColor: COLORS.white
            },
            headerLeft: null,
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: SIZES.padding }}
                onPress={() => navigation.navigate('Home')}
              >
                <Image 
                  source={icons.barMenu}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                  }}
                  />
              </TouchableOpacity>
            )
          }}
        />

        {/* tabs */}
        <Stack.Screen 
          name="Home"
          component={Tabs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default () => {
  return <App />
}