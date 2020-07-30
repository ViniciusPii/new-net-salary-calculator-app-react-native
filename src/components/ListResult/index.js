import React from 'react';
import * as S from './styles';

import {formatMoney} from '../../utils/regex';

const ListResult = ({...props}) => {
  const {inss, salary, discounts, netSalary, irpf} = props;

  return (
    <S.ResultContainer>
      <S.Header>
        <S.HeaderDesc>Salário Bruto</S.HeaderDesc>
        <S.HeaderValue>R$ {formatMoney(salary)}</S.HeaderValue>
      </S.Header>
      <S.List>
        <S.ListDesc>Desc. INSS</S.ListDesc>
        <S.ListValue>
          {inss <= 0 ? 'Isento' : `- R$ ${formatMoney(inss)}`}
        </S.ListValue>
      </S.List>
      <S.List>
        <S.ListDesc>Desc. IRPF</S.ListDesc>
        <S.ListValue>
          {irpf <= 0 ? 'Isento' : `- R$ ${formatMoney(irpf)}`}
        </S.ListValue>
      </S.List>
      <S.List>
        <S.ListDesc>Outros Descontos</S.ListDesc>
        <S.ListValue>
          {discounts ? `- R$ ${formatMoney(discounts)}` : '--'}
        </S.ListValue>
      </S.List>
      <S.Result>
        <S.ResultDesc>Salário Liquido</S.ResultDesc>
        <S.ResultValue>R$ {formatMoney(netSalary)}</S.ResultValue>
      </S.Result>
    </S.ResultContainer>
  );
};

export default ListResult;
