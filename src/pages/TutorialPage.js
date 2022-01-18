import { useContext, useEffect } from "react"
import { Link } from "react-navi"
import { StateContext } from "../contexts"
import { useGetTutorial } from "../api/apiTutorial"
import TutorialShow from "../components/tutoriais/TutorialShow"
import { useDispatch } from "../hooks"


export default function TutorialPage({id}){
    const dispatch = useDispatch()

    const [tutorial, getTutorial] = useGetTutorial()
   
    useEffect(() => {
        getTutorial(id)
    }, [id])
    useEffect( () => {
        
        dispatch({type:'SET_TUTORIAL', tutorial: tutorial.data })
    }, [tutorial])
  

    return(
        <>
            
            <TutorialShow/>
        </>
    )


    
    }
    
   