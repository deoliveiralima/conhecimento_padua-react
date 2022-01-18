function linkReducer(state, action){
    switch(action.type){
        case 'SET_LINK':
            const link = action.link
            return link
        case 'RESET_LINK':
           
            return {...state, id: '', nome: '', url: ''}
        default:
            return state
    }
}

function linksReducer(state, action){
    switch(action.type){
        case 'LIST_LINKS':
            return action.links
        case 'UPDATE_LINK_LIST':
            console.log(action.link)
            const elementsIndex = state.findIndex(element => element.id === action.id )
            let newArray = [...state]
            newArray[elementsIndex] = {...newArray[elementsIndex], nome: action.link.nome, url: action.link.url}
            return  newArray
        case 'REMOVE_LINK_FROM_LIST':
            const newLinkList = state.filter((link) => link.id !== action.id)
            return newLinkList
        case 'ADD_LINK_IN_LIST':
           
            return [...state, action.link]
        default:
            return state 
    }

    
}

function tutoriaisReducer(state, action){
    switch(action.type){
        case 'LIST_TUTORIAIS':
            return action.tutoriais 
        default:
            return state
    }
}

function tutorialReducer(state, action){
    switch(action.type){
        case 'SET_TUTORIAL':
            return action.tutorial
        default:
            return state
    }
}



export default function appReducer(state, action){

    return{
       
        link: linkReducer(state.linkEdit, action),
        links: linksReducer(state.links, action),
        tutoriais: tutoriaisReducer(state.tutoriais, action),
        tutorial: tutorialReducer(state.tutorial, action),
    }

   
}