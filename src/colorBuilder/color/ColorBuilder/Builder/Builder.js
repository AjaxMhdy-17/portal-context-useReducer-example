import React from 'react'

import BuilderItems from './BuilderItems/BuilderItems'

import './Builder.css' 
import { connect } from 'react-redux'
import Modal from './ItemsModal/Modal'

import {openModal} from '../../redux/actions/otherAction'


function Builder(props) {



    return (
        <div>
            {props.isModalOpen ? <Modal 
                                    // colors={props.colors} 
                                    // price={props.price} 
                                    // closeModal={props.closeModal}
                                    // totalPrice={props.totalPrice}
                                    // totalNumberOfColor={props.totalNumberOfColor}
                                    // isLoggedIn = {props.isLoggedIn}
                                /> : null
                            }
            <div className="builder__main">
               <h4>total price : $<span>{props.state.color.totalPrice}</span></h4>
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
                    <BuilderItems/>
               </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state,ownProps) => {
    return ({
        state : state , 
        isModalOpen : state.color.isModalOpen
    })
}

export default connect(mapStateToProps,{openModal : openModal})(Builder)
