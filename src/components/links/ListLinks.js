
// icons imports
import { AiFillDelete } from "react-icons/ai";
import {BiPencil} from 'react-icons/bi'
import {FaUndoAlt} from 'react-icons/fa'

//Hooks imports
import React, { useEffect, useState, useContext } from "react";
import { StateContext } from "../../contexts";

import { useGetLink, useRemovelink } from "../../api/apiLink";
import { useDispatch, useLinks } from "../../hooks";

export default function ListLinks(){

    const dispatch = useDispatch()
    const links = useLinks()

    const [responseGet, getLink] = useGetLink()
    const [, removeLink] = useRemovelink()
    const [idRemove, setIdRemove] = useState()
    useEffect(() => {
        if(responseGet.data){
            dispatch({type: 'SET_LINK', link: responseGet.data})
        }   
      //  
    }, [responseGet])

    function deleteLink(id){
        setIdRemove(id)
    }
    function confirmaRemocao(){
        
        removeLink(idRemove)

        dispatch({type: "REMOVE_LINK_FROM_LIST", id: idRemove})
       
        console.log(idRemove)

    }
    function canelaRemocao(id){
        setIdRemove(0)
        
    }
      
    return(
        <div  className="mt-4">
            <div className="card">
            <div className="card-header">
                Links adicionados
            </div>
            <div className="card-body">
                <table className="table table-hover table-striped table-bordered" >
                    <thead>
                        <tr>
                        <th className="col-1" scope="col">ID</th>
                        <th className="col-4" scope="col">Nome</th>
                        <th className="col-4" scope="col">URL</th>
                        <th colSpan="2" className="col-3 text-center " scope="col"> Opções </th>
                        </tr>
                    </thead>
                    <tbody> 
                        { links && links.map( (link) => (

                            <tr key={link.id} id={link.id}>
                                <th scope="row">{link.id} </th>
                                <td>{link.nome}</td>
                                <td>{link.url}</td>
                                <td className="col-1">
                                <BiPencil id={link.id} style={{cursor: "pointer"}} onClick={()  => { getLink(link.id)} }  /> 
                                </td>
                                <td className="col-10">
                                
                                    { idRemove === link.id ? 
                                        <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                        <button type="button" className="btn btn-secondary btn-sm" onClick={canelaRemocao}>Cancelar</button>
                                        <button type="button" className="btn btn-danger btn-sm" onClick={confirmaRemocao}>Remover</button>
                                        
                                        
                                    </div>:
                                            <AiFillDelete  id={link.id} style={{cursor: "pointer"}} onClick={() =>  { deleteLink(link.id); }}  />
                                    }
                                    

                                
                                </td>
                            </tr>
                            
                        ))}
                    </tbody>
                    </table>
            </div>
            </div>
     
            
        </div>
    )

}

