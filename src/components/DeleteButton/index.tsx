import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../../global/styles/theme';

export function DeleteButton({...rest}: TouchableOpacityProps) {
  return (
    <TouchableOpacity {...rest}>
      <MaterialCommunityIcons
        name="trash-can-outline"
        size={30}
        color={theme.colors.secondary80}
      />
    </TouchableOpacity>
  );
}
