import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {HeaderNav} from '../../components/HeaderNav';
import {Background} from '../Home/styles';
import * as S from './styles';

export function Profile() {
  const navigation = useNavigation();
  async function handleDone() {
    navigation.navigate('Home');
  }

  return (
    <Background>
      <HeaderNav title="Profile" onDone={handleDone} />
      <S.ProfileImage />
      <S.ProfileEmail>sample@gmail.com</S.ProfileEmail>
      <S.EditButton activeOpacity={0.7}>
        <S.EditButtonText>Edit</S.EditButtonText>
      </S.EditButton>
    </Background>
  );
}
