import React from 'react';
import {createStackNavigator} from '@react-navigation/stack/';

import {theme} from '../global/styles/theme';

import {Home} from '../screens/Home';
import {AddItem} from '../screens/AddItem';
import {Login} from '../screens/Login';
import {Profile} from '../screens/Profile';
import {HOME, LOGIN, ADD_ITEM, PROFILE} from '../constants/routes';

const {Navigator, Screen} = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondary50,
        },
      }}>
      <Screen name={HOME} component={Home} options={{headerShown: false}} />
      <Screen
        name={ADD_ITEM}
        component={AddItem}
        options={{headerShown: false}}
      />
      <Screen name={LOGIN} component={Login} options={{headerShown: false}} />
      <Screen
        name={PROFILE}
        component={Profile}
        options={{headerShown: false}}
      />
    </Navigator>
  );
}
