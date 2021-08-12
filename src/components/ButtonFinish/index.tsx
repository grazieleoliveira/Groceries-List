import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

import * as S from './style';

export function ButtonFinish({...rest}: TouchableOpacityProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} {...rest}>
      <S.InfoText>Finish</S.InfoText>
    </TouchableOpacity>
  );
}
