
import Firebase from "../firebase/Firebase";

import {Database} from '../firebase/Firebase'

import {getUserUid} from './notesActions'


export const createUser = (userData) => {

    return(dispatch => {

        Firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password)
        .then((userCredential) => {

             const user = userCredential.user 
            const userProfile = { 
                id : user.uid,  
                name : user.displayName,
                user : user.email , 
                image : user.photoURL
            }
            Database.ref('/profiles').push(userProfile)

            dispatch({
                type : 'CREATE_USER' , 
                payload : ''
            })
            return userCredential.user.updateProfile({
                displayName : userData.displayName  , 
                photoURL : userData.photo 
            })
        })
        .catch((error) => {
            dispatch({
                type : 'CREATE_USER' , 
                payload : error.message 
            })
        });

    })
}




export const loginUser = (userData) => {

    return(dispatch => {
        Firebase.auth().signInWithEmailAndPassword(userData.email, userData.password)
        .then((userCredential) => {

            dispatch({
                type : 'LOGIN_USER' , 
                payload : userCredential.user.displayName 
            })
            
        })
        .catch((error) => {
            dispatch({
                type : 'LOGIN_USER' , 
                payload : error.message 
            })
        });
    
    })
}


export const getCurrentUserStatus = () => {
    
    return dispatch => {
        Firebase.auth().onAuthStateChanged(user => {
           
            
            if(user){

                // getUserUid()
                const name = user.displayName 
                const email = user.email
                const uid = user.uid
                const photo = user.photoURL
                const info = [name , email , uid , photo]
                    
                dispatch({
                    type : 'CURRENT_STATUS' ,
                    payload : info
                })
            }
            else{
                dispatch({
                    type : 'CURRENT_STATUS' ,
                    payload : user
                })
            }
    })

    }

}


export const logoutUser = () => {
   

    return dispatch => {
        Firebase.auth().signOut().then(() => {
            dispatch({
                type : 'LOGOUT_USER' , 
                payload : ''
            })    
        }).catch((error) => {});
          
    }
}

