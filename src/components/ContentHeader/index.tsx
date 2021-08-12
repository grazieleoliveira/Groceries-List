import React from 'react';
import {View} from 'react-native';
import * as S from './styles';

type Props = {
  title: String;
};

export function ContentHeader({title}: Props) {
  return (
    <View>
      <S.TextTitle>{title}</S.TextTitle>
    </View>
  );
}
