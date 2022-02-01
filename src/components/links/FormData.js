import React, {useEffect, useState} from "react";
import { useInput } from "react-hookedup";
import { useDispatch, useSelector } from "react-redux";
import { useCreateLink, useUpdateLink } from "../../api/apiLink";
import { useAlert } from "../../hooks";

 function FormData(){

    const link = useSelector(state => state.link)
    const getLinks = useSelector(state => state.getLinks)

    const {value: nome, setValue: setNome, bindToInput: bindName} = useInput('')
    const {value: url, setValue: setUrl, bindToInput: bindUrl} = useInput('')
    const [id, setId] = useState()

    const [responseCreate, create] = useCreateLink()
    const [responseUpdate, update] = useUpdateLink()

    const [option, setOption] = useState('create')

    const alert = useAlert(responseCreate)

    useEffect(()=>{
        if(link.id){
            setNome(link.nome)
            setUrl(link.url)
            setId(link.id)
        }
        
        if(link.id)
            setOption('update')
    }, [link])
    
    useEffect(()=>{
        getLinks()
        alert(responseCreate)
        alert(responseUpdate)

    },[responseUpdate, responseCreate])


    function handleSubmit(e){
        e.preventDefault()
       
        if(option === 'create' )
            create(nome, url)
        else if(option === 'update')
            update(id, nome, url)
        
        defaultValues()

    } 

    function defaultValues(){
        setNome('')
        setUrl('')
        setId()
        setOption('create')
        
    }

    return(
            
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
              
                
            
    )

}

export default React.memo(FormData)