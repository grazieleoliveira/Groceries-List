import styled from 'styled-components/native';
import {theme} from '../../global/styles/theme';

export const AvoidView = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const LoginContainer = styled.View`
  flex: 1;
  width: 100%;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonLogin = styled.TouchableOpacity`
  margin-top: 50px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  width: 300;
  height: 50;
  background-color: ${theme.colors.primary};
`;

export const TextLogin = styled.Text`
  font-weight: bold;
  color: #ffffff;
  font-size: 16px;
`;

export const LoginMainText = styled.Text`
  font-size: 30px;
  font-weight: bold;
  margin-top: 30px;
`;

export const UserInput = styled.TextInput`
  width: 250;
  height: 50;
  background-color: ${theme.colors.secondary60};
  margin-top: 20px;
  border-radius: 10px;
  padding-left: 16px;
`;
