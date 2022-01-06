import React,{useContext} from "react";
import { StateContext } from "../contexts";


export default function Header(){
    const {dispatch} = useContext(StateContext)
    

    
    
    function changeContent(e){
        
        dispatch({type: 'CHANGE_COMPONENT', component:e.target.id})
       
    }
    
    

    return(
        <div className=" bg-dark" style={{height: "100vh", width: "150px", float: "left"}}>
            <ul className="leftBar">
                <li><a href="#" onClick={changeContent} id="tutoriais"> Tutoriais </a> </li>
                <li><a href="#" onClick={changeContent} id="PainelLink"> Links </a> </li>
                <li><a href="#" onClick={changeContent} id="registros"> Registros </a> </li>
                
            </ul>
            
        </div>
    )
}