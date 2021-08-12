import styled from 'styled-components/native';
import {FAB} from 'react-native-paper';
import {theme} from '../../global/styles/theme';

export const Background = styled.View`
  flex: 1;
  width: 100%;
`;

export const FABPlus = styled(FAB)`
  position: absolute;
  margin: 16px;
  right: 0;
  bottom: 0;
  background-color: ${theme.colors.primary};
`;
