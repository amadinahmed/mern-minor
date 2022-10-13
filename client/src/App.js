import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [backendData,setbackendData] = useState([{}])
  const inpFile = document.getElementById("inpFile");
  const btnUpload = document.getElementById("btnUpload");
  const resultText = document.getElementById("resultText");

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setbackendData(data)
      }
    )
  },[])
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();

    formData.append("pdfFile", inpFile.files[0]);

    fetch("/extract-text", {
        method: "post",
        body: formData
    }).then(response => {
        return response.text();
    }).then(extractedText => {
        
        resultText.value = extractedText.trim();
        const pointer = "Course History";
        let pointer_val = resultText.value.search(pointer)
        console.log(pointer_val)
        resultText.value = resultText.value.slice(pointer_val)
        console.log(resultText.value)
    });
  }


  return (
    <div>
      
      {(typeof backendData.users === 'undefined') ? (<p>Loading...</p>)
      : 
      (
        backendData.users.map((user,i) => (
          <p key={i}>{user}</p>

        ))
      )

      }
      <form onSubmit={handleSubmit}>
      <textarea  id="resultText" placeholder="Your PDF text will appear here..."></textarea>
      <input type="file" id="inpFile"></input>
      <button type="submit" id="btnUpload" >Upload</button>
      </form>
    </div>
    
  )

}

export default App