import React, { useState } from 'react'
import ReactQuill from "react-quill";


export default function TextEditor() {
   
    const [text, setText] = useState('')

    const modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
        ],
      }
  

      return (
          <>
                <ReactQuill theme="snow" modules={modules} value={text} />
          </>
      )


    
}