import { combineReducers } from "redux"



function links (state = [], action){
    switch(action.type){
        case 'RETRIEVE_LINKS':
            const newLinks = action.links
       
            return [...newLinks]
        default:
            return state
        
    }
    
}

    function link (state = {}, action){
        switch(action.type){
            case 'RETRIEVE_LINK':
                return {...action.link}
            default:
                return state
        }

    }

    function getLinks( state = ()=>{}, action){
        switch(action.type){
            case 'FUNCTION_GET_LINKS':
                return action.getLinks
            default:
                return state
        }
    }

    function alertClass( state = '', action){
        switch(action.type){
            case 'SET_CLASS':
                return action.alertClass
            default:
                return state
        }
    }

    function alertMessage( state = '', action){
        switch(action.type){
            case 'SET_MESSAGE':
                return action.alertMessage
            default:
                return state
        }
    }

// function tutoriais (state = [], action){

// }

// function tutorial (state = {}, action){

// }

const appReducer = combineReducers({links, link, getLinks, alertClass, alertMessage})

export default appReducer