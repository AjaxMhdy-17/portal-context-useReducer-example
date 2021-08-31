import React from 'react'

import sad from '../assets/sad.jpg'

const NotFound = () => {

    const styl = {
        width : '100%',
        height : '50vh',
        display : 'flex',
        justifyContent : 'center' , 
        alignItems  : 'center',
        color : '#222',
        textTransform : 'uppercase',
        borderBottom : '2px solid orange',
        background : '#e5e5e5'
    }

    const imgStyl = {
        width : '40px',
        height : 'auto'
    }

    return (
        <div>
            <div style={styl}>
                <h2>
                    not found 404 <br />
                    <img src={sad} style={imgStyl} alt="" />
                </h2>
            </div>
        </div>
    )
}

export default NotFound
