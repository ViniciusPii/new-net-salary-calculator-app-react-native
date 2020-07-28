import styled from 'styled-components/native';

export const Compose = styled.View`
  width: 100%;
  height: 70%;
  bottom: 0;
  z-index: -1;
  position: absolute;
  background-color: ${({theme}) => theme.white};
`;
