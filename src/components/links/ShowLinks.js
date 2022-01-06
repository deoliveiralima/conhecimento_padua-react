import axios from "axios";
import React, { useEffect, useState, useContext } from "react";

import { AiFillDelete } from "react-icons/ai";
import {BiPencil} from 'react-icons/bi'
import { useResource } from "react-request-hook";
  
import { StateContext } from "../../contexts";

import { edit } from "../../crud";

function ShowLinks(){
    
    const {state, dispatch} = useContext(StateContext)
    const {links} = state


    const [linkEdit, setLinkEdit] = useState(null)
    const [id, setId] = useState()
    useEffect(()=> {
        getLinks()
      }, [])
      
    const [ fetchedLinks, getLinks ] = useResource(() => ({
        url: '/link',
        method: 'get'
      }))

      useEffect(()=> {
          
          if(fetchedLinks.data){
            dispatch({type: 'GET_ALL_LINKS', links: fetchedLinks.data})
          }
      }, [fetchedLinks]) 

      useEffect(()=> {
        console.log(links)

    }, [links]) 

    //quando clicar no botão de editar o id será preenchido e irá fazer a busca do item pretendido
   
    function editLink(id){
       
       
    }

    function deleteLink(id){
        axios.delete(`http://localhost:8000/api/link/${id}`).then((response) => { setLinkEdit(response.data)})
        getLinks()
       
    }
 

    useEffect(() => {
        if(linkEdit) 
            dispatch({type: 'EDIT_LINK', link: {nome: linkEdit.nome, url: linkEdit.url, id: linkEdit.id} })
    }, [linkEdit])

    return(
        <div>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">URL</th>
                    <th scope="col"> Opções </th>
                    </tr>
                </thead>
                <tbody> 
                    {  links.map( (link) => (
                        
                        <tr key={link.id} >
                            <th scope="row">{link.id} </th>
                            <td>{link.nome}</td>
                            <td>{link.url}</td>
                            <td>
                                <BiPencil id={link.id} style={{}} onClick={()  => { editLink(link.id)} } />
                                <AiFillDelete  id={link.id} onClick={() => {(deleteLink(link.id))} }  />
                            </td>
                        </tr>
                        
                    ))}
                </tbody>
                </table>
        </div>
    )

}

export default React.memo(ShowLinks)