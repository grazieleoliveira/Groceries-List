import styled from 'styled-components/native';
import {theme} from '../../global/styles/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {BorderlessButton} from 'react-native-gesture-handler';

export const HeaderContainer = styled.View`
  width: 100%;
  height: 104;
  padding-left: 24;
  padding-right: 24;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonLeftArrow = styled(BorderlessButton)`
  position: absolute;
  left: 16px;
`;

export const ButtonDone = styled(BorderlessButton)`
  position: absolute;
  right: 16px;
`;
