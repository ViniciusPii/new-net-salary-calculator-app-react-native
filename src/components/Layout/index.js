import React from 'react';
import * as S from './styles';
import {Platform} from 'react-native';

const Layout = ({children}) => {
  return (
    <S.Scroll>
      <S.Status />
      <S.Layout behavior={Platform.OS === 'ios' ? 'padding' : ''}>
        <S.Container>{children}</S.Container>
      </S.Layout>
    </S.Scroll>
  );
};

export default Layout;
