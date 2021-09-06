import Firebase from "../firebase/Firebase";

const initState = {
    user : '' , 
    other  : true,
    message : '' ,
    uid : '' , 
    photo : '' , 
    email : '' 
}

export const userReducer = (state = initState , action) => {

    if(action.type === 'CREATE_USER'){
        
        return ({
            ...state , 
            message : action.payload
        })
    }
    else if(action.type === 'LOGIN_USER'){
        return({
            ...state , 
            message : action.payload , 
        })
    }

    else if( action.type === 'CURRENT_STATUS'){
  
        return({
            ...state , 
            user : action.payload[0] ,
            email : action.payload[1] , 
            uid : action.payload[2] , 
            photo : action.payload[3] , 
        })
    }

    else if( action.type === 'LOGOUT_USER'){
        console.log('reducers');
    
        return({
            ...state , 
            user : ''
        })
    }


    return state ;
}