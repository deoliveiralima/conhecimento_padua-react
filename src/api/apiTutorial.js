import { useState } from "react";
import { useResource } from "react-request-hook";
import dataService from './DataService'
import http from './http-common'

export  function useCreateTutorial(){

    return  useResource( ({title, text})=> ({
        url: '/tutorial',
        method: 'post',
        data: {title, text}
    }))

}



export  function useListTutorial(){
    return useResource(() => ({
        url: `/tutorial`,
        method: 'get',
        

    }))

}

export  function useGetTutorial(){
    return useResource((id) => ({
        url: `/tutorial/${id}`,
        method: 'get',
    }))
}

export  function useUpdateTutorial(){
    return useResource((id, title, text) => ({
        url: `/tutorial/${id}`,
        method: 'put',
        data: {title, text}
        

    }))

}

export  function useRemoveTutorial(){
    return useResource((id) => ({
        url: `/tutorial/${id}`,
        method: 'delete',
        
        

    }))

}