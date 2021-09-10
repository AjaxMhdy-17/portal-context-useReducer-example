import { combineReducers } from "redux";

import otherReducer from './otherReducer'
import userReducer from './userReducer'
const rootReducer = combineReducers({
    color : otherReducer , 
    user : userReducer
})

export default rootReducer 