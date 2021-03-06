
import HomePage from '../components/HomePage'
import { ListPage, PageCreate, PageEdit, Show } from '../components/tutoriais'
import { Page } from '../components/links'
import FormLogin from '../login/Form'
import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'
import SideBar from '../components/layout/SideBar'




export default function useRoutes() {
  
  const routes = 

    <BrowserRouter>
          <div className="container "> 
            <div className="row" style={{ height: "100vh"}}>
                <div className="col-2 m-0 p-0" style={{ backgroundColor: "#FFFFFF", color: "#FFFFFF", border: "2px solid #EEEEEE"}} >
                <Route  path={'/'}>
                    <SideBar/> a
                </Route>
                </div>
                <div className="col-10 m-0 p-0" style={{}} >
                    <Route exact path={'/tutoriais'}>
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
    </BrowserRouter>

      return routes 


    
}