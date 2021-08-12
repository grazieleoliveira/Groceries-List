import React from 'react';
import { createStackNavigator } from '@react-navigation/stack/';

import { theme } from '../global/styles/theme';

import { Home } from '../screens/Home';
import { AddItem } from '../screens/AddItem';
import { Login } from '../screens/Login';


const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return(
    <Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondary50
        }
      }}
    >     
      <Screen 
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Screen
        name="AddItem"
        component={AddItem}
        options={{headerShown: false}}
      />
      <Screen 
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />    
    </Navigator>
  )
}