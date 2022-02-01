import {Router, View, useCurrentRoute} from 'react-navi'
import {mount, route} from 'navi'
import HomePage from '../components/HomePage'
import { ListPage, PageCreate, PageEdit, Show } from '../components/tutoriais'
import { Page } from '../components/links'
import FormLogin from '../auth/Form'





export default function useRoutes() {

    const routes = mount({
        '/' : route({view: <HomePage/>}),
        '/tutoriais': route ({view: <ListPage />}),
        '/links': route ({view: <Page/>}),
        '/tutorial/create': route({view: <PageCreate/> }),
        '/tutorial/:id': route( req => { 
                                return  { view: <Show id={req.params.id} /> } } ),
        '/tutorial/edit/:id': route( req => { 
          return  { view: <PageEdit id={req.params.id} /> } }),
          
        '/links' : route({view: <Page/>}),
        '/login' : route({view: <FormLogin/>}),
        
      })

      return routes 
    
}