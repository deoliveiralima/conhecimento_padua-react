import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useGetTutorial } from "../../api/apiTutorial"





export default function Show({}){
    const {id} = useParams()
    const [tutorial, setTutorial] = useState()

    const [response, getTutorial] = useGetTutorial()
   
    useEffect(() => {
        getTutorial(id)
    }, [id])
    useEffect( () => {
        if(response.data)
            setTutorial(response.data)

    }, [response])
  

    return(
        <div className="ms-3">
            
            {
                tutorial && 

                    <div>
                        <h3> {tutorial.titulo}</h3>
                        <hr/>
                        <p>
                          
                        
                        <div dangerouslySetInnerHTML={{__html: tutorial.texto}}></div>


                        </p>
                    </div>
                
            }
        </div>
    )


    
    }
    
   