



export const notesReducer = (state = {} , action) => {

    if(action.type === 'GET_NOTES'){
        console.log('geting notes from action payload');
        return(
            action.payload 
        )
    }
    else if(action.type ==='GET_YOUR_NOTES'){

        console.log(action.payload);

        return(
            action.payload
        )
    }
    else if(action.type ==='CLEAR'){
        return({
            state : {} 
        })
    }
    else if(action.type === 'USER_LIST'){
        // console.log('user');
        return({
            ...state , 
            userList : action.payload
        })
    }


    return state ;
}