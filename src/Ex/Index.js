import React , {useState} from 'react'
import CartProvider from './store/CartProvider'
import Header from './Component/Layout/Header/Header'
import Meals from './Component/Meals/Meals'
import Cart from './Component/Cart/Cart'
import './index.css' 

function Index() {

    const [showCart , setShowCart] = useState(false) 


    const openCart = () => {
        setShowCart(true)
    }

    const closeCart = () => {
        setShowCart(false) 
    }

    return (
        <CartProvider>
        <div>
            <Header openCart={openCart}/>
            <main>
                <Meals/>
            </main>
            {showCart && <Cart closeCart = {closeCart}/>}

        </div>
        </CartProvider>
    )
}

export default Index
