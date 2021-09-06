import React  from 'react'

import { connect } from 'react-redux'

import Profile from './Profile'
import LoginRegister from './LoginRegister'
import '../Home.css' 
import './Auth.css' 
import Back from '../../assets/auth_back.jpg'



const Auth = (props) => {
    

    return (
        <div>
            <div className="full__page">
                <div className="left__side">
                    {props.user.user !== '' ? 
                         <Profile/> 
                            : 
                        <LoginRegister/>
                    }
                </div>
                <div className="right__side">
                    <div className="auth__back">
                        <img src={Back} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state,ownProps) => {
    return({
        user : state.user
    }) ;
}



export default connect(mapStateToProps)(Auth)
