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
import Overlay from '../Components/Overlay/Overlay'
import Firebase from './Firebase/firebase' 
import { googleProvider } from './Firebase/firebase'

import Thanks from '../Components/Thanks'
import NotFound from '../Components/NotFound'

export class All extends Component {

    state = {
        colors : {
            purple : 0 ,
            green : 0 , 
            blue : 0 , 
            red : 0 , 
            brown : 0, 
            black : 0
        },
        price : {
            purple : 6 ,
            green : 4 , 
            blue : 5 , 
            red : 2 , 
            brown : 3 , 
            black : 1
        },
        totalPrice : 0 ,
        isLoggedIn : false    , 
        userAllInformation : null , 
        shipmentInfo : null ,
        overlay : false   ,
        isModalOpen : false ,
        totalNumberOfColor : 0 ,
        message : null ,
        userOrderInformation : null
    }


    


    
    updatePrice = () => {
        let price = 0 ;
        let totalNumberOfColor = 0 ;
        const colors = Object.keys(this.state.colors).map(color => {
            if(this.state.colors[color] > 0){
                totalNumberOfColor += this.state.colors[color]
            }
            price += this.state.colors[color]*this.state.price[color]
        })
        this.setState({
            ...this.state , 
            totalPrice : price ,
            totalNumberOfColor : totalNumberOfColor
        })
    }
    increaseSpecifiqColor = (colorName) => {
        console.log("increase "+colorName);

        // this.state.colors[colorName]

        // const updateItem = this.state.colors[colorName]
        // console.log(updateItem);

        const up = Object.entries(this.state.colors).map(key => {
            
            if(key[0] === colorName){
                return [key[0],key[1]+1] 
            }
            return key 
        })
        // console.log(up);
        // console.log(this.state.colors);

        
        const modifiedColorsState = Object.fromEntries(up)
        this.setState({
            ...this.state , 
            colors : modifiedColorsState,  
        },this.updatePrice)
    }



    decreaseSpecifiqColor = (colorName) => {
        console.log("decrease "+colorName);
        let price = 0 
        const up = Object.entries(this.state.colors).map(key => {
            price += key[1] * this.state.price[colorName]
            if(key[0] === colorName){
                return [key[0],key[1] - 1]
            } 
            return key 
        })

        console.log(price);

        const modifiedColorsState = Object.fromEntries(up) 
        this.setState({
            ...this.state , 
            colors : modifiedColorsState 
        },this.updatePrice)
        
    }

    resetColor = () => {
        const resetColors = {
            purple : 0 ,
            green : 0 , 
            blue : 0 , 
            red : 0 , 
            brown : 0, 
            black : 0
        }
        this.setState({
            ...this.state , 
            colors : resetColors ,
            totalPrice : 0 
        })
    }


    openOverlay = () => {
        this.setState({
            ...this.state , 
            overlay : true 
        })
    }
    closeOverlay = () => {
        this.setState({
            ...this.state , 
            overlay : false 
        })
    }


    openModal = () => {
        this.setState({
            ...this.state , 
            isModalOpen : true 
        })
    }
    closeModal = () => {
        this.setState({
            ...this.state , 
            isModalOpen : false 
        })
    }


    // componentDidUpdate(){
    //     console.log(this.state.totalPrice);
    // }



