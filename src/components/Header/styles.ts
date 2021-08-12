import styled from 'styled-components/native'
import { theme } from '../../global/styles/theme';

export const Container = styled.View`
   width: 100%;
   height: 104;
   padding-left: 24;
   padding-right: 24;
   flex-direction: row;
   justify-content: center;
   align-items: center;


`;

export const TextTitle = styled.Text`
    flex: 1;
    text-align: center;
    font-size: 30px;
    color: ${theme.colors.secondary100};
    font-weight: bold;

`;

export const ProfileTouchable = styled.TouchableOpacity`
    z-index: 1;
    flex: 1;
    position: absolute;
    right: 24px;


`;

export const Profile = styled.View`
    width: 50;
    height: 50;
    background-color: ${theme.colors.secondary60};
    border-radius: 20px;
    border: 2px solid ${theme.colors.secondary85};

`;