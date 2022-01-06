



function changeComponent(state, action){
    switch(action.type){
        case 'CHANGE_COMPONENT':
            return action.component
        default:
            return state
    }

}

function linkReducer(state, action){
    switch(action.type){
        case 'EDIT_LINK':
            const link = action.link
            return link
        default:
            return state
    }
}

function linksReducer(state, action){
    switch(action.type){
        case 'GET_ALL_LINKS':
            return action.links
        case 'UPDATE_LINK_LIST':
            const newLink = {id: action.link.id, nome: action.link.nome, url: action.link.url}
            return [...state, newLink]
        default:
            return state
    }
}



export default function appReducer(state, action){

    return{
        component: changeComponent(state.component, action),
        linkEdit: linkReducer(state.linkEdit, action),
        links: linksReducer(state.links, action)
    }

   
}