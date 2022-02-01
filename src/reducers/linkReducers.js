export function links (state = [], action){
    switch(action.type){
        case 'RETRIEVE_LINKS':
            const newLinks = action.links
    
            return [...newLinks]
        default:
            return state
        
    }
    
}

export function link (state = {}, action){
    switch(action.type){
        case 'RETRIEVE_LINK':
            return {...action.link}
        default:
            return state
    }

}

export function getLinks( state = ()=>{}, action){
    switch(action.type){
        case 'FUNCTION_GET_LINKS':
            return action.getLinks
        default:
            return state
    }
}