import {useNavigation} from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as S from './styles';
import {theme} from '../../global/styles/theme';
import {Header} from '../Header';

type Props = {
  onDone(): void;
};

export function HeaderNav({onDone}: Props) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <S.HeaderContainer>
      <S.ButtonLeftArrow onPress={handleGoBack}>
        <Icon name="chevron-left" size={30} color={theme.colors.secondary100} />
      </S.ButtonLeftArrow>
      <Header title="New Item" />
      <S.ButtonDone onPress={onDone}>
        <Icon name="done" size={30} color={theme.colors.secondary100} />
      </S.ButtonDone>
    </S.HeaderContainer>
  );
}
