import React from 'react';
import { GestureResponderEvent } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {ButtonFinish} from '../ButtonFinish';

import * as S from './styles';

type Props = {
  items: number;
  totalSpent: number;
  onFinish: (event: GestureResponderEvent) => void;
};

export function Info({items, totalSpent, onFinish}: Props) {
  return (
    <S.InfoContainer>
      <S.Container>
        <Icon name="shopping-cart" size={24} color="#FF9C65" />
        <S.InfoText>{items} itens</S.InfoText>
        <Icon name="attach-money" size={24} color="#FF9C65" />
        <S.InfoText>{totalSpent}R$</S.InfoText>
      </S.Container>
      <ButtonFinish onPress={onFinish} />
    </S.InfoContainer>
  );
}
