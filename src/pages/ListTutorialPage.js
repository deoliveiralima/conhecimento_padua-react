
import React,{useContext, useEffect, useState} from "react"
import { useLoadingRoute } from "react-navi"
import { useListTutorial } from "../api/apiTutorial"
import TutorialList from "../components/tutoriais/ TutorialList"
import { StateContext } from "../contexts"
import { useDispatch, useTutoriais } from "../hooks"
import { useCurrentRoute } from "react-navi"



export default function ListTutorialPage({}){
   
    const data = useCurrentRoute()

    const [response, getListaTutoriais] = useListTutorial()
    const [tutoriais, setTutoriais] = useState()

    //console.log(data)


    useEffect(() => {
        
            getListaTutoriais()
        
    }, [])

    useEffect(() => {
       
        //dispatch({type: 'LIST_TUTORIAIS', tutoriais: response.data})
        setTutoriais(response.data)
       
        
    }, [response])



    return(
        <div> 
            {response.isLoading && "...carregando"} <br/>
            <TutorialList tutoriais={tutoriais}/>

        </div>
    )

}
