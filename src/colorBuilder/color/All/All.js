import React, { Component } from 'react'
import {Route , Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import Colors from '../ColorBuilder/Colors/Colors'
import Builder from '../ColorBuilder/Builder/Builder'

import Header from '../Components/Header/Header'
import Order from '../Components/Order/Order'
import Login from '../ColorBuilder/Auth/Login'
import Register from '../ColorBuilder/Auth/Register'
import Profile from '../ColorBuilder/Auth/Profile/Profile'
import Firebase from './Firebase/firebase' 

import Thanks from '../Components/Thanks'
import NotFound from '../Components/NotFound'


import { connect } from 'react-redux'

import {getColorInfo} from '../redux/actions/otherAction'
import {getCurrentUser} from '../redux/actions/userActions'



export class All extends Component {

    state = {
        isLoggedIn : false    , 
        userAllInformation : null , 
        shipmentInfo : null ,
        message : null ,
        userOrderInformation : null
    }


    
    componentDidMount(){
        this.props.getColorInfo()
        this.props.getCurrentUser() 
    }



    // handleProfileDataFromFirebase = () => {
    //     const user = this.state.userAllInformation
    //     const orderDetails = Firebase.database().ref('users/'+user.uid)
    //     // console.log(orderDetails);
    //     orderDetails.on('value',(snapShot) => {         
    //         const data = snapShot.val() 
    //         console.log(data);
    //         this.setState({
    //             ...this.state , 
    //             userOrderInformation : data ,
    //         })    
    //     })  
    // }


    render() {
        return (
            <div>
                <main className='main__body'>
                   
                    <Header/> 
                    <Switch>
                        <Route exact  path='/'>
                            <Colors/>
                            <Builder/>
                        </Route>
                        <Route exact path='/login'>
                            <Login/>
                        </Route>
                        <Route exact path='/register'>
                            <Register/>
                        </Route>
                        <Route exact path='/profile'>
                            <Profile
                                // loadCurrentInfoOfUser={this.loadCurrentInfoOfUser}
                                // userAllInformation={this.state.userAllInformation}
                                // handleProfileDataFromFirebase={this.handleProfileDataFromFirebase}
                                // userOrderInformation={this.state.userOrderInformation}
                            />
                        </Route>
                        <Route exact path='/order'>
                            <Order/>
                        </Route>
                        <Route exact path='/thanks'>
                            <Thanks
                                resetColor={this.resetColor}
                            />
                        </Route>
                        <Route path='*'>
                            <NotFound/>
                        </Route>
                    </Switch>

                
                </main>
            </div>
        )
    }
}

const mapStateToProps = (state , ownProps) => {
    return({
        state : state 
    })
}

export default connect(mapStateToProps , {
    getColorInfo : getColorInfo , 
    getCurrentUser : getCurrentUser 
})(withRouter(All))
