import styled from 'styled-components/native';

export const Container = styled.View`
  width: 90%;
  align-items: center;
  padding: 20px;
  margin-top: 20px;
  border-radius: 8px;
  box-shadow: 1px 1px 5px
    ${({theme, show}) => (show ? theme.grey300 : theme.ghost)};
  background-color: ${({theme}) => theme.white};
`;

export const FormTitle = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: ${({theme}) => theme.aquaBlue700};
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  margin-top: 15px;
  padding-left: 10px;
  border-radius: 8px;
  background-color: ${({theme}) => theme.placeholder};
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  border-radius: 8px;
  background-color: ${({theme}) => theme.aquaBlue700};
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: ${({theme}) => theme.white};
`;
