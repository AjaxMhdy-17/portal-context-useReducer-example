import React from 'react'
import { connect } from 'react-redux'

import { updatePrice , increaseSpecifiqColor , decreaseSpecifiqColor} from '../../../redux/actions/otherAction'

import './BuilderItems.css' 

function BuilderItems(props) {


    const color = Object.keys(props.colors).map(colorKey => {
        return (
            <div key={colorKey} className="builder__item">
                <div className="item__name">
                    <h4>{colorKey}</h4>
                </div>
                
                <div className="item__amount">
                    {props.colors[colorKey]}
                    x
                    {props.price[colorKey]}
                    ={props.colors[colorKey]*props.price[colorKey]}
                </div>

                <div className="item__controller">
                    <button 
                        onClick={() => {
                            props.increaseSpecifiqColor(colorKey)
                            props.updatePrice()
                        }}
                        className='item_controller_button'>
                        +
                    </button>
                    <button 
                        onClick={() => { 
                            props.decreaseSpecifiqColor(colorKey)
                            props.updatePrice() 
                            
                        }}
                        disabled={props.colors[colorKey] < 1 ? true : false}
                        className='item_controller_button'>
                        -
                    </button>
                </div>
            </div>
        )
    })




    return (
        <div>
            {color}
        </div>
    )
}

const mapStateToProps = (state , ownProps) => {
    return({
        all : state, 
        colors : state.color.colors , 
        price : state.color.price
    })
}

export default connect(mapStateToProps,{
    increaseSpecifiqColor : increaseSpecifiqColor ,
    decreaseSpecifiqColor : decreaseSpecifiqColor , 
    updatePrice : updatePrice 
})(BuilderItems)


