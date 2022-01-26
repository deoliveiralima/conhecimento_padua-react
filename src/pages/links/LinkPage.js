import { useEffect } from "react";
import { useListLinks } from "../../api/apiLink";
import { useDispatch } from "react-redux";
import CardList from "../../components/links/CardList";
import FormData from "../../components/links/FormData";
import Alert from "../../components/alerts/Alert";


export default function LinkPage(){

    const [response, getLinks] = useListLinks()

    const dispatch = useDispatch()
    dispatch({type: 'FUNCTION_GET_LINKS', getLinks: getLinks})
    useEffect(()=> {
        getLinks()
        
    },[]) 

    useEffect(() => {
        if(response.data){
            dispatch({type: 'RETRIEVE_LINKS', links: response.data})
          
        }
        
            

            
    }, [response])

    return(
        <>
            
            <div style={{height: "5vh"}}>
            
                {response.isLoading && <div className="spinner-border" role="status"/>}
            
            </div>
            <FormData />
            <div className="alert-div"> 
                <Alert/>
            </div>
            <CardList />
        </>
    ) 

}