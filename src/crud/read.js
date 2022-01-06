import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import axios from "axios";

const useList = (url) => {
    const [data, setData] = useState()

    useEffect(()=> {

    }, [])

    
    axios({
        url: url,
        method: 'get',
    }).then((response) => { return setData(response.data)} )
    
    return [data]
}

export default useList