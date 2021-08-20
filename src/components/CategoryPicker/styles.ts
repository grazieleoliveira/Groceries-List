import styled from 'styled-components/native';
import {theme} from '../../global/styles/theme';

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  background-color: white;
`;

export const Label = styled.Text`
  font-size: 24px;
  color: ${theme.colors.primary};
`;

export const PlaceholderText = styled.Text`
  font-size: 22px;
  color: ${theme.colors.primary};
`;

export const Touchable = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerPicker = styled.View`
  padding: 20px 10px;
  width: 100%;
  border-radius: 10px;
  margin-top: 15px;
  background-color: #eeee;
`;

export const TitleItem = styled.Text`
  font-size: 20px;
  margin-bottom: 20px;
  color: black;
`;

export const ContainerList = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ContainerModal = styled.TouchableOpacity`
  flex: 1;
`;

export const List = styled.FlatList`
  height: 110px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

// export const IconPicker = styled((props) => Icon(props, 'FW'))`
//   font-size: 20px;
// `;
