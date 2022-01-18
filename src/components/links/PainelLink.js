import React from "react";

import CreateLink from "./CreateLink";
import ListLinks from "./ListLinks";


export default function PainelLink(){

    return(
        <div>
            
            <div className="container mt-2">
                <CreateLink/>
            
                <ListLinks />
            </div>

        </div>
       
            
    )


}