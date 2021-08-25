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

  const {groceryList} = useSelector((state) => state.grocery);
  const {currentUser} = useSelector((state) => state.user);
  const [search, setSearch] = useState('');
  const [cartItems, setCartItems] = useState(0);
  const [priceItems, setPriceItems] = useState(0);

  useEffect(() => {
    let sumQtd = 0;
    let sumPrice = 0;
    const newList = cloneDeep(groceryList);

    newList.map((currentCategory) => ({
      itemPrice: currentCategory.data.forEach((item) => {
        sumQtd += parseInt(item.quantity, 10);
        sumPrice += parseInt(item.price, 10);
      }),
    }));

    setCartItems(sumQtd);
    setPriceItems(sumPrice);
  }, [groceryList]);

  function handleAddItem() {
    navigation.navigate('AddItem', {item: null});
  }

  const onFinish = () => {
    dispatch(resetInfoGroceryAction());
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
      <Info
        items={cartItems}
        totalSpent={priceItems}
        onFinish={() => onFinish()}
      />
      <Content />
      <S.FABPlus icon="plus" onPress={handleAddItem} color="#FFFFFF" />
    </S.Background>
  );
}
