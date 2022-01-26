import {  useEffect } from "react"

import { useGetTutorial } from "../api/apiTutorial"
import EditTutorial from "../components/tutoriais/EditTutorial"

export default function EditTutorialPage({id}){
    
    const [response, getTutorial] = useGetTutorial()

   
    useEffect(() => {
        getTutorial(id)
    }, [id])

  

    return(
        <>
            {response.data ? <EditTutorial tutorial={response.data}/> : "...carregando" }
            
        </>
    )


    
    }
    
   