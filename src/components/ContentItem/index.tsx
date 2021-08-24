import React from 'react';
import {GestureResponderEvent} from 'react-native';

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
};

export type AllProductProps = {
  id: string;
  category: string;
  data: ProductProps[];
};

type Props = {
  data: ProductProps;
  onEdit: (event: GestureResponderEvent) => void;
  onDelete: (event: GestureResponderEvent) => void;
};

export const ContentItem: React.FC<Props> = ({data, onEdit, onDelete}) => {
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
        <EditButton onPress={onEdit} />
        <DeleteButton onPress={onDelete} />
      </Container>
      <S.Divider />
    </Background>
  );
};
