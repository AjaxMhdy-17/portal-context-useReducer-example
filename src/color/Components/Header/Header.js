import React , {useState}from 'react'
import { Link } from 'react-router-dom'
import './Header.css' 
import logo from '../../assets/logo.jpg'
import Overlay from '../Overlay/Overlay'
import {FcMenu} from 'react-icons/fc'



const HEADER_MENU = {
    Login : './login',
    Register : '/register' , 
}

const HEADER_USER_MENU = {
    "Your profile" : '/profile' ,
}



function Header(props) {

    

    const header__menu = Object.keys(HEADER_MENU).map(item => {
        return <li key={item}><Link onClick={props.closeOverlay} to={HEADER_MENU[item]}>{item}</Link></li>
    })
    
    
    const header_user_menu = Object.keys(HEADER_USER_MENU).map(item => {
        return <li key={item}><Link onClick={props.closeOverlay} to={HEADER_USER_MENU[item]}>{item}</Link></li>
    })
    
    const logoutWrapperFunction = () => {
        return (
            props.handleLogout , props.closeOverlay
        )
    }

    const lists = !props.isLoggedIn ? (header__menu) 
                        : 
                            (   <>
                                {header_user_menu}
                                <li>
                                    <Link 
                                        onClick={props.handleLogout}
                                        to='/'
                                    >
                                        Logout
                                    </Link>
                                </li>
                                </>
                            )
                    

    return (
        <div>
           
            {props.overlay? (
                <Overlay 
                header__menu={lists} 
                closeOverlay={props.closeOverlay}
                openOverlay={props.openOverlay}
            />
            ) : null} 
            {/* {overlay ? (
                <div className="overlay">
                    <ul className='overlay_menu_list'>
                        {header__menu}
                    </ul>
                    <div 
                        onClick={() => setOverlay(false)}
                    className="close_icon">
                        X
                    </div>
                </div>
            ) : null} */}
            <div className="full__header">
                <div className="header__left">
                    <div className="logo">
                        <Link to='/'>
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                </div>
                <div className="header__right">
                    <ul className='menu__list'>
                        {lists}
                    </ul>
                    <div className="menu__icon">
                        <FcMenu 
                           onClick={props.openOverlay}  
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
