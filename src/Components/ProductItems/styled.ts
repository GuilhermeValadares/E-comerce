import styled from 'styled-components';


export const Card = styled.div`
display: flex;//alinhar os items do card horizontalmente
height: 500px;//altura do card
width: 250px;//largura do card
border: 1px solid #000;//borda do card
border-radius: 10px;//arredondar as bordas do card
background-color: black;
flex-direction: column;//alinhar os items do card verticalmente
justify-content: flex-end;//alinhar os items do card verticalmente
padding-bottom: 20px;//espaço entre o texto e o botão
`;


export const ContainerButton = styled.div`
display:flex;
justify-content: center;//alinhar os items do card horizontalmente
flex-direction: row;//alinhar os items do card horizontalmente
`;
