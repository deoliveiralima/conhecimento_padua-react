import { useEffect, useState } from "react"
import { useGetTutorial } from "../../api/apiTutorial"





export default function Show({id}){
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
                            {tutorial.texto}
                        </p>
                    </div>
                
            }
        </div>
    )


    
    }
    
   