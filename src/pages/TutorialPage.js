import { useEffect, useState } from "react"
import { useGetTutorial } from "../api/apiTutorial"
import TutorialShow from "../components/tutoriais/TutorialShow"



export default function TutorialPage({id}){
    const [tutorial, setTutorial] = useState()

    const [response, getTutorial] = useGetTutorial()
   
    useEffect(() => {
        getTutorial(id)
    }, [id])
    useEffect( () => {
        
        setTutorial(response.data)
    }, [response])
  

    return(
        <>
            
            <TutorialShow tutorial={tutorial}/>
        </>
    )


    
    }
    
   