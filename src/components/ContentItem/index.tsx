import React from 'react';
import {GestureResponderEvent, View} from 'react-native';

import {cloneDeep} from 'lodash';

import {useDispatch, useSelector} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Container} from './styles';
import * as S from './styles';
import {Background} from '../../screens/Home/styles';
import {EditButton} from '../EditButton';
import {DeleteButton} from '../DeleteButton';
import {informationGroceryAction} from '../../store/ducks/grocery';
import {theme} from '../../global/styles/theme';

export type ProductProps = {
  id: string;
  name: string;
  quantity: string;
  price: string;
  isChecked: boolean;
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
  const dispatch = useDispatch();

  const {groceryList} = useSelector((state: any) => state.grocery);

  const checkItem = () => {
    const newList = cloneDeep(groceryList);

    newList.map((currentCategory: AllProductProps) => {
      currentCategory.data.map((currentItem: ProductProps) => {
        if (currentItem.id === data.id) {
          currentItem.isChecked = !currentItem.isChecked;
        }
        return null;
      });
      return null;
    });

    dispatch(informationGroceryAction(newList));
  };

  return (
    <Background>
      <Container>
        <S.CheckItem onPress={checkItem}>
          {data.isChecked && (
            <MaterialCommunityIcons
              name="check-bold"
              size={20}
              color={theme.colors.secondary80}
            />
          )}
        </S.CheckItem>
        <S.InfoContainer>
          {data.isChecked ? (
            <View style={{flex: 1}}>
              <S.TextItemNameStrike>{data.name} </S.TextItemNameStrike>
            </View>
          ) : (
            <View style={{flex: 1, width: '100%'}}>
              <S.TextItemName>{data.name} </S.TextItemName>
            </View>
          )}
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
