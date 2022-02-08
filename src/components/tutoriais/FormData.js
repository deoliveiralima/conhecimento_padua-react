import React, { useEffect, useState } from "react";
import { useInput } from "react-hookedup";

import { useCreateTutorial, useUpdateTutorial } from "../../api/apiTutorial";
import { useAlert } from "../../hooks";

import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function FormData({tutorial}){

    const {value: title, setValue: setTitle, bindToInput: bindTitle} = useInput('')
    const[text, setText] = useState('')
    const [id, setId] = useState()
    const [option, setOption] = useState('create')

    const [responseCreate, create] = useCreateTutorial()
    const [responseUpdate, update] = useUpdateTutorial()

    const alert = useAlert()

        
    const { quill, quillRef } = useQuill();

    const history = useHistory()


    useEffect(()=>{
        if (quill) {
            quill.clipboard.dangerouslyPasteHTML(text);


            quill.on('text-change', (delta, oldDelta, source) => {
              setText(quill.root.innerHTML)
              
            })}

    },[quill])

    useEffect(()=>{ 
          
        if(tutorial){
            setTitle(tutorial.titulo)
            setText(tutorial.texto)
            setOption('update')
            setId(tutorial.id)
        }

        
    },[])

    useEffect(()=>{
        if(responseCreate.data)
            setId(responseCreate.data.id)
        
        alert(responseCreate)
        alert(responseUpdate)
           
    },[responseCreate, responseUpdate])

    function handdleSubmit(e){
        e.preventDefault()
        if(option==='create'){
            create(title, text)
        }
        else{
            update(id, title, text)
        }
        history.push('/tutoriais')

    }
    
    function updateAndContinue(){

        if(id){
            update(id, title, text)
        }
        else{
            create(title, text)
        }
    }
    return (
        <>
        <form onSubmit={handdleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nome</label>
                <input type="text" className="form-control" id="name" name="name" value={title} {...bindTitle} />
                </div>
                <div className="mb-3">
                <label htmlFor="text" className="form-label">Texto</label>
               
                <div ref={quillRef} />
              
            </div>
            <button type="submit" className="btn btn-primary me-2">Salvar</button>   
             <button type="button" className="btn btn-dark" onClick={updateAndContinue} >Salvar e continuar</button>
        </form>
       
            
        </>
    )

}