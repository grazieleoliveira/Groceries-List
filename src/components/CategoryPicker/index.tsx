import React from 'react';
import {Picker, PickerProps} from '@react-native-picker/picker';
import * as S from './styles';

export function CategoryPicker({...rest}: PickerProps) {
  return (
    <S.SelectContainer>
      <S.SelectCategory activeOpacity={1}>
        <Picker {...rest}>
          <Picker.Item label="Selecionar Categoria" value="" />
          <Picker.Item label="Outros" value="Outros" />
          <Picker.Item label="Carnes" value="Carnes" />
          <Picker.Item label="Frutas" value="Frutas" />
          <Picker.Item label="Legumes" value="Legumes" />
          <Picker.Item label="Frios" value="Frios" />
          <Picker.Item label="Guloseimas" value="Guloseimas" />
        </Picker>
      </S.SelectCategory>
    </S.SelectContainer>
  );
}
