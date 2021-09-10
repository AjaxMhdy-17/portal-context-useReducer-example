

const initState = {
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
    totalNumberOfColor : 0 ,
    isModalOpen : false ,
}



const otherReducer = (state = initState , action)  => {

    if(action.type === 'getColorInfo'){
        return action.payload
    }
    else if(action.type === 'increaseSpecifiqColor'){

        const up = Object.entries(state.colors).map(key => {
            if(key[0] === action.payload){
              
                return [key[0],key[1]+1] 
            }
            return key 
        })
        const modifiedColorsState = Object.fromEntries(up)
        return ({
            ...state , 
            colors : modifiedColorsState,  
        })
    }

    else if(action.type === 'decreaseSpecifiqColor'){

        const up = Object.entries(state.colors).map(key => {
            if(key[0] === action.payload){
              
                return [key[0],key[1]-1] 
            }
            return key 
        })
        const modifiedColorsState = Object.fromEntries(up)
        return ({
            ...state , 
            colors : modifiedColorsState,  
        })
    }
    
    else if(action.type === 'updatePrice'){

        let price = 0 ;
        let totalNumberOfColor = 0 ;
        const colors = Object.keys(state.colors).map(color => {
            if(state.colors[color] > 0){
                totalNumberOfColor += state.colors[color]
            }
            price += state.colors[color]*state.price[color]
        })

        return ({
            ...state , 
            totalPrice : price ,
            totalNumberOfColor :totalNumberOfColor
        })
    }

    else if(action.type === 'openModal'){

        return ({
            ...state , 
            isModalOpen : action.payload
        })
    }
    else if(action.type === 'closeModal'){

        return ({
            ...state , 
            isModalOpen : action.payload
        })
    }

    else if(action.type === 'resetColor'){
        return({
            ...state , 
            colors : {
                purple : 0 ,
                green : 0 , 
                blue : 0 , 
                red : 0 , 
                brown : 0, 
                black : 0
            },
            totalPrice : 0 ,
            totalNumberOfColor : 0 ,
            isModalOpen : false ,
        })
    }

    return state ;
}

export default otherReducer ;
