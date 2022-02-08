import {  useEffect } from "react"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { TutorialForm } from "."
import { useGetTutorial } from "../../api/apiTutorial"
import { Alert, Card } from "../accessories"


export default function PageEdit({}){
    const {id} = useParams()
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
    
   