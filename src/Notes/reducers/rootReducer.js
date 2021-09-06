
import { combineReducers } from "redux";
import {notesReducer} from './notesReducer'
import {userReducer} from './userReducer'

export const rootReducer = combineReducers({
    notes : notesReducer , 
    user : userReducer 
})