
const initState = {
    isLoggedIn : '' ,
    userAllInformation : null , 
    shipmentInfo : null ,
    message : null ,
    userOrderInformation : null
}

const userReducer = (state=initState , action)  => {

    if(action.type === 'getCurrentUser'){
      
        let checkLogin = false
        if(action.payload != null){
            checkLogin = true 
        }
        return({
            ...state , 
            userAllInformation : action.payload ,
            isLoggedIn : checkLogin 
        })
    }
    else if(action.type === 'handleLogin'){
        console.log(action.payload);
       
        return({
            ...state , 
            message : action.payload.message
        })
    }
    else if(action.type === 'handleSignIn'){
        console.log(action.payload);
        return({
            ...state , 
            message : action.payload , 
        })
    }
    else if(action.type === 'handleLogout'){
        return({
            ...state , 
            userAllInformation : action.payload , 
            isLoggedIn : false 
        })
    }
    else if(action.type === 'handleProfileDataFromFirebase'){
        return({
            ...state , 
            userOrderInformation : action.payload , 
        })
    }
    
    return state ;
}


export default userReducer 