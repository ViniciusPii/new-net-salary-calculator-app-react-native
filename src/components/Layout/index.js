import React from 'react';
import * as S from './styles';
import {Platform} from 'react-native';

const Layout = ({children}) => {
  return (
    <>
      <S.Status />
      <S.Layout behavior={Platform.OS === 'ios' ? 'padding' : ''}>
        <S.Container>{children}</S.Container>
      </S.Layout>
    </>
  );
};

export default Layout;
