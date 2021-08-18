import styled from 'styled-components/native';
import {theme} from '../../global/styles/theme';

export const ProfileImage = styled.View`
  align-self: center;
  height: 100;
  width: 100;
  border-radius: 50;
  border: 1px solid ${theme.colors.secondary30};
  background-color: rgba(152, 152, 152, 0.1);
`;

export const ProfileEmail = styled.TextInput`
  margin-top: 0px;
  font-size: 16px;
  color: ${theme.colors.secondary30};
  align-self: center;
  text-align: center;
`;

export const EditButton = styled.TouchableOpacity`
  margin-top: 32px;
  align-self: center;
  align-items: center;
  justify-content: center;
  width: 100;
  height: 40;
  background-color: ${theme.colors.primary};
  border-radius: 50;
`;

export const EditButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
`;
