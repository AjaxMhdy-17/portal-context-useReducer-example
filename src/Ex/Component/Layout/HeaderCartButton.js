import React , {useContext} from 'react'
import CartContext from '../../store/CartContext'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css' 

function HeaderCartButton() {

    const ctx = useContext(CartContext) 

    return (
        <button className={classes.button}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>
                Your Cart 
            </span>
            <span className={classes.badge}>{ctx.totalNumber}</span>
        </button>
    )
}

export default HeaderCartButton
