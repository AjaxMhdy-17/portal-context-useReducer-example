
import Firebase from "../../All/Firebase/firebase";
import { googleProvider } from "../../All/Firebase/firebase";


export const signInWithGoogle = () => {

    return dispatch => {
        Firebase.auth()
        .signInWithPopup(googleProvider)
        .then((result) => {
            console.log(result.user);
        }).catch((error) => {
            console.log(error.message);
        });   
    }
}

export const getCurrentUser = () => {

    return dispatch => {
        Firebase.auth().onAuthStateChanged(user => {
            if(user){
                dispatch({
                    type : 'getCurrentUser' , 
                    payload : user 
                })
            }
            else{
                console.log('no user');
                dispatch({
                    type : 'getCurrentUser' , 
                    payload : user 
                })
            }
        });
    }
}


export const handleLogin = (email , password) => {
    return dispatch => {
        Firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
           
            dispatch({
                type : 'handleLogin' , 
                payload : user  
            })
           
        })
        .catch((error) => {
          
            const load = { 
                message : error.message
            }
            dispatch({
                type : 'handleLogin' , 
                payload : load 
            })
        });

    }
}

export const handleSignIn = (displayName , email , password) => {

    return dispatch => {
        Firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const update = {
                displayName : displayName
            }
            Firebase.auth().currentUser.updateProfile(update)
            console.log(userCredential.user);
        })
        .catch((error) => {
            console.log(error.message);
            dispatch({
                type : 'handleSignIn' , 
                payload : error.message 
            })
        });

    }
}


export const handleShipMentInfo = (colors , userUid , name , phone , location , card_number , totalNumberOfColor , totalPrice) => {

    return dispatch => {
        const existingProducts = Object.entries(colors).map((color) => {
            return color[1] > 0 ? `${color[0]} ${color[1]}` : null 
        })
        const shipmentData = {
            name : name , 
            phone : phone , 
            location : location , 
            card_number : card_number , 
            product : totalNumberOfColor,
            colors : existingProducts , 
            totalPrice : totalPrice 
        }
        Firebase.database().ref('users/'+userUid).push(shipmentData)
    }    
}


export const handleProfileDataFromFirebase = (userUid) => {

    return dispatch => {

        const orderDetails = Firebase.database().ref('users/'+userUid)
        orderDetails.on('value',(snapShot) => {         
            const data = snapShot.val() 
            dispatch({
                type : 'handleProfileDataFromFirebase' , 
                payload : data ,
            })    
        })  
    }

        
        // console.log(orderDetails)
    
}

export const handleLogout = () => {
    return dispatch => {
        Firebase.auth().signOut().then((user) => {
            console.log('user ' + user);
            dispatch({
                type : 'handleLogout' , 
                payload : user 
            })
          });
    }
}