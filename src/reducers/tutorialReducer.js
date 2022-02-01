

export function tutoriais (state = [], action){
    switch(action.type){
        case 'RETRIEVE_TUTORIAIS':
            return action.tutoriais
        
        default:
            return state
    }
}

export function tutorial (state = {}, action){
    switch(action.type){
        case 'RETRIEVE_TUTORIAL':
            return action.tutorial
        default:
            return state
    }
}

export function getTutoriais (state = () =>{}, action){
    switch(action.type){
        case 'FUNCTION_GET_TUTORIAIS':
            return action.getTutoriais
        default:
            return state
    }
}
export function tutoriaisPage(state = 1 , action){
    switch (action.type){
        case 'SET_PAGE':
            return action.page

        case 'FORWARD_PAGE':
            
            return  state<action.totalPages? state+1 :  state

        case 'BACKWARD_PAGE':
           
            return state>1 ?  state-=1 : state

        default:
            return state
    }
}