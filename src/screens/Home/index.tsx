import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Header} from '../../components/Header';
import {Info} from '../../components/Info';
import {SearchArea} from '../../components/SearchArea';

import * as S from './styles';
import {Content} from '../../components/Content';

export function Home() {
  const navigation = useNavigation();
  const {currentUser} = useSelector((state) => state.user);
  const [search, setSearch] = useState('');

  function handleAddItem() {
    navigation.navigate('AddItem');
  }

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
      <Info items={11} totalSpent={200} />
      <Content />
      <S.FABPlus icon="plus" onPress={handleAddItem} color="#FFFFFF" />
    </S.Background>
  );
}
