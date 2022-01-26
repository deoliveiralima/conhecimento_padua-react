import React,{useState, useReducer} from "react";

import {StateContext} from './contexts'

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


//css

import './components/css/style.css'
import TitleBar from "./layout/TitleBar";
import SideBar from "./layout/SideBar";
import LinkPage from "./pages/links/LinkPage";
 

const routes = mount({
  '/' : route({view: <HomePage/>}),
  '/tutoriais': route ({view: <ListTutorialPage />, title :"Lista de Tutoriais"}),
  '/links': route ({view: <PainelLink/>, title: "Painel Link"}),
  '/tutorial/create': route({view: <CreateTutorialPage/>, title: "Adicionar Novo Link" }),
  '/tutorial/:id': route( req => { 
                          return  { view: <TutorialPage id={req.params.id} /> } } ),
  '/tutorial/edit/:id': route( req => { 
    return  { view: <EditTutorialPage id={req.params.id} /> } }),
    
  '/links' : route({view: <LinkPage/>}),
  
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
        
        {/* <Content /> */}
      </Router>
      </StateContext.Provider>
    </div>
  );
}

export default App;
