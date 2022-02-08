import { combineReducers } from "redux"
import { links, link, getLinks } from "./linkReducers"
import { tutoriais, tutorial, getTutoriais, tutoriaisPage } from "./tutorialReducer"
import {login} from './loginReducer'

    function alertClass( state = '', action){
        switch(action.type){
            case 'SET_ALERT_CLASS':
                return action.alertClass
            default:
                return state
        }
    }

    function alertMessage( state = '', action){
        switch(action.type){
            case 'SET_ALERT_MESSAGE':
                return action.alertMessage
            default:
                return state
        }
    }

// function tutoriais (state = [], action){

// }

// function tutorial (state = {}, action){

// }

const appReducer = combineReducers({links, link, getLinks, alertClass, alertMessage, tutoriais, tutorial, getTutoriais, tutoriaisPage, login})

export default appReducer