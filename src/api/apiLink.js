import { useResource } from "react-request-hook";

export  function useCreateLink(){

    return  useResource( ({nome, url})=> ({
        url: '/link',
        method: 'post',
        data: {nome, url}
    }))

}

export  function useListLinks(){
    return useResource(() => ({
        url: `/link`,
        method: 'get',
        
    }))

}

export  function useGetLink(){
    return useResource((id) => ({
        url: `/link/${id}`,
        method: 'get',
    }))
}

export  function useUpdateLink(){
    return useResource((id, nome, url) => ({
        url: `/link/${id}`,
        method: 'put',
        data: {nome, url}
    }))
}
export  function useRemovelink(){
    return useResource((id) => ({
        url: `/link/${id}`,
        method: 'delete',

    }))

}