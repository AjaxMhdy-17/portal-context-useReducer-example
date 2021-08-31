import React from 'react'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './Modal.css'

const Modal = (props) => {

    console.log(props);

    const modalItems = Object.keys(props.colors).map(colorKeys => {
        const total = props.colors[colorKeys]*props.price[colorKeys] 
        return(
            <li key={colorKeys}>
                {props.colors[colorKeys] > 0 ? <>
                                                <span>{colorKeys}</span> <span>{props.colors[colorKeys]}x{props.price[colorKeys]} = {total}</span>
                                    </> 
                                    
                                    : null}
            </li>
        )
    }) 



    const checkIsLoggedIn = () => {
        if(props.isLoggedIn){
            return props.history.push('/order')
        }else{
            return props.history.push('/login')
        }
    }


    return (
        <div>
            <div className="main__modal">
                <div className="modal__box">
                    {props.totalNumberOfColor > 0 ? (
                        <>
                        <div className="modal__info">
                            <h4>choosed colors</h4>
                            <div className="modal__items">
                                <ul>
                                    {modalItems}
                                </ul>
                            </div>
                        </div>
                        <div className='modal__final'>
                            <span>
                                order summury : you choosed {props.totalNumberOfColor} colors and total price {props.totalPrice} 
                            </span>
                        </div>
                        <div 
                        onClick={props.closeModal}
                        className="order__button">
                            <button 
                                onClick={checkIsLoggedIn}
                                // to='/order' 
                                className='butt'
                            >
                                    order now</button>
                        </div>
                        </>
                    ) : (
                        <div className='empty__modal'>
                            please choose at least one color 
                        </div>
                    )}
                    <div 
                    onClick={props.closeModal}
                    className="close__modal">
                        x
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default withRouter(Modal) 
