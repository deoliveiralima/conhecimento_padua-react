import React, { Component } from "react";

export default function LoginCard({title, component:Component}) {

    return (
        <div className="card mt-5 card-login" style={{width: "25rem"}}>
             <div className="card-header">
                <span className="h3"> Bem-vindo(a) </span>
        </div>
        <div className="card-body">
            {Component}
        </div>
        </div>
    )
    
}