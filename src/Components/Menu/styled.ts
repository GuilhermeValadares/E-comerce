import styled from 'styled-components';

type sideProps = {
  side?: 'right';
}


export const MenuContainer = styled.div`//Uma div que vai conter os itens do menu e esta div já vem estilizada
display: flex;
flex-direction: row;
align-items: center;
height:100px;
`;

export const MenuItems = styled.div<sideProps>`
flex: 1;
display: flex;
justify-content: ${(props) => props.side === 'right' ? 'flex-end' : ''}; //Se o side for right(direita) entao o justify-content sera flex-end, ou seja o MenuItems ficara alinhado a direita
align-items:center;
gap: 10px; // Espaço entre os items do menu
padding-left:80px;//Desgrudar item da lateral esquerda
padding-right:80px;//Desgrudar item da lateral direita
`;

export const ItemDoMenu = styled.div`
cursor: pointer; //Colocar o mouse em cima do item  ele fica como ponteiro
font-family: 'PlusJakartaSans-Bold', sans-serif;
color: #43bc2f !important;
`;
