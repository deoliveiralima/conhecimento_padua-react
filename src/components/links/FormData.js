import React, {useEffect, useState} from "react";
import { useInput } from "react-hookedup";
import { useDispatch, useSelector } from "react-redux";
import { useCreateLink, useUpdateLink } from "../../api/apiLink";

function FormData(){

    const link = useSelector(state => state.link)
    const getLinks = useSelector(state => state.getLinks)
    const dispatch = useDispatch()

    const {value: nome, setValue: setNome, bindToInput: bindName} = useInput('')
    const {value: url, setValue: setUrl, bindToInput: bindUrl} = useInput('')
    const [id, setId] = useState()

    const [responseCreate, create] = useCreateLink()
    const [responseUpdate, update] = useUpdateLink()

    const [option, setOption] = useState('create')

    

    useEffect(()=>{
        setNome(link.nome)
        setUrl(link.url)
        setId(link.id)
        setOption('update')
    }, [link])
    
    useEffect(()=>{
        getLinks()

    },[responseUpdate, responseCreate])

    //para mensagem de error ou sucesso
    const [alertMessage, setAlertMesssage] = useState()
    const [alertClass, setAlertClass] = useState()

    function handleSubmit(e){
        e.preventDefault()
       console.log(option)
        if(option === 'create')
            create(nome, url)
        else if(option === 'update')
            update(id, nome, url)
        
        defaultValues()

    } 

    function defaultValues(){
        setNome('')
        setUrl('')
        setId('')
        setOption('create')
        
    }

    return(
            <div className="card">
                <div className="card-header">
                    Adicionar Link
                </div>
                <div className="card-body">
                <form onSubmit={handleSubmit} method="post" >
                

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

                    <button type="submit" id="linkButton" className="btn btn-success">Salvar</button>
                    </div>
                </div>
                </form>
                </div>
                <div style={{height: "7vh",}} >
                    <div className={alertClass}> {alertMessage} </div>

                </div>
            </div>
                
            
    )

}

export default React.memo(FormData)