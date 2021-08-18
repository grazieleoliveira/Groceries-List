import React, {useState} from 'react';
import {Platform} from 'react-native';
import {useDispatch} from 'react-redux';
import {loginAction} from '../../store/ducks/user';
import * as S from './styles';

export function Login() {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    dispatch(loginAction(username, password));
  };

  return (
    <S.AvoidView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <S.LoginContainer>
        <S.LoginMainText>Login</S.LoginMainText>
        <S.UserInput
          placeholder="Usuário"
          value={username}
          onChangeText={setUsername}
        />
        <S.UserInput
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
        />
        <S.ButtonLogin activeOpacity={0.7} onPress={() => login()}>
          <S.TextLogin>Login</S.TextLogin>
        </S.ButtonLogin>
      </S.LoginContainer>
    </S.AvoidView>
  );
}
