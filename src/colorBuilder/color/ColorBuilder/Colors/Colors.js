import React from 'react'

import SingleColor from './SingleColor/SingleColor'
import { connect } from 'react-redux'

import './Colors.css' 

function Colors(props) {

    const dynamicColors = Object.keys(props.colors).map((colorKey) => {
        return [...Array(props.colors[colorKey])].map((item , index) => {
            return <SingleColor key={colorKey+index} type={colorKey}/>
        })
    })

    // console.log(dynamicColors);

    return (
        <div>
            <div className="color__main">
                {dynamicColors}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return({
        colors : state.color.colors
    })
}

export default connect(mapStateToProps)(Colors)
