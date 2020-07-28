import styled from 'styled-components/native';
import {StatusBar} from 'react-native';

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {flexGrow: 1},
})`
  flex: 1;
  width: 100%;
`;

export const Layout = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  background-color: ${({theme}) => theme.aquaBlue700};
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Status = styled(StatusBar).attrs(({theme}) => ({
  backgroundColor: theme.aquaBlue700,
  barStyle: 'light-content',
}))``;
