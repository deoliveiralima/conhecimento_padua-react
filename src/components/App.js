import React, { useState } from "react";

import {Router, View, useCurrentRoute} from 'react-navi'

import SideBar from "./layout/SideBar";
import { useRoutes } from "../hooks";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import { Page } from "./links";
import FormLogin from "../login/Form";
import PrivateRoute from "./routes/PrivateRoutes";
import HomePage from "./HomePage";
import { ListPage, PageCreate, PageEdit, Show } from "./tutoriais";
import { useSelector } from "react-redux";
import LoginPage from "../login/Page";
import { BrowserRouter } from "react-router-dom";


function App() {
  
 
  const route = useCurrentRoute()
  const rotas = useRoutes()
  const login = useSelector(state => state.login)

  const username = sessionStorage.getItem('token')
  console.log(username)
  


  return (
    <div className="App" style={{margin: 0}}>
      
 
          

            
          <BrowserRouter>
            
              <PrivateRoute  />
  

              <Route path="/login" component={LoginPage} />
              
              
          </BrowserRouter>
           
     

     
    </div>
  );
}

export default App;
