import { TutorialForm } from ".";
import { Alert, Card } from "../accessories";

export default function PageCreate(){   


    return(
        
        <div>
            <div className="alert-div"> 
                <Alert/>
            </div>
            <Card title={"Salvar Tutorial"} component={<TutorialForm />}/>
            
        </div>
    )
}