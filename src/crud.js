import React from "react"

import axios from "axios"
import { useState } from "react/cjs/react.development"



export function edit(url){
    const [id, setId] = useState()
    axios({
        url: url,
        method: 'get',
    }).then((response) => { return (response.data)} )
    
  
       
}


 