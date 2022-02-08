import { useResource } from "react-request-hook";

const token = sessionStorage.getItem('token')

export  function useCreateLink(){
   

    return  useResource( (nome, url)=> ({
        url: '/link',
        method: 'post',
        data: {nome, url},
        headers: {"Authorization" : `Bearer ${token}`}
    }))

}

export  function useListLinks(){
    return useResource(() => ({
        url: `/link`,
        method: 'get',
        headers: {"Authorization" : `Bearer ${token}`}
        
    }))

}

export  function useGetLink(){
    return useResource((id) => ({
        url: `/link/${id}`,
        method: 'get',
        headers: {"Authorization" : `Bearer ${token}`}
    }))
}

export  function useUpdateLink(){
    return useResource((id, nome, url) => ({
        url: `/link/${id}`,
        method: 'put',
        data: {nome, url},
        headers: {"Authorization" : `Bearer ${token}`}
    }))
}
export  function useRemovelink(){ 
    return useResource((id) => ({
        url: `/link/${id}`,
        method: 'delete',
        headers: {"Authorization" : `Bearer ${token}`}

    }))

}