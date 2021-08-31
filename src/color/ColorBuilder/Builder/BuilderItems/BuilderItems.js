import React from 'react'

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
                        onClick={() => props.increaseSpecifiqColor(colorKey)}
                        className='item_controller_button'>
                        +
                    </button>
                    <button 
                        onClick={() => props.decreaseSpecifiqColor(colorKey)}
                        disabled={props.colors[colorKey] < 1 ? true : false}
                        className='item_controller_button'>
                        -
                    </button>
                </div>
            </div>
        )
    })

    // console.log(colors);


    return (
        <div>
            {color}
        </div>
    )
}

export default BuilderItems
