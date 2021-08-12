import React from 'react';
import {TextInputProps} from 'react-native';

import * as S from './styles';

export function TextArea({...rest}: TextInputProps) {
  return (
    <S.TextAreaContainer>
      <S.TextArea {...rest} />
    </S.TextAreaContainer>
  );
}
