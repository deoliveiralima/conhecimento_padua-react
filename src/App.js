import React,{useState, useReducer, useEffect} from "react";

import Header from "./layout/Header";
import {StateContext} from './contexts'

import LeftBar from './layout/LeftBar'
import Content from "./layout/Content";

import appReducer from "./reducers";

function App() {

  const [state, dispatch] = useReducer(appReducer, {component: '', linkEdit:{}, links:[]})
  
 



  return (
    <div className="App">
      <StateContext.Provider value={{state, dispatch}}> 
        <LeftBar /> 
        <Content />
      </StateContext.Provider>
    </div>
  );
}

export default App;
