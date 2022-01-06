import React, {useContext} from "react";
import PainelLink from "../components/links/PainelLink";

import { StateContext } from "../contexts";

export default function  Content(){

    const {state} = useContext(StateContext)
    const {component} = state

    return(
        <div style={{float: "right", marginRight: "25%"}}>
            {component === 'PainelLink' && <PainelLink/>}
        </div>
    )
}