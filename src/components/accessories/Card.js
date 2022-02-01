import React from "react";

export default function Card ({title, component}){
    return(
        <>
        <div className="card">
            <div className="card-header">
                {title}
            </div>
            <div className="card-body">
                {component}
            </div>
            </div>
        </>

    )
   
}