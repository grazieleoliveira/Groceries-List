import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {HeaderNav} from '../../components/HeaderNav';
import {Background} from '../Home/styles';
import {informationUserAction, logoutAction} from '../../store/ducks/user';
import * as S from './styles';
import {Alert} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export function Profile() {
  const dispatch = useDispatch();

  const {currentUser} = useSelector((state) => state.user);

  const [fullNameCurrent, setFullNameCurrent] = useState('');
  const [birthDateCurrent, setBirthDateCurrent] = useState('');
  const [genderCurrent, setGenderCurrent] = useState('');
  const [cityCurrent, setCityCurrent] = useState('');
  const [stateCurrent, setStateCurrent] = useState('');
  const [countryCurrent, setCountryCurrent] = useState('');

  const setInformationUser = () => {
    setFullNameCurrent(currentUser?.fullName);
    setBirthDateCurrent(currentUser?.birthDate);
    setGenderCurrent(currentUser?.gender);
    setCountryCurrent(currentUser?.address?.country);
    setStateCurrent(currentUser?.address?.state);
    setCityCurrent(currentUser?.address?.city);
  };
  useEffect(() => {
    if (currentUser) {
      setInformationUser();
    }
  }, [currentUser]);

  const saveProfile = () => {
    dispatch(
      informationUserAction({
        fullName: fullNameCurrent,
        birthDate: birthDateCurrent,
        gender: genderCurrent,
        address: {
          city: cityCurrent,
          state: stateCurrent,
          country: countryCurrent,
        },
      }),
    );
    Alert.alert('Suas informações foram salvas');
  };
  const logout = () => {
    dispatch(logoutAction());
  };

  return (
    <Background>
      <HeaderNav title="Profile" onDone={() => saveProfile()} />
      <ScrollView style={{flex: 1}}>
        <S.ProfileImage />
        <S.ProfileEmail
          placeholder="Insira seu nome"
          value={fullNameCurrent}
          onChangeText={setFullNameCurrent}
        />
        <S.ProfileEmail
          placeholder="Insira sua data de nascimento"
          value={birthDateCurrent}
          onChangeText={setBirthDateCurrent}
        />
        <S.ProfileEmail
          placeholder="Insira seu gênero"
          value={genderCurrent}
          onChangeText={setGenderCurrent}
        />
        <S.ProfileEmail
          placeholder="Insira seu país"
          value={countryCurrent}
          onChangeText={setCountryCurrent}
        />
        <S.ProfileEmail
          placeholder="Insira seu estado"
          value={stateCurrent}
          onChangeText={setStateCurrent}
        />
        <S.ProfileEmail
          placeholder="Insira sua cidade"
          value={cityCurrent}
          onChangeText={setCityCurrent}
        />
        <S.EditButton activeOpacity={0.7} /* onPress={() => logout()} */>
          <S.EditButtonText>Sair</S.EditButtonText>
        </S.EditButton>
      </ScrollView>
    </Background>
  );
}
