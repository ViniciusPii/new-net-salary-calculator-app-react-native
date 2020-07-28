import styled from 'styled-components/native';

export const ResultContainer = styled.View`
  width: 90%;
  margin: 30px 0 150px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  background-color: ${({theme}) => theme.placeholder};
`;

export const HeaderDesc = styled.Text`
  font-size: 16px;
  color: ${({theme}) => theme.aquaBlue700};
`;

export const HeaderValue = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${({theme}) => theme.aquaBlue700};
`;

export const List = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.grey100};
  background-color: ${({theme}) => theme.white};
`;

export const ListDesc = styled.Text`
  font-size: 16px;
  color: ${({theme}) => theme.red};
`;

export const ListValue = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${({theme}) => theme.red};
`;

export const Result = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.grey100};
  background-color: ${({theme}) => theme.white};
`;

export const ResultDesc = styled.Text`
  font-size: 16px;
  color: ${({theme}) => theme.blue600};
`;

export const ResultValue = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${({theme}) => theme.blue600};
`;
