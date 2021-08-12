import styled from 'styled-components/native';
import {theme} from '../../global/styles/theme';

export const SelectContainer = styled.View`
  padding-left: 24px;
  padding-right: 24px;
  margin-top: 18px;
`;

export const SelectCategory = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: ${theme.colors.secondary60};
  border-radius: 25px;
  font-size: 16px;
  border-color: ${theme.colors.secondary85};
  align-items: center;
  justify-content: center;
`;
