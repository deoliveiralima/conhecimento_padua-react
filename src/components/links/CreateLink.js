import React, {useEffect, useState, useContext} from "react";
import { useInput } from "react-hookedup";
import { useCreateLink, useUpdateLink } from "../../api/apiLink";

import { StateContext } from "../../contexts";

import LinkDataService from '../services/LinkService'
import { useLink } from "../../hooks";
import { useDispatch } from "../../hooks";


export default function CreateLink(){

//definindo os text inputs
    const {value: nome, setValue: setNome, bindToInput: bindName} = useInput('')
    const {value: url, setValue: setUrl, bindToInput: bindUrl} = useInput('')
    
    //obtendo states e dispatch
    const link = useLink()
    const dispatch = useDispatch()

    const [id, setId] = useState(0)
    //definiir texto do botao entrea adicionar e salvar
    const [textButton, setTextButton] = useState('Adicionar')
    const [option, setOption] = useState(true)

    const [responseCreate, createLink] = useCreateLink()
    const [responseUpdate, updateLink] = useUpdateLink()
    const [prevData, setPrevData] = useState()

    useEffect(()=> {
        setDefaultValues()
    },[])

    // quando for setado um valor para um novo valor para a var link no reducer 
    //vai disparar este effect e havendo um link preenchido 
    //ira preencher os inputs
    useEffect(() => {
        if(typeof link === 'object' &&  Object.keys(link).length > 0){
            
  
            setNome(link.nome)
            setUrl(link.url)
            setId(link.id)
            setTextButton('Salvar')
            setOption(false)
        }
        
    }, [link])

    useEffect(()=> {
        if(responseUpdate.data){
            dispatch({type: 'UPDATE_LINK_LIST', id: responseUpdate.data.id, link: responseUpdate.data})
            setOption(true)
            setDefaultValues()
        }
            
            

    },[responseUpdate])

    useEffect(()=> {
        if(responseCreate.data && responseCreate.data !== prevData ){
            dispatch({type: 'ADD_LINK_IN_LIST', link: responseCreate.data})
            setPrevData(responseCreate.data)
            setDefaultValues()
        }
    },[responseCreate])


    function handleSubmit(e){
        e.preventDefault()
        if(option){
            createLink({ nome, url })
        }
        else{
            updateLink(id, nome, url)
        }
        
    } 

    function setDefaultValues(){
        setTextButton('Adicionar')
        setNome('')
        setUrl('')
        
    }

    return(
        
            
                <div className="card">
                    <div className="card-header">
                        Adicionar Link
                    </div>
                    <div className="card-body">
                    <form onSubmit={handleSubmit} method="post">
                   

                    <div className="row"> 
                        <div className="col-1"> 
                            <label htmlFor="nome" className="form-label mt-1">Nome: </label>
                        </div>
                        <div className="col-4">
                            
                            <input type="text" className="form-control" placeholder="Nome do Link" name="nome" id="nome" value={nome} {...bindName} required/>
                        </div>
                        <div className="col-1">
                            <label htmlFor="url" className="form-label mt-1">URL:</label>
                        </div>
                        <div className="col-4">
                            <input type="text" className="form-control" placeholder="URL" name="url" id="url" value={url} {...bindUrl} required/>
                        </div>
                        <div className="col">

                        <button type="submit" id="linkButton" className="btn btn-success">{textButton}</button>
                        </div>
                    </div>
                    </form>
                        
                    </div>
                </div>
                
            
    )

}