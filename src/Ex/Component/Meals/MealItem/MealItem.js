import { useContext , useState } from 'react';

import classes from './MealItem.module.css';
import CartContext from '../../../store/CartContext';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {




  const ctx = useContext(CartContext)
  const price = `$${props.price.toFixed(2)}`;

  const addItemToCart = (amount) => {
    const creatingItemFromPropsAndAddingAmountValue = {
      id : props.id , 
      name : props.name , 
      price : props.price , 
      amount : amount 
    }
    ctx.addItem(creatingItemFromPropsAndAddingAmountValue)
  }
 



  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
      <MealItemForm 
        addItemToCart = {addItemToCart}
      />
      
      </div>
    </li>
  );
};

export default MealItem;
