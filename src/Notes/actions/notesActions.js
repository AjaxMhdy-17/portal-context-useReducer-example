
import {Database} from '../firebase/Firebase'

export const getNotes = () => {

    console.log('geting notes from firebase');

    return(dispatch => {
        Database.ref('/notes').on('value' , snapshot => {
            dispatch({
                type : 'GET_NOTES' , 
                payload : snapshot.val() 
            })
        })
    })
}


export const getYourNotes = (uid) => {

    console.log(uid);

    return dispatch => {
        Database.ref('/notes/'+uid).on('value' , snapshot => {
            dispatch({
                type : 'GET_YOUR_NOTES' , 
                payload : snapshot.val() 
            })
        })
    }
}


export const saveNotes = (uid,note) => {

    console.log(uid);
    console.log(note);  
    return((dispatch) => {
        Database.ref('/notes/'+uid).push(note) 
    })

}


export const updateNotes = (uid , key , note) => {
    // console.log('update');
    console.log(uid);
    console.log(key);
    return(dispatch => {
        Database.ref(`/notes/${uid}/${key}`).update(note) 
    })
}


export const deleteNotes = (id , uid) => {
    // console.log('delete');
    console.log(id , uid);
    // ${currentUser.uid}/employees/${uid}
    return(dispatch => {
        Database.ref(`/notes/${uid}/${id}`).remove() 
    })
}

export const clearNotes = () => {
    return ((dispatch) => {
        dispatch({
            type : 'CLEAR' , 
            payload : {} 
        })
    })
}

export const getUserList = () => {


    console.log('get user');

    return dispatch => {

        Database.ref('/profiles').on('value',snapshot => {
            dispatch({
                type : 'USER_LIST' , 
                payload : snapshot.val() 
            })
        })
    }
}

