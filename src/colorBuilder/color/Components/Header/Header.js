import React , {useState}from 'react'
import { Link } from 'react-router-dom'
import './Header.css' 
import logo from '../../assets/logo.jpg'
import Overlay from '../Overlay/Overlay'
import {FcMenu} from 'react-icons/fc'
import { connect } from 'react-redux'
import {handleLogout} from '../../redux/actions/userActions'

import {useHistory} from 'react-router-dom'


const HEADER_MENU = {
    Login : './login',
    Register : '/register' , 
}

const HEADER_USER_MENU = {
    "Your profile" : '/profile' ,
}



function Header(props) {

    const [overlay , setOverlay] = useState(false)

    const openOverlay = () => {
        return setOverlay(true)
    }

    const closeOverlay = () => {
        return setOverlay(false)
    }


    

    const header__menu = Object.keys(HEADER_MENU).map(item => {
        return <li key={item}><Link onClick={closeOverlay} to={HEADER_MENU[item]}>{item}</Link></li>
    })
    
    
    const header_user_menu = Object.keys(HEADER_USER_MENU).map(item => {
        return <li key={item}><Link onClick={closeOverlay} to={HEADER_USER_MENU[item]}>{item}</Link></li>
    })
    
    const logoutWrapperFunction = () => {
        return (
            props.handleLogout , props.closeOverlay
        )
    }

    const lists = !props.user.isLoggedIn ? (header__menu) 
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
           
            {overlay? (
                <Overlay 
                header__menu={lists} 
                closeOverlay={closeOverlay}
                openOverlay={openOverlay}
            />
            ) : null} 
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
                           onClick={() => setOverlay(true)}  
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return({
        user : state.user
    })
}

export default connect(mapStateToProps , {handleLogout : handleLogout})(Header)
