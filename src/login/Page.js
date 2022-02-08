import React from "react";
import LoginCard from "./Card";

import FormLogin from "./Form";

export default function LoginPage() {

    return(
        <div className="page-login">
        

        <div className="d-flex justify-content-center">
                
            <LoginCard title={"login"} component={<FormLogin/>}/>
            
            </div>
            
        </div>
    )
    
}