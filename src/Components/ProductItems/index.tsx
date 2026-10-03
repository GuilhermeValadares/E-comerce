import React from 'react';
import { Card , ContainerButton } from './styled';
import Button from '../Button';

function ProductItem() {
  return (
    <>
      <Card>
        <ContainerButton>
         <Button>Adicionar ao carrinho</Button>
        </ContainerButton>
      </Card>
      <NameProduct>
        Camiseta JavaScript
      </NameProduct>
    </>
  );
}

export default ProductItem;
