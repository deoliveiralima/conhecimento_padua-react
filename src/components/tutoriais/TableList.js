import React from "react"
import { useSelector } from "react-redux"
import { RowTableList } from "."
import { GrAddCircle } from "react-icons/gr"
import { Button } from "react-bootstrap"
import { useNavigation } from "react-navi"
export default function  TableList(){
    
    const tutoriais = useSelector(state => state.tutoriais)
    const navigation = useNavigation()

    
    return(
        <>  
       
        <Button variant="outline-secondary" className="mb-1" onClick={()=> navigation.navigate('/tutorial/create') }><GrAddCircle/> Adicionar </Button>{' '}
        <table className="table table-hover table-striped table-bordered" >
            <thead>
                <tr>
                <th className="col-1" scope="col">ID</th>
                <th className="col-9" scope="col">Título do texto</th>
                
                <th colSpan="2" className="col-3 text-center " scope="col"> Opções </th>
                </tr>
            </thead>
            <tbody> 
                { tutoriais && tutoriais.map( (tutoriais,i) => (
                    <React.Fragment key={i}>
                        <RowTableList {...tutoriais} />
                    </React.Fragment> 
                    
                ))}
            </tbody>
            </table>

            
        

     
        </>
    )
}
