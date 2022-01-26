
//Hooks imports
import React, { useEffect, useState } from "react";
import TableList from "./TableList";


function CardList(){

      
    return(
        <div  className="mt-4">
            <div className="card">
            <div className="card-header">
                Links adicionados
            </div>
            <div className="card-body">
                <TableList />
            </div>
            </div>
     
            
        </div>
    )

}
 
export default React.memo(CardList)
