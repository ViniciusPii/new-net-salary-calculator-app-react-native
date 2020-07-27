import React from 'react';
import * as S from './styles';

const Layout = ({children}) => {
  return (
    <>
      <S.Status />
      <S.Layout>{children}</S.Layout>
    </>
  );
};

export default Layout;
