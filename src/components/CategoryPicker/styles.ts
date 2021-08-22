import styled from 'styled-components/native';
import {theme} from '../../global/styles/theme';

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  background-color: white;
  padding-left: 24px;
  padding-right: 24px;
  margin-top: 18px;
`;

export const ItemText = styled.Text`
  padding-left: 16px;
  font-size: 16px;
  color: ${theme.colors.secondary100};
`;

export const PlaceholderText = styled.Text`
  padding-left: 16px;
  font-size: 16px;
  color: ${theme.colors.secondary30};
`;

export const Touchable = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerPicker = styled.View`
  height: 50px;
  width: 100%;
  background-color: ${theme.colors.secondary60};
  border-radius: 50px;
  justify-content: center;
`;

export const TitleItem = styled.Text`
  padding-left: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 16px;
  color: black;
`;

export const ContainerList = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ContainerModal = styled.TouchableOpacity`
  flex: 1;
`;

export const List = styled.FlatList`
  width: 100%;
  height: 120px;
  margin-top: 10px;
  border-radius: 10px;
  background-color: ${theme.colors.secondary60};
`;

export const IconPicker = styled((props) => Icon(props, 'FW'))`
  font-size: 20px;
`;
