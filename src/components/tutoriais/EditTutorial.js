import { useEffect, useState } from "react"

import { useInput } from "react-hookedup"
import { useUpdateTutorial } from "../../api/apiTutorial"
import { useNavigation } from "react-navi"

import { useTimeout } from 'react-hookedup'

export default function EditTutorial({tutorial}){

    const {value: title, setValue: setTitle, bindToInput: bindTitle} = useInput(tutorial.titulo)
    const {value: text,  setValue: setText,   bindToInput: bindDoText} = useInput(tutorial.texto)

    const [id, setId] = useState(tutorial.id)
    
    const [message, setMessage] = useState('')
    const [classMessage, setClassMessage] = useState('')

    const navigation = useNavigation()

    const [response, saveTutorial] = useUpdateTutorial()
    useEffect(() => {
        console.log(response)
        if(response.error){
            setMessage('Houve um erro')
            setClassMessage("alert alert-danger mt-2")
        }else if(response.data){
            setMessage('Atualizado com sucesso')
            setClassMessage("alert alert-success mt-2")
            
            
        }
        
    },[response])

    function handleSubmit(e){
       e.preventDefault()
       saveTutorial(id, title, text)
      
       if(response.error){
           console.log('houveu um eerroorr')
       }
       
    }
    return(
        <>
            {
                tutorial && 
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nome</label>
                    <input type="text" className="form-control" id="name" name="name" value={title} {...bindTitle} />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="text" className="form-label">Texto</label>
                    <textarea className="form-control" id="text" name="text" rows="3" value={text} {...bindDoText}/>
                
                </div>
                <button type="submit" className="btn btn-primary">Atualizar</button>
                <div className={classMessage}>{message} </div>
            </form>
            }
        </>
    )
}