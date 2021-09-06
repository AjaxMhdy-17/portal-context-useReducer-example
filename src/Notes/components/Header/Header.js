import React from 'react'

import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import './Header.css' 

const Header = (props) => {


    console.log(props.user.user);

    const isLogin = props.user.user 

    return (
        <div>
            <div className="header_full">
                <div className="header__left">
                    <div className="logo">
                        <Link to='/'>
                            <img src={Logo} alt="" />
                        </Link>
                    </div>
                </div>
                <div className="header__right">
                    <ul>
                        {
                            isLogin !== '' ? (
                                <Link to='/auth'>
                                    <li>{isLogin}</li>
                                </Link>
                            )
                            :
                            (
                                <li><Link to='/auth'>auth</Link></li>
                            )
                        }
                        
                    </ul>
                </div>
            </div>
        </div>
    )

}

const mapStateToProps = (state , ownProps) => {
    return({
        user : state.user 
    })
}

export default connect(mapStateToProps)(Header)
