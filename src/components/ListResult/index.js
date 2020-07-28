import React from 'react';
import * as S from './styles';

const ListResult = ({...props}) => {
  const {inss, salary} = props;

  return (
    <S.ResultContainer>
      <S.Header>
        <S.HeaderDesc>Salário Bruto</S.HeaderDesc>
        <S.HeaderValue>{`R$ ${parseFloat(salary)
          .toFixed(2)
          .replace('.', ',')
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`}</S.HeaderValue>
      </S.Header>
      <S.List>
        <S.ListDesc>Desc. INSS</S.ListDesc>
        <S.ListValue>{`- R$ ${parseFloat(inss)
          .toFixed(2)
          .replace('.', ',')
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`}</S.ListValue>
      </S.List>
      <S.List>
        <S.ListDesc>Desc. IRPF</S.ListDesc>
        <S.ListValue>- R$ 28,08</S.ListValue>
      </S.List>
      <S.List>
        <S.ListDesc>Outros Descontos</S.ListDesc>
        <S.ListValue>- R$ 00,00</S.ListValue>
      </S.List>
      <S.Result>
        <S.ResultDesc>Salário Liquido</S.ResultDesc>
        <S.ResultValue>R$ 2.250,28</S.ResultValue>
      </S.Result>
    </S.ResultContainer>
  );
};

export default ListResult;
