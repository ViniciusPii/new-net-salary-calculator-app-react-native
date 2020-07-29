import React from 'react';
import * as S from './styles';

const ListResult = ({...props}) => {
  const {inss, salary, discounts, netSalary, irpf} = props;

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
        <S.ListValue>
          {inss <= 0
            ? 'Isento'
            : `- R$ ${parseFloat(inss)
                .toFixed(2)
                .replace('.', ',')
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`}
        </S.ListValue>
      </S.List>
      <S.List>
        <S.ListDesc>Desc. IRPF</S.ListDesc>
        <S.ListValue>
          {irpf <= 0
            ? 'Isento'
            : `- R$ ${parseFloat(irpf)
                .toFixed(2)
                .replace('.', ',')
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`}
        </S.ListValue>
      </S.List>
      <S.List>
        <S.ListDesc>Outros Descontos</S.ListDesc>
        <S.ListValue>
          {discounts
            ? `- R$ ${parseFloat(discounts)
                .toFixed(2)
                .replace('.', ',')
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`
            : '--'}
        </S.ListValue>
      </S.List>
      <S.Result>
        <S.ResultDesc>Salário Liquido</S.ResultDesc>
        <S.ResultValue>{`R$ ${parseFloat(netSalary)
          .toFixed(2)
          .replace('.', ',')
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`}</S.ResultValue>
      </S.Result>
    </S.ResultContainer>
  );
};

export default ListResult;
