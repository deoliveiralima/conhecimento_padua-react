import { useContext, useEffect, useState } from "react"
import { Link } from "react-navi"
import { StateContext } from "../contexts"
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
    
   