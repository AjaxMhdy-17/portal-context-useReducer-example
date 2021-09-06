import React from 'react'
import { connect } from 'react-redux'
import Button from '../CustomComponents/Button'
import { Link } from 'react-router-dom'
import {logoutUser} from '../../actions/userActions'

import './Profile.css' 

const Profile = (props) => {

    console.log(props);

    const {user , email , photo } = props.user 

    console.log(photo);

    return (
        <div className='profile__main'>
            <div className="profile__box">
                <h2>hello {user}</h2>
                <h3><small>
                    {email}    
                </small></h3>
                <h3>
                    this is profile 
                </h3>
                <Link to='/posts'>
                    <Button>
                        your posts 
                    </Button>
                </Link>
                <div className="profile__img">
                    <img src={props.user.photo} alt="" />
                </div>
                <span
                    onClick={props.logoutUser}
                >
                    <Button>logout</Button>
                </span>
            </div>
        </div>
    )
}

const mapStateToProps = (state,ownProps) => {
    return({
        user : state.user
    }) ;
}



export default connect(mapStateToProps,{logoutUser})(Profile)
