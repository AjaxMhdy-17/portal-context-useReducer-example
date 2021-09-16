import React from 'react'

import MealsSummary from './MealsSummary'
import AvailableMeals from './AvailableMeals'

import classes from './Meals.module.css'

function Meals() {

    const styl = {
        marginTop : '100px' , 
    }
    
    return (
        <div style={styl}>
            <AvailableMeals/> 
        </div>
    )
}

export default Meals
