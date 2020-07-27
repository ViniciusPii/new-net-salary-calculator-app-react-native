import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const LogoContainer = styled.View`
  align-items: center;
`;

export const IconLogo = styled(Icon).attrs(({theme}) => ({
  name: 'coins',
  color: theme.white,
  size: 40,
}))``;

export const TextLogo = styled.Text`
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
  color: ${({theme}) => theme.white};
`;
