import React, { useContext, useState } from "react"
import { StateContext } from "../contexts"
import { useCurrentRoute } from "react-navi"



export default function TitleBar(){


    return(
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
              <span className="navbar-brand mb-0 h1"> </span>
            </div>
            
        </nav>
    )
}