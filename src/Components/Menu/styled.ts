import styled from 'styled-components';

type sideProps = {
  side?: 'right';
}


export const MenuContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
height:100px;
background:black;
`;

export const MenuItems = styled.div<sideProps>`
flex: 1;
display: flex;
justify-content: ${(props) => props.side === 'right' ? 'flex-end' : ''}; //Se o side for right(direita) entao o justify-content sera flex-end, ou seja o MenuItems ficara alinhado a direita
align-items:center;
gap: 10px; // Espaço entre os items do menu
padding-left:30px;//Desgrudar item da lateral esquerda
padding-right:30px;//Desgrudar item da lateral direita
`;

export const ItemDoMenu = styled.div`
cursor: pointer; //Colocar o mouse em cima do item  ele fica como ponteiro
font-family: 'PlusJakartaSans-Bold', sans-serif;
`;
