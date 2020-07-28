import React from 'react';
import * as S from './styles';
import {Platform} from 'react-native';

const Form = ({...props}) => {
  const {salary, setSalary, discounts, setDiscounts, onPress, show} = props;

  return (
    <S.Container elevation={10} show={show}>
      <S.FormTitle>Digite seu salário bruto</S.FormTitle>
      <S.Input
        value={salary}
        onChangeText={(t) => setSalary(t)}
        placeholder="Ex: 2500"
        keyboardType="decimal-pad"
      />
      <S.Input
        value={discounts}
        onChangeText={(t) => setDiscounts(t)}
        placeholder="Outros descontos"
        keyboardType="decimal-pad"
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
