import React from 'react';
import * as S from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Logo = () => {
  return (
    <S.LogoContainer>
      <S.IconLogo />
      <S.TextLogo>Calcula Fácil</S.TextLogo>
    </S.LogoContainer>
  );
};

export default Logo;
