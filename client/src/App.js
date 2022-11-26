import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import cors from 'cors'
import Req_api from "./components/api";


import About from './pages/about';
import Home from './pages/home';
import Team from './pages/team';
import Instruction from './pages/Instruction';
import Tracker from './pages/minor_tracker';
import Ferpa from './pages/ferpa';

import Header from "./components/Nav";
import Footer from "./components/Footer";

import './styles/styles.css';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Outlet
} from "react-router-dom";

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'blue'
};

const api = axios.create({
  baseURL: "https://zedvzzv9m0.execute-api.us-east-1.amazonaws.com/dev/"
})



const About_Page = () => <About/>;
const Instruction_Page = () => <Instruction/>;
const Tracker_Page = () => <Tracker/>;
const Ferpa_Page = () => <Ferpa/>;

const Layout = () => {
  const headerData = {
    psuMinorTracker: "PSU Minor Tracker",
    place: "Home",
    aboutUs: "About us",
    instructions: "Instructions",
    ferpaAgreement: "FERPA Agreement",
    runReport: "Run Report",
    title: "Instructions",
    xcontinue: "Continue",
};

  return (
    <div>
      <h1>Nav</h1>
      {/* <Header {...headerData} />  */}

      
      <Outlet />
      <h1>Footer</h1>

      <Footer
            psuMinorTracker="PSU Minor Tracker"
            findOutTheClasses="Find Out the classes need to complete your Minors and Certifications"
            instructions="Instructions"
            ferpaAgreement="FERPA Agreement"
            aboutUs="About us"
          />
    

    </div>
  );
};


const AppRoute = () => {
  return (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="about" element={<About_Page />} />
      <Route path="Instruction" element={<Instruction_Page />} />
      <Route path="Ferpa" element={<Ferpa />} />
      <Route path="Tracker" element={<Tracker />} />
      <Route index element={<div>Default Page Content</div>} />
    </Route>
  </Routes>
);
};

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

      <Router>
      <div className="Main">
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>Go to About</Link>
        <Link to="/instruction" style={linkStyle}>Go to Instruction</Link>
        <Link to="/ferpa" style={linkStyle}>Go to Ferpa</Link>
        <Link to="/tracker" style={linkStyle}>Go to Tracker</Link>
        <AppRoute />
      </div>
    </Router>
       
    </div>
    
    
  )

}

export default App