import React from 'react'

import SingleColor from './SingleColor/SingleColor'


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
                {/* <SingleColor type='purple'/>
                <SingleColor type='green'/>
                <SingleColor type='blue'/>
                <SingleColor type='red'/>
                <SingleColor type='brown'/>
                <SingleColor type='black'/> */}
                {dynamicColors}
            </div>
        </div>
    )
}

export default Colors
