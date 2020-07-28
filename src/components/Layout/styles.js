import styled from 'styled-components/native';
import {StatusBar} from 'react-native';

export const Layout = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  background-color: ${({theme}) => theme.aquaBlue700};
`;

export const Container = styled.View`
  flex: 1;
  width: 100%;
  top: 0;
  align-items: center;
  justify-content: center;
`;

export const Status = styled(StatusBar).attrs(({theme}) => ({
  backgroundColor: theme.aquaBlue700,
  barStyle: 'light-content',
}))``;
