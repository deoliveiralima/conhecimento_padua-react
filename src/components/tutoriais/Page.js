
import React,{useEffect, useState} from "react"

import { useListTutorial } from "../../api/apiTutorial"
import { Card } from "../accessories"
import { TableList } from "."
import { useDispatch, useSelector } from "react-redux"
import { functionGetTutoriais, retrieveTutoriais } from "../../actions/actions"
import Paginator from "../accessories/Paginator"
export default function Page(){
   
    const [response, getTutoriais] = useListTutorial()
    const dispatch = useDispatch()
    const tutoriaisPage = useSelector(state=> state.tutoriaisPage)
    
    //
  
    useEffect(() => {
        getTutoriais(tutoriaisPage)
        dispatch(functionGetTutoriais(getTutoriais))
        

    }, [, tutoriaisPage])

   
    

    useEffect(() => {
        if(response.data){
            
            dispatch(retrieveTutoriais(response.data.data))
        }
       
    }, [response.data])
    useEffect(()=>{

    },[response])


    return(
        <div> 
            <div style={{height: "5vh"}}>
                {response.isLoading && <div className="spinner-border" role="status"/>}
            </div>
                
                <Card title={"Lista de tutoriais"} component={ response.data && <>  <TableList />  <Paginator data={response.data} />  </> }/> 
               
        </div>
    )

}
