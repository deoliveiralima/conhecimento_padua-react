import { useEffect, useState } from "react"
import { useLogin } from "../api/apiLogin"


export default function FormLogin() {
    const [response, login] = useLogin()
    const [password, setPassword] = useState()
    const [username, setUsername] = useState()

    function handdleEmail(e) {
        setUsername(e.target.value)
    }
    function handdlePassword(e) {
        setPassword(e.target.value)
    }

    useEffect(()=>{
        console.log(response.data)

    },[response])


    function handdleSubmit(e) {
        e.preventDefault()
        login(username, password)

        
    }

    return(

        <div className="container">
            <div className="row">
                <div className="col">
                    
                    <form onSubmit={handdleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="user" className="form-label">Usuário</label>
                            <input type="text" className="form-control" id="username" name="username" onChange={handdleEmail} required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Senha</label>
                            <input type="password" id="password" name="password" className="form-control" onChange={handdlePassword}/>
                        </div>
            
                        <button type="submit" className="btn btn-primary">Logar</button>
                        </form>

                    {username}
                    <br/>
                    {password}
                
                </div>
            </div>
        </div>
        
    )
    
}