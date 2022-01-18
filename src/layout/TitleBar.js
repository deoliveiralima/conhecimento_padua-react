import React, { useContext } from "react"
import { StateContext } from "../contexts"



export default function TitleBar(){
    const {state} = useContext(StateContext)
    const {title} = state


    return(
        <div style={{width:"100%", borderLeft: "1px solid #FFFFFF", height: "75px", backgroundColor: "#359931", color: "#FFFFFF"}}>

            <div className="h2"> {title}</div>

        </div>
    )
}