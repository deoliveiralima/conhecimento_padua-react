import {RETRIEVE_LINKS, RETRIEVE_LINK, RETRIEVE_TUTORIAIS, RETRIEVE_TUTORIAL} from './actionTypes'

export function retrieveLinks(reponse, list){
    return async (dispatch) => {
        list()
        
        const links = links
        dispatch({type: RETRIEVE_LINKS, links})
    }

    

}