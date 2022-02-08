import { useState } from "react";
import { useResource } from "react-request-hook";
import dataService from './DataService'
import http from './http-common'

export  function useLogin(){

    return  useResource( (cpf, password)=> ({
        url: 'http://127.0.0.1:8000/api/login',
        method: 'post',
        
        data: {cpf, password}
    }))
}