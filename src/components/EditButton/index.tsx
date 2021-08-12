import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {theme} from '../../global/styles/theme';

export function EditButton({...rest}: TouchableOpacityProps) {
  return (
    <TouchableOpacity>
      <MaterialIcons name="edit" size={30} color={theme.colors.secondary80} />
    </TouchableOpacity>
  );
}
