import {RETRIEVE_LINKS, RETRIEVE_LINK, FUNCTION_GET_LINKS, RETRIEVE_TUTORIAIS, 
    RETRIEVE_TUTORIAL, FUNCTION_GET_TUTORIAIS, FORWARD_PAGE, BACKWARD_PAGE,SET_PAGE, SET_LOGIN} from './actionTypes'

export function retrieveLinks(links){
    
    return { type: RETRIEVE_LINKS, links }

}

export function retrieveLink(link){
    
    return { type: RETRIEVE_LINK, link }

}


export function functionGetLinks(getLinks){
    
    return { type: FUNCTION_GET_LINKS, getLinks }

}

//-----------

export function retrieveTutoriais(tutoriais){
    return { type: RETRIEVE_TUTORIAIS, tutoriais }
}

export function retrieveTutorial(tutorial){
    return { type: RETRIEVE_TUTORIAL, tutorial }
}

export function functionGetTutoriais(getTutoriais){

    return { type: FUNCTION_GET_TUTORIAIS, getTutoriais }
}

export function forwardPage(totalPages){
    return { type: FORWARD_PAGE, totalPages }
}

export function backwardPage(){
    return { type: BACKWARD_PAGE }
}

export function setPage(page){
    return { type: SET_PAGE, page }
}

export function  setLogin(login) { 
    console.log(login)
    return {type: SET_LOGIN, login}
}