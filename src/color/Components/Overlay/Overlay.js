import React from 'react'

import './Overlay.css'

const Overlay = (props) => {
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
