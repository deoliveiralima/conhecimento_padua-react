
import { useContext } from "react";
import { StateContext } from "../contexts";

export  function useTutoriais(){
    const {state} = useContext(StateContext)

    return state.tutoriais
}

export  function useTutorial(){
    const {state} = useContext(StateContext)
    
    return state.tutorial
}