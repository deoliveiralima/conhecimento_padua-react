import { useContext, useEffect } from "react"
import { StateContext } from "../../contexts"


export default function TutorialShow({tutorial}){

    console.log(tutorial)


    return(
        <>
            
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
        </>
    )
}