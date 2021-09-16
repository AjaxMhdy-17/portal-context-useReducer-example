import { useReducer } from "react";

import CartContext from "./CartContext";


const defaultCartState = {
    items : [] , 
    totalAmount : 0 , 
    totalNumber : 0  , 
}

const CartReducer = (state = defaultCartState , action) => {

    if(action.type === 'ADD'){

        let updateCartItems ;
        const isExistsInCart = state.items.find(item => item.id === action.item.id)
        if(isExistsInCart){
            const findIndexInCart = state.items.findIndex(item => item.id === isExistsInCart.id)

            const getTheTargetedItem = state.items[findIndexInCart]

            const updatePropertiesOfTargetedItem = {
                ...getTheTargetedItem , 
                amount : parseInt(getTheTargetedItem.amount) + parseInt(action.item.amount)
            }

            updateCartItems = [...state.items]
            updateCartItems[findIndexInCart] = updatePropertiesOfTargetedItem
            

        }
        else{
            updateCartItems = state.items.concat(action.item)
        }
        
        const updateTotalNumber = parseInt(state.totalNumber) + parseInt(action.item.amount) 
        const updateTotalAmount = (state.totalAmount) + (action.item.amount * action.item.price)


        return({
            ...state , 
            items : updateCartItems , 
            totalNumber : updateTotalNumber , 
            totalAmount : updateTotalAmount
        })
    }
    else if(action.type === 'REMOVE'){
        console.log('reducer');

        let updateCartItems ;

        const isExistsInCart = state.items.find(item => item.id === action.id)

        if(isExistsInCart.amount === 1){
            updateCartItems = state.items.filter(item => item.id !== action.id)
        }
        else{

            const findIndexInCart = state.items.findIndex(item => item.id === action.id)            
            const getTheTargetedItem = state.items[findIndexInCart]

            const updatePropertiesOfTargetedItem = {
                ...getTheTargetedItem , 
                amount : getTheTargetedItem.amount - 1 
            }

            updateCartItems = [...state.items]
            updateCartItems[findIndexInCart] = updatePropertiesOfTargetedItem

        }

        const updateTotalNumber = parseInt(state.totalNumber) - 1
        const updateTotalAmount =  state.totalAmount - isExistsInCart.price 

        return({
            ...state , 
            items : updateCartItems , 
            totalNumber : updateTotalNumber , 
            totalAmount : updateTotalAmount
        })
    }

    return state ;
}

const CartProvider = (props) => {

    
    const [cartState , dispatchCartAction] = useReducer(CartReducer , defaultCartState)

    const addItemToCart = (item) => {
        dispatchCartAction({
            type : 'ADD' ,
            item : item 
        })
    }


    const removeItemFromCart = (id) => {
        dispatchCartAction({
            type : 'REMOVE' ,
            id : id 
        })
    }

    const value = {
        items : cartState.items ,
        totalAmount : cartState.totalAmount , 
        totalNumber : cartState.totalNumber , 
        addItem : addItemToCart , 
        removeItem : removeItemFromCart
    }

    return(
        <CartContext.Provider value={value}>
            {props.children}
        </CartContext.Provider>
    )
}


export default CartProvider 

