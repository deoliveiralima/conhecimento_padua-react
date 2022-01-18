
import { useEffect, useState } from "react"
import { useInput } from "react-hookedup"
import { useCreateTutorial } from "../../api/apiTutorial"


export default function CreateTutorial({}){
    
    const {value: title, setValue: setTitle, bindToInput: bindTitle} = useInput('')
    const {value: text,  setValue: setText,   bindToInput: bindDoText} = useInput('')

    const [response, createTutorial] = useCreateTutorial()

    const [confirmStyle, setConfirmStyle] = useState()
    const [alertClass, setAlertClass] = useState("")
    const [alertMessage, setAlertMesssage] = useState("")
    const [time, setTime] = useState()
   
    useEffect(()=> {
        
         if(response.data){
            setAlertMesssage('Cadastrado com sucesso')
            setAlertClass("alert alert-success mt-2")
            setConfirmStyle({
                visibility: "hidden",
                opacity: "0",
                transition: "visibility 0s 3s, opacity 3s linear",
            }
            )

            setTimeout(
                () => {
                    setAlertMesssage('')
                    setAlertClass('')
                    setConfirmStyle({})
                },3000);
              

        //    console.log(response.data)
        console.log(response.data)
         }
     
        

    },[response.data])
    
    useEffect(()=> {
        if(response.error){
            setConfirmStyle({})
            setAlertMesssage('Houve um erro: ' + response.error.data.message)
            setAlertClass("alert alert-danger mt-2")
            console.log(response.error)
        }
       
        

    },[response.error])

    function handleSubmit(e){
    
        e.preventDefault()
        createTutorial({title, text})
        eraseInputValues()
    }
    
    function eraseInputValues(){
        setText('')
        setTitle('')
    }
    function eraseAlertValues(){}
    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nome</label>
                <input type="text" className="form-control" id="name" name="name" value={title} {...bindTitle} />
                </div>
                <div className="mb-3">
                <label htmlFor="text" className="form-label">Texto</label>
                <textarea className="form-control" id="text" name="text" rows="3" value={text} {...bindDoText}/>
              
            </div>
            <button type="submit" className="btn btn-primary">Salvar</button>
        </form>
        <div id="alert-message" className={alertClass } style={confirmStyle}> { alertMessage}</div>
            
        </>
    )
}