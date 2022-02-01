
// icons imports
import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import {BiPencil} from 'react-icons/bi'

import { useDispatch, useSelector,  } from "react-redux";
import { retrieveLink } from "../../actions/actions";
import { useGetLink, useRemovelink } from "../../api/apiLink";
import { ConfirmDeleteButton } from "../accessories";
import { CancelDeleteButton } from "../accessories";

export default function RowTableList({id, nome, url}){
    const dispatch = useDispatch()
    const getLinks = useSelector(state => state.getLinks)

    const [response, getLink] = useGetLink()
    const [responseRemove, remove] = useRemovelink()
    const [confirmDelete, setConfirmDelete] =useState(false)

    useEffect(() => {
        
        dispatch(retrieveLink(response.data))
           
    }, [response.data])

    useEffect(()=>{
        if(responseRemove.data){
            setConfirmDelete(false)
            getLinks()
        }
        
    }, [responseRemove])

    function confirmRemove(id){
        remove(id)

    }


    return(
            <tr id={id}>
                <th scope="row">{id} </th>
                <td>{nome}</td>
                <td>{url}</td>
                <td className="col-1">
                <BiPencil id={id} style={{cursor: "pointer"}} onClick={(e) => getLink(id)} /> 
                </td>
                <td className="col-10">
                
                   
                        <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                       {
                           confirmDelete && 
                           <>
                            <div onClick={ ()=> setConfirmDelete(false)}> <CancelDeleteButton /> </div>
                            <div onClick={()=> remove(id) }><ConfirmDeleteButton/></div>
                           </> 
                           
                       } 
                        
                        
                    </div>
                            {!confirmDelete && <AiFillDelete  id={id} style={{cursor: "pointer"}} onClick={(e) => setConfirmDelete(true)}  /> }
                    
                    
                
                </td>
            </tr>
            
      
    )
}