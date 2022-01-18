import { useContext } from "react";
import context from "react-bootstrap/esm/AccordionContext";
import { StateContext } from "../contexts";

export function useLinks(){
    const {state} = useContext(StateContext)
    return state.links
}



export function useLink(){
    const {state} = useContext(StateContext)
    return state.link
}