    signInWithGoogle = () => {
        Firebase.auth()
        .signInWithPopup(googleProvider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential;
      
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          // ...

            console.log(user);

        }).catch((error) => {
   
          this.setState({
              ...this.state , 
              message : error.message
          })
        });
    }

    handleSignIn = (displayName , email , password) => {
        Firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            // var user = userCredential.user;
            // console.log(user);

            const update = {
                displayName : displayName
            }

            Firebase.auth().currentUser.updateProfile(update)

            this.setState({
                ...this.state , 
                message : null 
            })
        })
        .catch((error) => {
            this.setState({
                ...this.state , 
                message : error.message
            })
        });
        // console.log(email , password);
    }

    handleLogin = (email , password) => {
        Firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            this.props.history.push('/')
        })
        .catch((error) => {
            console.log(error.message);
            this.setState({
                ...this.state , 
                message : error.message 
            })
        });

    }

    handleLogout = () => {
        Firebase.auth().signOut().then((user) => {
            console.log('user ' + user);
            this.setState({
                ...this.state , 
                isLoggedIn : false ,
                userAllInformation : null 
            })
            this.closeOverlay() 
            // An error happened.
          });
    }
    

    handleShipMentInfo = (name , phone , location , card_number) => {
       
        // console.log(this.state.userAllInformation);

        const existingProducts = Object.entries(this.state.colors).map((color) => {
            return color[1] > 0 ? `${color[0]} ${color[1]}` : null 
        })

        const user = this.state.userAllInformation
        const shipmentData = {
            name : name , 
            phone : phone , 
            location : location , 
            card_number : card_number , 
            product : this.state.totalNumberOfColor,
            colors : existingProducts , 
            totalPrice : this.state.totalPrice 
        }
        this.setState({
            ...this.state , 
            shipmentInfo : shipmentData 
        })
        Firebase.database().ref('users/'+user.uid).push(shipmentData);
        this.props.history.push('/thanks')
    }


    handleProfileDataFromFirebase = () => {
        const user = this.state.userAllInformation
        const orderDetails = Firebase.database().ref('users/'+user.uid)
        // console.log(orderDetails);
        orderDetails.on('value',(snapShot) => {         
            const data = snapShot.val() 
            console.log(data);
            this.setState({
                ...this.state , 
                userOrderInformation : data ,
            })    
        })  
    }


    componentWillMount(){
        // onAuthStateChanged
        Firebase.auth().onAuthStateChanged(user => {
            if(user){
                // console.log(user);
                this.setState({
                    ...this.state , 
                    isLoggedIn : true , 
                    userAllInformation : user 
                })
            }
            else{
                console.log('no user');
                this.setState({
                    ...this.state , 
                    isLoggedIn : false 
                })
            }
        });
    }


    // componentDidUpdate(){
    //     console.log(this.state.userOrderInformation);
    // }


    

    render() {
        return (
            <div>
                <main className='main__body'>
                   
                    <Header 
                        isLoggedIn={this.state.isLoggedIn} 
                        handleLogout={this.handleLogout}
                        openOverlay={this.openOverlay}
                        closeOverlay={this.closeOverlay}
                        overlay={this.state.overlay}
                    /> 
                    <Switch>
                        <Route exact  path='/'>
                            <Colors colors={this.state.colors}/>
                            <Builder 
                                colors={this.state.colors} 
                                price={this.state.price}
                                increaseSpecifiqColor={this.increaseSpecifiqColor}
                                decreaseSpecifiqColor = {this.decreaseSpecifiqColor}
                                totalPrice = {this.state.totalPrice}
                                totalNumberOfColor = {this.state.totalNumberOfColor}
                                isLoggedIn = {this.state.isLoggedIn}
                                openModal = {this.openModal}
                                closeModal={this.closeModal}
                                isModalOpen = {this.state.isModalOpen}
                            />
                        </Route>
                        <Route exact path='/login'>
                            <Login 
                                handleLogin={this.handleLogin}
                                signInWithGoogle={this.signInWithGoogle}
                                message={this.state.message}
                            />
                        </Route>
                        <Route exact path='/register'>
                            <Register 
                                handleSignIn={this.handleSignIn}
                                signInWithGoogle={this.signInWithGoogle}
                                errorMessage={this.state.message}
                            />
                        </Route>
                        <Route exact path='/profile'>
                            <Profile
                                loadCurrentInfoOfUser={this.loadCurrentInfoOfUser}
                                userAllInformation={this.state.userAllInformation}
                                handleProfileDataFromFirebase={this.handleProfileDataFromFirebase}
                                userOrderInformation={this.state.userOrderInformation}
                            />
                        </Route>
                        <Route exact path='/order'>
                            <Order
                                handleShipMentInfo={this.handleShipMentInfo}
                                saveDataOnFirebase={this.saveDataOnFirebase}
                            />
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

export default withRouter(All)
