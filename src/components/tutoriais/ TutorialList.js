import React from "react"
import { Link, useNavigation } from "react-navi"

//icons
import { BiPencil } from "react-icons/bi"
import { AiFillDelete } from "react-icons/ai"
import { GrView } from "react-icons/gr"

import { useRemoveTutorial } from "../../api/apiTutorial"
import { useEffect } from "react"



function  TutorialList({tutoriais, getListaTutoriais}){

    const [response, removeTutorial] = useRemoveTutorial()
    const navigation = useNavigation()
    console.log('tutorial list')

    useEffect(()=>{
        getListaTutoriais()
    }, [response])

    return(
        <>  
        <div className="card">
            <div className="card-header">
                Links adicionados
            </div>
            <div className="card-body">
                <table className="table table-hover table-striped table-bordered" >
                    <thead>
                        <tr>
                        <th className="col-1" scope="col">ID</th>
                        <th className="col-9" scope="col">Título do texto</th>
                        
                        <th colSpan="2" className="col-3 text-center " scope="col"> Opções </th>
                        </tr>
                    </thead>
                    <tbody> 
                        { tutoriais && tutoriais.map( (tutorial) => (

                            <tr key={tutorial.id} id={tutorial.id}>
                                <th scope="row">{tutorial.id} </th>
                                <td style={{cursor: "pointer"}} onClick={(e) => navigation.navigate(`/tutorial/${tutorial.id}`)}>

                                    {tutorial.titulo} <GrView/> 
                                </td>
                               
                                <td className="col-1">
                                <BiPencil href={`/tutorial/edit/${tutorial.id}`}  style={{cursor: "pointer"}} 
                                    onClick={(e) => {e.preventDefault(); navigation.navigate(`/tutorial/edit/${tutorial.id}`); }}/> 
                                </td>
                                <td className="col-10"> 
                                <AiFillDelete style={{cursor: "pointer"}} onClick={(e)=> { e.preventDefault(); removeTutorial(tutorial.id);  }} />
                                
                                </td>
                            </tr>
                            
                        ))}
                    </tbody>
                    </table>
            </div>
            </div>

            <Link href="/tutorial/create" className="btn btn-success" >Criar novo Tutorial</Link>
            <hr/>
     
        </>
    )
}

export default React.memo(TutorialList)