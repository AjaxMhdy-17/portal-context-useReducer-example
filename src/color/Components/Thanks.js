import React , {useEffect} from 'react'

import happy from '../assets/happy.png'

const Thanks = (props) => {


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

    useEffect(() => {
        props.resetColor()
    },[])

    return (
        <div>
            <div style={styl}>
                <h2>
                    Thank You <br />
                    <img src={happy} style={imgStyl} alt="" />
                </h2>
            </div>
        </div>
    )
}

export default Thanks