import React from 'react';
import {TextInputProps} from 'react-native';

import * as S from './styles';

export function SearchArea({...rest}: TextInputProps) {
  return (
    <S.SearchContainer>
      <S.SearchArea {...rest} />
    </S.SearchContainer>
  );
}
