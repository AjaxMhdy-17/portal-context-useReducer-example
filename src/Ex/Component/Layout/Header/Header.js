import React , {useContext}from 'react'

import mealsImage from '../../../../FoodOrder/assets/meals.jpg'

import HeaderCartButton from '../HeaderCartButton'



import classes from './Header.module.css' 

function Header(props) {


    return (
        <div>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <span
                    onClick={props.openCart}
                >
                    <HeaderCartButton/>
                </span>
               
            </header>
          
        </div>
    )
}

export default Header
