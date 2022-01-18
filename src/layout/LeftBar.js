import React,{useContext} from "react";
import { StateContext } from "../contexts";
import { Link } from "react-navi";


export default function Header(){

    
    

    return(
        <div className=" bg-dark" style={{height: "100vh"}}>
            <ul className="leftBar">
                <li><Link href={'/'}> <h2>  Home </h2> </Link>  </li>
                <li><Link href={'/tutoriais'}> Tutoriais</Link> </li>
                <li> <Link href={'/links'}> Links </Link> </li>
                <li><a href="#"  id="registros"> Registros </a> </li>
                
            </ul>
            
        </div>
    )
}