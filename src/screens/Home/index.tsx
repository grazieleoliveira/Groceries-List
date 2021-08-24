import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Header} from '../../components/Header';
import {Info} from '../../components/Info';
import {SearchArea} from '../../components/SearchArea';

import * as S from './styles';
import {Content} from '../../components/Content';
import {CATEGORIES} from '../../utils/categories';
import {resetInfoGroceryAction} from '../../store/ducks/grocery';
import {cloneDeep} from 'lodash';

export function Home() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {currentUser} = useSelector((state) => state.user);
  const [search, setSearch] = useState('');

  function handleAddItem() {
    navigation.navigate('AddItem', {item: null});
  }

  const onFinish = () => {
    const newList = CATEGORIES;

    console.tron.log('Item', newList);
    dispatch(resetInfoGroceryAction(newList));
  };

  return (
    <S.Background>
      <Header
        title={`${
          currentUser?.fullName ? currentUser.fullName : `Groceries`
        } List`}
        type="Home"
      />

      <SearchArea
        maxLength={50}
        autoCorrect={false}
        onChangeText={setSearch}
        placeholder="Search"
      />
      <Info items={11} totalSpent={200} onFinish={() => onFinish()} />
      <Content />
      <S.FABPlus icon="plus" onPress={handleAddItem} color="#FFFFFF" />
    </S.Background>
  );
}
