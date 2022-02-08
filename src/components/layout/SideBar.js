import React from "react";

import { Link } from "react-navi";
import { useHistory } from "react-router-dom";

import { AiOutlineUser } from "react-icons/ai";
//css



export default function SideBar(){
    const username = sessionStorage.getItem('username')
    const history = useHistory()




    return(
        <>
        <div>
        <div className="card" style={{backgroundColor: "#EEEEEE"}}>
 
            <div className="card-body">
              <span className="h4 " style={{color: "red"}}>  <AiOutlineUser/> {username}</span>
            <button onClick={() => {sessionStorage.clear(); history.go("/login")  }} className="btn btn-danger mt-3" style={{width: '100%'}}> sair</button>
       
            </div>
            </div>
        </div>
        <div className="list-group sideBar">
            <Link href={'/'} className="list-group-item list-group-item-action"> <h2>  Home </h2> </Link>

            <Link href={'/tutoriais'} className="list-group-item list-group-item-action"> Tutoriais</Link>
            <Link href={'/links'} className="list-group-item list-group-item-action"> Links </Link>
              <a href="#"  id="registros" className="list-group-item list-group-item-action"> Registros </a>
            
            

         
        </div>

        </>

              
         
    )
}

