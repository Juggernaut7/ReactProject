import React from 'react';
import { useTitle } from '../../hooks/useTitle';
import { useCart } from '../../context';
import CartListComponent from './component/CartList'; 
import CartEmpty from './component/CartEmpty';

const CartPage = () => {
  const { cartList = [] } = useCart(); 
  useTitle(`Cart (${cartList.length})`);

  return (
    <main>
      {cartList.length ? <CartListComponent /> : <CartEmpty />}
    </main>
  );
};

export default CartPage;
