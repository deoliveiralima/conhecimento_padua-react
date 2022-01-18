import { useContext, useEffect } from "react"
import { Link } from "react-navi"
import { StateContext } from "../../contexts"
import TutorialDataService from '../services/TutorialService'

export default function TutorialShow(){
    const {state, dispatch} = useContext(StateContext)
    const {tutorial} = state
    


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