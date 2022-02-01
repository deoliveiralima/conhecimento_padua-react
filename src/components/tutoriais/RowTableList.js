import React, { useEffect, useState } from "react";
import { useGetTutorial, useRemoveTutorial } from "../../api/apiTutorial";
import { CancelDeleteButton, ConfirmDeleteButton } from "../accessories";

import { AiFillDelete } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import { BiPencil } from "react-icons/bi";

import {  useSelector } from "react-redux";

import { useNavigation } from "react-navi";


export default function RowTableList({id, titulo}){
    const [responseRemove, remove] = useRemoveTutorial()
    const [confirmDelete, setConfirmDelete] = useState (false)
    const tutoriaisPage = useSelector(state => state.tutoriaisPage)

    const getTutoriais = useSelector(state => state.getTutoriais)

    const navigation = useNavigation()

    useEffect(()=>{
        if(responseRemove.data){
            console.log(responseRemove.data)
            setConfirmDelete(false)
            getTutoriais(tutoriaisPage)
        }
        

    },[responseRemove])

    

    return(
        <tr key={id} id={id}>
            <th scope="row">{id} </th>
            <td style={{cursor: "pointer"}} onClick={(e) => navigation.navigate(`/tutorial/${id}`)}>

                {titulo} <GrView/> 
            </td>
            
            <td className="col-1">
            <BiPencil  style={{cursor: "pointer"}} 
                onClick={(e) =>  navigation.navigate(`/tutorial/edit/${id}`) }/> 
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

