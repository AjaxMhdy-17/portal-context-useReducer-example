import React from 'react'

import BuilderItems from './BuilderItems/BuilderItems'

import './Builder.css' 

import Modal from './ItemsModal/Modal'

function Builder(props) {


    // console.log(props);

    return (
        <div>
            {props.isModalOpen ? <Modal 
                                    colors={props.colors} 
                                    price={props.price} 
                                    closeModal={props.closeModal}
                                    totalPrice={props.totalPrice}
                                    totalNumberOfColor={props.totalNumberOfColor}
                                    isLoggedIn = {props.isLoggedIn}
                                /> : null
                            }
            <div className="builder__main">
               <h4>total price : $<span>{props.totalPrice}</span></h4>
               {/* {props.isLoggedIn ? (
                                   
                                ):
                                    null
                            } */}
                                    <h5
                                        onClick={props.openModal}
                                    >
                                        order summery
                                    </h5>
               
               <div className="builder__box">
                    <BuilderItems 
                        colors={props.colors} 
                        price={props.price} 
                        increaseSpecifiqColor={props.increaseSpecifiqColor}
                        decreaseSpecifiqColor = {props.decreaseSpecifiqColor}
                    />
               </div>
            </div>
        </div>
    )
}

export default Builder
