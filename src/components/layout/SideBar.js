import React from "react";

import { Link } from "react-navi";


//css



export default function SideBar(){

    
    

    return(
        <div className="list-group sideBar">
            <Link href={'/'} className="list-group-item list-group-item-action"> <h2>  Home </h2> </Link>

            <Link href={'/tutoriais'} className="list-group-item list-group-item-action"> Tutoriais</Link>
            <Link href={'/links'} className="list-group-item list-group-item-action"> Links </Link>
              <a href="#"  id="registros" className="list-group-item list-group-item-action"> Registros </a>
              <Link href={'/login'} className="list-group-item list-group-item-action"> login </Link>

         
        </div>

              
         
    )
}