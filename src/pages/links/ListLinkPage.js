import { useContext, useEffect } from "react";
import { useListLinks } from "../../api/apiLink";
import ListLinks from "../../components/links/ListLinks";
import PainelLink from "../../components/links/PainelLink";
import { StateContext } from "../../contexts";
import { useDispatch } from "../../hooks";




export default function ListLinkPage(){

    const dispatch = useDispatch()

    const [response, getLinks] = useListLinks()

    useEffect(()=> {
        getLinks()
    },[])

    useEffect(() => {
       
        dispatch({type: 'LIST_LINKS', links: response.data})
        
    }, [response],)

    return(
        <>{response.isLoading && "...carregando"}
            <PainelLink />
        </>
    )

}