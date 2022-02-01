import React from "react";
import { useDispatch } from "react-redux";
import { backwardPage, forwardPage, setPage } from "../../actions/actions";

export default function Paginator({data}){
    const dispatch = useDispatch()
    const totalPages = data.last_page

    const pages = []
    for(var i =1; i<= data.last_page; i++){
        pages.push(i)
    }



    return(
       
    <nav aria-label="Page navigation example">
        <ul className="pagination">
            <li className="page-item">
            <a className="page-link" style={{cursor: 'pointer'}} onClick={()=> dispatch(backwardPage())} aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
            </a>
            </li>

            { 
                pages.map( (i) => 
                    <li  key={i} className="page-item"><a className="page-link" style={{cursor: 'pointer'}}  onClick={() => dispatch(setPage(i))}>{i}</a></li>

                )
            }
            
            <li className="page-item">

            <a className="page-link" style={{cursor: 'pointer'}} onClick={()=> dispatch(forwardPage(totalPages))} aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
            </a>
            </li>
        </ul>
    </nav>
    
    )
}