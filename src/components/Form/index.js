import React from 'react';
import * as S from './styles';
import {Platform} from 'react-native';

import {formatInputMask} from '../../utils/regex';

const Form = ({...props}) => {
  const {salary, setSalary, discounts, setDiscounts, onPress, show} = props;

  return (
    <S.Container elevation={10} show={show}>
      <S.FormTitle>Digite seu salário bruto</S.FormTitle>
      <S.InputMask
        type={'money'}
        options={{unit: 'R$ '}}
        value={salary}
        onChangeText={(t) => setSalary(formatInputMask(t))}
        placeholder="Ex: 2500"
      />
      <S.InputMask
        type={'money'}
        options={{unit: 'R$ '}}
        value={discounts}
        onChangeText={(t) => setDiscounts(formatInputMask(t))}
        placeholder="Outros Descontos"
      />
      {Platform.OS === 'ios' ? (
        <S.Button onPress={onPress}>
          <S.ButtonText>Calcular</S.ButtonText>
        </S.Button>
      ) : (
        <S.ButtonAndroid onPress={onPress}>
          <S.ButtonContainer>
            <S.ButtonText>Calcular</S.ButtonText>
          </S.ButtonContainer>
        </S.ButtonAndroid>
      )}
    </S.Container>
  );
};

export default Form;
