import React,{ useEffect } from "react";
import { useDispatch } from "react-redux";

import { useListLinks } from "../../api";

import {  TableList } from ".";
import { Alert, Card } from "../accessories";

import { FormData } from ".";
import { functionGetLinks, retrieveLinks } from "../../actions/actions";


 export default function Page(){
     

    const [response, getLinks] = useListLinks()

    const dispatch = useDispatch()
    
  
    

    useEffect(()=> {
        getLinks()
        dispatch(functionGetLinks(getLinks))
        
    },[]) 

    useEffect(() => {
        if(response.data){
           
            dispatch(retrieveLinks(response.data))
          
        }
       
            
    }, [response])


    return(
        <>
            
            <div style={{height: "5vh"}}>
            
                {response.isLoading && <div className="spinner-border" role="status"/>}
            
            </div>
            
            <Card title={"Adicionar Links"} component={<FormData/>}/>
            <div className="alert-div"> 
                <Alert/>
            </div>
            <Card title={"Lista de Links"} component={<TableList/>} />
          
        </>
    ) 

}

