import React from "react";
import RowTableList from "./RowTableList";

import { useSelector } from "react-redux";


export default function TableList(){
    const links = useSelector(state => state.links)
  
    

    return(
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
                        { links && links.map( (link,i) => (
                            <React.Fragment key={i}>
                                <RowTableList {...link} />
                            </React.Fragment> 
                            
                        ))}
                    </tbody>
                    </table>
    )
}