import styled from 'styled-components';

export const Titulo = styled.div`
  font-family: 'PlusJakartaSans-Bold', sans-serif;
  color: #43bc2f;
  font-size: 20px;
  margin-top: 60px;
`;

export const Container = styled.div`
  background-color: #fafafa;
  padding-left: 80px;
  padding-right: 80px;
  display: flex;
  flex-direction: column; //alinhar os items do card verticalmente
`;


export const Products = styled.div`
display: flex; //alinhar os items horizontalmente
flex-direction: row; //alinhar os items horizontalmente
gap: 30px; //espaço entre os items
margin-top: 15px; //espaço entre o titulo e os items
`;
