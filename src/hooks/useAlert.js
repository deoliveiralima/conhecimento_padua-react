import React from "react";
import { useDispatch } from "react-redux";

import { useTimeout } from "react-hookedup";

export default function useAlert(){
    const time = useTimeout()
    

    const dispatch = useDispatch()
    const alert = (response = {}) =>{
        if(response.error){
           
            dispatch({type: 'SET_ALERT_MESSAGE', alertMessage: "Erro ao salvar o item"})
            dispatch({type: 'SET_ALERT_CLASS', alertClass: "alert alert-danger"})
        }
        else if(response.data){
           
            dispatch({type: 'SET_ALERT_MESSAGE', alertMessage: "Item salvo com sucesso"})
            dispatch({type: 'SET_ALERT_CLASS', alertClass: "alert alert-success"})

            setTimeout(() => {
                dispatch({type: 'SET_ALERT_MESSAGE', alertMessage: ""})
                dispatch({type: 'SET_ALERT_CLASS', alertClass: ""})
            }, 3000);


            console.log(time)
        }

        
        
    }
        
    

    return alert;
    
    


}