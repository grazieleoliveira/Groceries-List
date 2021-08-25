import styled from 'styled-components/native';
import {theme} from '../../global/styles/theme';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 8px 0px 5px 0px;
  align-items: center;
`;

export const Divider = styled.View`
  align-self: center;
  height: 1;
  width: 300;
  background-color: ${theme.colors.secondary40};
`;

export const CheckItem = styled.TouchableOpacity`
  width: 24;
  height: 24;
  background-color: ${theme.colors.secondary60};
  border-radius: 4px;
  margin-right: 14px;
  align-items: center;
  justify-content: center;
  padding: 2px;
`;

export const InfoContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

export const TextItemName = styled.Text`
  color: ${theme.colors.secondary90};
  font-size: 16;
`;

export const TextItemNameStrike = styled.Text`
  color: ${theme.colors.secondary90};
  font-size: 16;
  text-decoration-line: line-through;
`;

export const TextPriceUnd = styled.Text`
  font-size: 14;
  color: ${theme.colors.secondary30};
`;
