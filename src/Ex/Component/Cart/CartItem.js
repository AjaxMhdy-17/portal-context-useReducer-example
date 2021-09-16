import React, { useContext } from 'react'
import CartContext from '../../store/CartContext';
import classes from './CartItem.module.css'

function CartItem(props) {

    const ctx = useContext(CartContext)

    console.log(ctx);


    
  const addItemToCart = () => {
    const creatingItemFromPropsAndAddingAmountValue = {
      id : props.id , 
      price : props.price , 
      amount : 1 
    }
    ctx.addItem(creatingItemFromPropsAndAddingAmountValue)
  }
  const removeItemFromCart = () => {
      ctx.removeItem(props.id)
  }

    return (
        <li className={classes['cart-item']}>
            <div>
                <h2>{props.name}</h2>
                <div className={classes.summery}>
                    <span className={classes.price}>${props.price}</span>
                    <span className={classes.amount}>{props.amount}</span>
                </div>
                <div className={classes.actions}>
                    <button
                       onClick={removeItemFromCart}
                    >
                        -
                    </button>
                   
                    <button
                        onClick={addItemToCart}
                    >
                        +
                    </button>
                </div>
            </div>
        </li>
    )
}

export default CartItem
