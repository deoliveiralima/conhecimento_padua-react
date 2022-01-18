import React,{useState, useReducer, useContext} from "react";

import {StateContext} from './contexts'

import LeftBar from './layout/LeftBar'


import appReducer from "./reducers";
import HomePage from "./pages/HomePage";

import {Router, View, useCurrentRoute} from 'react-navi'
import {mount, route} from 'navi'

import { Link } from "react-navi";

//components de rotas
import PainelLink from "./components/links/PainelLink";
import ListTutorialPage from "./pages/ListTutorialPage";
import CreateTutorialPage from "./pages/CreateTutorialPage";
import TutorialPage from "./pages/TutorialPage";
import EditTutorialPage from "./pages/EditTutorialPage";
import ListLinkPage from "./pages/links/ListLinkPage";

//css

import './components/css/style.css'
 

const routes = mount({
  '/' : route({view: <HomePage/>}),
  '/tutoriais': route ({view: <ListTutorialPage />, title :"Lista de Tutoriais"}),
  '/links': route ({view: <PainelLink/>}),
  '/tutorial/create': route({view: <CreateTutorialPage/> }),
  '/tutorial/:id': route( req => { 
                          return  { view: <TutorialPage id={req.params.id} /> } } ),
  '/tutorial/edit/:id': route( req => { 
    return  { view: <EditTutorialPage id={req.params.id} /> } }),
  '/links' : route({view: <ListLinkPage/>}),
  
})

const initialState = {
  link: {},
  links: [],
  tutoriais: [],
  title: ''
}

function App() {

  const [state, dispatch] = useReducer(appReducer, initialState)
  const [title, setTitle] = useState('título');
  const route = useCurrentRoute()
  console.log(route)


  return (
    <div className="App" style={{margin: 0}}>
      <StateContext.Provider value={{state, dispatch}}> 
      <Router routes={routes}>
       
        
        <div className="d-flex bd-highlight" style={{ height: "100vh"}}>
          <div className="p-2  flex-grow-1 bd-highlight" style={{ width:"15%", backgroundColor: "#359931", color: "#FFFFFF"}} >
              <nav className="fs-4 nav flex-column menu">
                <Link href={'/'}> <h2>  Home </h2> </Link>
                <Link href={'/tutoriais'}> Tutoriais</Link>
                <Link href={'/links'}> Links </Link>
              <a href="#"  id="registros"> Registros </a>
              </nav>
          </div>

          <div className="p-0 w-100 bd-highlight" style={{}} >
          
            <div className="container">
              <View  />
            </div>
            
          </div>
        </div>
      
        
            
        
        
        {/* <Content /> */}
      </Router>
      </StateContext.Provider>
    </div>
  );
}

export default App;
