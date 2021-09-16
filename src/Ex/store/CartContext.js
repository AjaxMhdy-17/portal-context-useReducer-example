import React  from 'react'


const CartContext = React.createContext({
    items : [] , 
    totalAmount : 0 , 
    totalNumber : 0 , 
    addItem : null , 
    removeItem : null  
})


export default CartContext
