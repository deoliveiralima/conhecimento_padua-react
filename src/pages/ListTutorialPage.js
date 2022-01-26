
import React,{useEffect, useState} from "react"

import { useListTutorial } from "../api/apiTutorial"
import TutorialList from "../components/tutoriais/ TutorialList"


import { useCurrentRoute } from "react-navi"



export default function ListTutorialPage({}){
   
    const data = useCurrentRoute()

    const [response, getListaTutoriais] = useListTutorial()
    const [tutoriais, setTutoriais] = useState()


    useEffect(() => {
        
            getListaTutoriais()
        
    }, [])

    useEffect(() => {
        //dispatch({type: 'LIST_TUTORIAIS', tutoriais: response.data})
        setTutoriais(response.data)
    }, [response])



    return(
        <div> 
            <div style={{height: "5vh"}}>
                {response.isLoading && <div className="spinner-border" role="status"/>}
            </div>
                <TutorialList tutoriais={tutoriais} getListaTutoriais = {getListaTutoriais}/>
        </div>
    )

}
