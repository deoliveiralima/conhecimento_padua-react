import React from "react";
import { useSelector } from "react-redux";

export default function Alert({}) {
    const alertClass = useSelector(state => state.alertClass)
    const alertMessage = useSelector(state => state.alertMessage)

    return(
        <div className={alertClass}> 
            {alertMessage}
        </div>
    )
}