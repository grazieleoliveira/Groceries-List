import React, {ReactNode} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';

import * as S from './styles';

type Props = {
  title: string;
  action?: ReactNode;
};

export function Header({title, action}: Props) {
  // Navegar paginas, colocar na outra
  // const navigation = useNavigation();

  // function handleGoBack(){
  //   navigation.goBack();
  // }

  const navigation = useNavigation();

  function handleNavigate() {
    navigation.navigate('Login');
  }

  if (title === 'Grocery List') {
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
