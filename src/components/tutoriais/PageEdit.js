import {  useEffect } from "react"
import { TutorialForm } from "."
import { useGetTutorial } from "../../api/apiTutorial"
import { Alert, Card } from "../accessories"


export default function PageEdit({id}){
    
    const [response, getTutorial] = useGetTutorial()


    useEffect(() => {
        getTutorial(id)
    }, [id])
   


    return(
        <>
        <div className="alert-div"> 
            <Alert/>
        </div>

            {response.data ? <Card title={"Salvar Tutorial"} component={<TutorialForm tutorial={response.data}/>}/>: "...carregando" }
            
            
            
        </>
    )


    
    }
    
   