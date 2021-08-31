import React from 'react'

import './SingleColor.css' 

function SingleColor(props) {

    const {type} = props

    return (
        <div>
            <div className={`color ${props.type}`}>
                <div className="color__box"></div>
            </div>
        </div>
    )
}

export default SingleColor
