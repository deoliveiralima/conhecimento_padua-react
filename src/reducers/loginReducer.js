export function login (state = {}, action){
    switch(action.type){
        case 'SET_LOGIN':
            return {...action.login}
        
        default:
            return state
    }
}
