import React, {useEffect, useState, useContext} from "react";
import { useInput } from "react-hookedup";
import axios from "axios";

import { StateContext } from "../../contexts";
import { useResource } from "react-request-hook";

export default function CreateLink(){

        //definondo os text inputs
    const {value: nome, setValue: setnome, bindToInput: bindName} = useInput('')
    const {value: url, setValue: setUrl, bindToInput: bindUrl} = useInput('')

    
    const [linkResponse, setLinkResponse] = useState('')

    //obtendo states
    const {state, dispatch} = useContext(StateContext)
    const {linkEdit} = state
    const {links} = state
    
   
    const [textButton, setTextButton] = useState('Adicionar')
    const  [baseUrl, setBaseUrl] = useState()
    const [method, setMethod] = useState()
  
    useEffect(()=> {
        setnome(linkEdit.nome)
        setUrl(linkEdit.url)

        setTextButton('Atualizar')
        setBaseUrl (`http://localhost:8000/api/link/${linkEdit.id}}`)
        setMethod('put')
        
    }, [linkEdit])
    useEffect(()=> {
        setDefaultValues()
    },[])

    useEffect(() => {
        console.log(linkResponse)
        if(linkResponse){
            setDefaultValues()
        }
    }, [linkResponse])

    const [ link , createLink ] = useResource(({ nome, url }) => ({
        url: baseUrl,
        method: method,
        data: { nome: nome, url: url}
      }))

      useEffect(()=> {
       
        setDefaultValues()
        if(link.data){
            dispatch({type: 'UPDATE_LINK_LIST', link:{id: link.data.id, nome:link.data.nome, url: link.data.url}})
        }
        
      }, [link])


    function handleSubmit(e){
        e.preventDefault()
        createLink({nome, url})

        // createLink({nome, url})

            // axios({
            //     method: method,
            //     url: baseUrl,
            //     data:{
            //     nome: nome,
            //     url: url
            // }
            // }).then((response) => {
            //     setLinkResponse(response.data)
            //     if(linkResponse)
            //         setDefaultValues()
                
            // })
        
    } 

    function setDefaultValues(){
            setnome('')
            setUrl('')
            setTextButton('Adicionar')
            setMethod ('post')
            setBaseUrl('http://localhost:8000/api/link/store')
    }

   
    
    return(
            <form onSubmit={handleSubmit} method="post">
                
            <div className="mt-3" style={{}}>
                <div className="row"> 
                    <div className="col-1"> 
                        <label htmlFor="nome" className="form-label mt-1">Nome: </label>
                    </div>
                    <div className="col-4">
                        
                        <input type="text" className="form-control" placeholder="Nome do Link" name="nome" id="nome" value={nome} {...bindName}/>
                    </div>
                    <div className="col-1">
                        <label htmlFor="url" className="form-label mt-1">URL:</label>
                    </div>
                    <div className="col-4">
                        <input type="text" className="form-control" placeholder="URL" name="url" id="url" value={url} {...bindUrl}/>
                    </div>
                    <div className="col">
                
                    <button type="submit" id="linkButton" className="btn btn-primary">{textButton}</button>
                    </div>
                </div>
       
    
            </div>
            </form>
    )

}