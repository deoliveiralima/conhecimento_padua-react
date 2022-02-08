import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Redirect } from "react-router-dom"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { setLogin } from "../actions/actions"
import { useLogin } from "../api/apiLogin"

export default function FormLogin({setToken}) {
    const [response, login] = useLogin()
    const [password, setPassword] = useState()
    const [cpf, setCpf] = useState()
    const loggedUser = sessionStorage.getItem('loggedUser')
    const history = useHistory()


    function handleCpf(e) {
        setCpf(e.target.value)
    }
    function handdlePassword(e) {
        setPassword(e.target.value)
    }


    useEffect(()=>{
        if(response.data){
           
            sessionStorage.setItem('token', response.data.token)
            sessionStorage.setItem('username', response.data.nome)
            history.go('/')
            
        }

    },[response])

    function handdleSubmit(e) {
        e.preventDefault()
        login(cpf, password)
        
    }
    if(loggedUser)
        return <Redirect to={{ pathname: '/'}} />

    return(
   
        <form onSubmit={handdleSubmit} className="form-login">
            <div className="mb-3">
                <label htmlFor="user" className="form-label">Usuário</label>
                <input type="text" className="form-control" placeholder="usuário" id="cpf" name="cpf" onChange={handleCpf} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Senha</label>
                <input type="password" id="password" name="password" placeholder="senha" className="form-control" onChange={handdlePassword}/>
            </div>

            <button type="submit" className="btn btn-primary btn-login">Logar</button>
        </form>

           
    )
    
}