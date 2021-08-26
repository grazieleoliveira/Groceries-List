import React, {ReactNode} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';

import * as S from './styles';
import { PROFILE } from '../../constants/routes';

type Props = {
  title: string;
  type: string
};

export function Header({title, type}: Props) {
  // Navegar paginas, colocar na outra
  // const navigation = useNavigation();

  // function handleGoBack(){
  //   navigation.goBack();
  // }

  const navigation = useNavigation();

  function handleNavigate() {
    navigation.navigate(PROFILE);
  }

  if (type === 'Home') {
    return (
      <S.Container>
        <S.ProfileTouchable onPress={handleNavigate}>
          <View>
            <S.Profile />
          </View>
        </S.ProfileTouchable>
        <S.TextTitle>{title}</S.TextTitle>

        {/* {
          action 
          ? 
          <View>
            { action }
          </View>
          :
          <View style={{ width: 24 }}/>
        } */}
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.TextTitle>{title}</S.TextTitle>
    </S.Container>
  );
}
