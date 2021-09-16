import { useContext , useState } from 'react';

import classes from './Cart.module.css';

import CartContext from '../../store/CartContext';

import CartItem from './CartItem'

import Modal from '../UI/Modal';


const Cart = (props) => {


  const ctx = useContext(CartContext)
  console.log(ctx);

  const totalAmount = ctx.totalAmount.toFixed(2)

  const cartItems = (
    <ul className={classes['cart-items']}>
      {ctx.items.map(item => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
        />
      ))}
    </ul>
  )

  return (
    <>
      <Modal>
        
          {cartItems}
            <div className={classes.total}>
              <span>Total Amount</span>
              <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
              <button
                onClick={props.closeCart}
                className={classes['button-alt']}
              >
                Close
              </button>
            <button className={classes.button}>order</button>
            </div>

      </Modal>
    </>
  );
};

export default Cart;
