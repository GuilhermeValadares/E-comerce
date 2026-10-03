import React from 'react';
import Menu from '../../Components/Menu';
import GlobalStyle from '../../GlobalStyle';
import { Titulo, Container } from './style';
import ProductItem from '../../Components/ProductItems';
import { Products } from './style';

function Home() {
  return (
    <>
      <GlobalStyle />
       <Menu />
        <Container>
        <Titulo>Produtos em destaque</Titulo>
        <Products>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </Products>

      </Container>
    </>
  );
}

export default Home;
//<image src ="https://i.pinimg.com/736x/94/1a/43/941a43d0840a01ee1180ede87b3d2cc3.jpg" />
