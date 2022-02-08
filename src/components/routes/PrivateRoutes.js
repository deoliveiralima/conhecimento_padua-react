
import React from "react";
import { Link, Redirect, Route } from "react-router-dom";
import HomePage from "../HomePage";
import SideBar from "../layout/SideBar";
import { Page } from "../links";
import { ListPage, PageCreate, PageEdit, Show } from "../tutoriais";




export default function PrivateRoute(){
    
    const loggedUser = sessionStorage.getItem('token')

    if(!loggedUser){
        return <Redirect to={{ pathname: '/login'}} />
    }

    return(

        <>
            <div className="container "> 
            <div className="row" style={{ height: "100vh"}}>
                <div className="col-2 m-0 p-0" style={{ backgroundColor: "#FFFFFF", color: "#FFFFFF", border: "2px solid #EEEEEE"}} >
                <Route  path={'/'}>
               
                    <SideBar/> a
                </Route>
                </div>
                <div className="col-10 m-0 p-0" style={{}} >
                    <Route  exact path={'/'}>
                        <HomePage/>
                    </Route>
                    <Route  path={'/tutoriais'}>
                        <ListPage/>
                    </Route>
                    <Route path={'/links'}>
                        <Page/>
                    </Route>
                    <Route path={'/tutorial/create'}>
                        <PageCreate/>
                    </Route>
                    <Route path={'/tutorial/:id'}>
                        <Show />
                    </Route>
                    <Route path={'/tutorial/edit/:id'}>
                        <PageEdit />
                    </Route>
                </div>
            </div>
          </div> 
        
        </>
        
        
    )
} 