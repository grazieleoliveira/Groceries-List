import React from 'react';
import {View, Text} from 'react-native';
import {Container} from './styles';

import * as S from './styles';
import {Background} from '../../screens/Home/styles';
import {EditButton} from '../EditButton';
import {DeleteButton} from '../DeleteButton';

export type ProductProps = {
  id: string;
  name: string;
  quantity: string;
  price: string;
  category: string;
};

export type AllProductProps = {
  category: string;
  data: ProductProps[];
};

type Props = {
  data: ProductProps;
};

export function ContentItem({data}: Props) {
  return (
    <Background>
      <Container>
        <S.CheckItem />
        <S.InfoContainer>
          <S.TextItemName>{data.name} </S.TextItemName>
          <S.TextPriceUnd>
            {data.quantity} unid. — {data.price}R$
          </S.TextPriceUnd>
        </S.InfoContainer>
        <EditButton />
        <DeleteButton />
      </Container>
      <S.Divider />
    </Background>
  );
}
