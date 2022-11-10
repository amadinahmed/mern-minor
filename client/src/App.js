import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import cors from 'cors'
import Req_api from "./components/api";


const api = axios.create({
  baseURL: "https://zedvzzv9m0.execute-api.us-east-1.amazonaws.com/dev/"
})

function App() {
  const [backendData,setbackendData] = useState([{}])
  const [articleId, setArticleId] = useState(null);
  const inpFile = document.getElementById("inpFile");
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

    var form = document.getElementById('form');
        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            fetch("/python?num1=" + resultText.value)
            .then((req) => req.json())
            .then((res) => {
                document.getElementById("message").innerHTML = "The sum is " + res.sum;
            }).catch((e) => alert(e));
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
    
      <Req_api/>
      
      <form id="form" onSubmit={handleSubmit}>
      <textarea  id="resultText" placeholder="Your PDF text will appear here..."></textarea>
      <input type="file" id="inpFile"></input>
      <button type="submit" id="submit" >Upload</button>

      <p id="message"></p>
      
      </form>

      <div className="card-body">
                Returned Id: {articleId}
            </div>
     
      <button
        type="button"
        onClick={(e) => {
        e.preventDefault();
        window.location.href='http://google.com';
        }}>
           Click here
          </button>

    </div>
    
  )

}

export default App