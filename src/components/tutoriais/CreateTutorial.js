import { useEffect, useState } from "react"
import { useInput } from "react-hookedup"
import { useCreateTutorial } from "../../api/apiTutorial"
import { useNavigation } from "react-navi"

export default function CreateTutorial({}){
    
    const {value: title, setValue: setTitle, bindToInput: bindTitle} = useInput('')
    const {value: text,  setValue: setText,   bindToInput: bindDoText} = useInput('')

    const [response, createTutorial] = useCreateTutorial()

    const [confirmStyle, setConfirmStyle] = useState()
    const [alertClass, setAlertClass] = useState("")
    const [alertMessage, setAlertMesssage] = useState("")

    const navigation = useNavigation()
   
    useEffect(()=> {
        
         if(response.data){
            setAlertMesssage('Cadastrado com sucesso')
            setAlertClass("alert alert-success mt-2")

            setTimeout(
                () => {
                    setAlertMesssage('')
                    setAlertClass('')
                    setConfirmStyle({})
                },2000);
              
        
         }
     
        

    },[response.data])
    
    useEffect(()=> {
        if(response.error){
            setConfirmStyle({})
            setAlertMesssage('Houve um erro: ' + response.error.data.message)
            setAlertClass("alert alert-danger mt-2")
        }
       
        

    },[response.error])

    function salvarTutorial(e){
    
        e.preventDefault()
        createTutorial({title, text})
        navigation.navigate('/tutoriais')
    }

    function salvarEContinuar(){
        createTutorial({title, text})
    }
  
    return (
        <>
        <form onSubmit={salvarTutorial}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nome</label>
                <input type="text" className="form-control" id="name" name="name" value={title} {...bindTitle} />
                </div>
                <div className="mb-3">
                <label htmlFor="text" className="form-label">Texto</label>
                <textarea className="form-control" id="text" name="text" rows="3" value={text} {...bindDoText}/>
              
            </div>
            <button type="submit" className="btn btn-primary me-2">Salvar</button>   
             <button type="button" className="btn btn-dark" onClick={salvarEContinuar}>Salvar e continuar</button>
        </form>
        <div id="alert-message" className={alertClass } style={confirmStyle}> { alertMessage}</div>
            
        </>
    )
}

