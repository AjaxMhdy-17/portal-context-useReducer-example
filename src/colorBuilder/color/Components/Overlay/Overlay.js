import React from 'react'
import {openOverlay , closeOverlay} from '../../redux/actions/otherAction'

import './Overlay.css'

const Overlay = (props) => {


    console.log(props);

    return (
        <div className='main__overlay'>
            <ul className='overlay_menu_list'>
                {props.header__menu}
            </ul>
            <div 
            onClick={props.closeOverlay}
            className="close_icon">
                X
            </div>
        </div>
    )
}


export default Overlay

