import React from "react";
import { Card } from "../components/accessories";
import FormLogin from "./Form";

export default function LoginPage() {

    return(
        <>
            <Card title={"login"} component={<FormLogin/>}/>
        </>
    )
    
}