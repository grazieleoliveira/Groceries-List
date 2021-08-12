import React from 'react';
import {Platform} from 'react-native';
import * as S from './styles';

export function Login() {
  return (
    <S.AvoidView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <S.LoginContainer>
        <S.LoginMainText>Login</S.LoginMainText>
        <S.UserInput placeholder="Usuário" />
        <S.UserInput placeholder="Senha" />
        <S.ButtonLogin activeOpacity={0.7}>
          <S.TextLogin>Login</S.TextLogin>
        </S.ButtonLogin>
      </S.LoginContainer>
    </S.AvoidView>
  );
}
