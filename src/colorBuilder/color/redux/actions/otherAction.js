
import Firebase from '../../All/Firebase/firebase'

export const getColorInfo = () => {

    return dispatch => {

        Firebase.database().ref('colorInfo').on('value' , snapshot => {
            dispatch({
                type : 'getColorInfo' , 
                payload : snapshot.val() 
            })
        })
    }
}

export const increaseSpecifiqColor = (colorName) => {

    return({
        type : 'increaseSpecifiqColor' , 
        payload : colorName
    })
}

export const decreaseSpecifiqColor = (colorName) => {
    
    return({
        type : 'decreaseSpecifiqColor',
        payload : colorName
    })
}

export const updatePrice = () => {
        return({
            type : 'updatePrice' , 
        })
}

export const resetColor = () => {
    return({
        type : 'resetColor' ,
    })
}


export const openModal = () => {
    return({
        type : 'openModal' , 
        payload : true 
    })
}

export const closeModal = () => {
    return({
        type : 'openModal' , 
        payload : false 
    })
}


