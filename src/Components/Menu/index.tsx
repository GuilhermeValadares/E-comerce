import React from 'react';
//@ts-ignore
import Logo from '../../Assets/Images/logo-circulo.svg';
import { MenuContainer, MenuItems, ItemDoMenu } from './styled';

function Menu() {
  return (
    <MenuContainer>
      <MenuItems>
        <ItemDoMenu style={{ color: 'white' }}>EU SOU UMA LOGO</ItemDoMenu>
      </MenuItems>

      <MenuItems side="right">
        <ItemDoMenu style={{ color: 'white' }}>LOGIN</ItemDoMenu>
        <ItemDoMenu style={{ color: 'white' }}>MEUS PEDIDOS</ItemDoMenu>
        <ItemDoMenu style={{ color: 'white' }}>CARRINHO</ItemDoMenu>
      </MenuItems>
    </MenuContainer>
  );
}

export default Menu;
