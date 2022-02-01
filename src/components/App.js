import React from "react";

import {Router, View, useCurrentRoute} from 'react-navi'

import TitleBar from "./layout/TitleBar";
import SideBar from "./layout/SideBar";
import { useRoutes } from "../hooks";


function App() {
 
  const route = useCurrentRoute()
  const routes = useRoutes()

  return (
    <div className="App" style={{margin: 0}}>
      
      <Router routes={routes}>
       
        <div className="container ">
        <div className="row" style={{ height: "100vh"}}>
          <div className="col-2 m-0 p-0" style={{ backgroundColor: "#FFFFFF", color: "#FFFFFF", border: "2px solid #EEEEEE"}} >
              <SideBar/>
          </div>

          <div className="col-10 m-0 p-0" style={{}} >
            <TitleBar/>
            <View  />
          </div>
        </div>
        </div>
  
      </Router>
     
    </div>
  );
}

export default App;
