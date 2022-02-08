
import { useResource } from "react-request-hook";
const token = sessionStorage.getItem('token')

export  function useCreateTutorial(){

    return  useResource( (title, text)=> ({
        url: '/tutorial',
        method: 'post',
        data: {title, text},
        headers: {"Authorization" : `Bearer ${token}`}
    }))
}

export  function useListTutorial(){
    return useResource((page) => ({
        url: `/tutorial?page=${page}`,
        method: 'get',
        headers: {"Authorization" : `Bearer ${token}`}
    }))

}

export  function useGetTutorial(){
    return useResource((id) => ({
        url: `/tutorial/${id}`,
        method: 'get',
        headers: {"Authorization" : `Bearer ${token}`}
    }))
}

export  function useUpdateTutorial(){
    return useResource((id, title, text) => ({
        url: `/tutorial/${id}`,
        method: 'put',
        data: {title, text},
        headers: {"Authorization" : `Bearer ${token}`}
        

    }))

}

export  function useRemoveTutorial(){
    return useResource((id) => ({
        url: `/tutorial/${id}`,
        method: 'delete',
        headers: {"Authorization" : `Bearer ${token}`}
        
        

    }))

}