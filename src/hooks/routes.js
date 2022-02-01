import {Router, View, useCurrentRoute} from 'react-navi'
import {mount, route, map, redirect, lazy, withView, compose} from 'navi'
import HomePage from '../components/HomePage'
import { ListPage, PageCreate, PageEdit, Show } from '../components/tutoriais'
import { Page } from '../components/links'
import FormLogin from '../auth/Form'
import SideBar from '../components/layout/SideBar'




export default  compose(



    withView(request =>
        // This is the first view -- it renders the second within a
        // `<Layout>` component.
        <SideBar mountpath={request.mountpath || '/'}>
          <View />
        </SideBar> 
      ),


    mount({
      
      '*': map((request, context) =>
          !context.currentUser ? redirect(
            '/login?redirectTo='+
            encodeURIComponent(request.originalUrl),
            // By specifying exact: false, the redirect will match *all*
            // urls.
            { exact: false }
          )

        : mount({
          
          '/tutoriais': route ({view: <ListPage />}), 
          '/links': route ({view: <Page/>}),
          '/tutorial/create': route({view: <PageCreate/> }),
          '/tutorial/:id': route( req => { 
                                  return  { view: <Show id={req.params.id} /> } } ),
          '/tutorial/edit/:id': route( req => { 
            return  { view: <PageEdit id={req.params.id} /> } }),
            
          '/links' : route({view: <Page/>}),
  
         
          })
    ), 
    '/': redirect('/login'),
    '/login' : route({view: <FormLogin/>}),
 
        
        
      }) 
)

    


