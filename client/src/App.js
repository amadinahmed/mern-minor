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
import 'tw-elements';

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
  color: 'Black'
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

        {/* Navbar */}

      <nav class="flex items-center justify-between flex-wrap bg-gray-100 text-gray-600 p-6">
        <div class="flex items-center flex-shrink-0 text-black mr-6">
          <span class="font-semibold text-xl tracking-tight"><Link to="/" style={linkStyle}>PSU Certifications and Minor Report</Link></span>
        </div>
        <div class="block lg:hidden">
         
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            
            <p class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            <Link to="/about" style={linkStyle}> Team Page</Link>
            </p>
            <p class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            <Link to="/instruction" style={linkStyle}> Instruction</Link>
            </p>
            <p class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            <Link to="/ferpa" style={linkStyle}> FERPA </Link>
            </p>
          
          </div>
          <div>

    <div className="pt-3 ml-3">
      <button type="button" className="inline-block px-4 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalCenteredScrollable">
        Run Report
      </button>
    </div>
          </div>
        </div>
      </nav>

      
    {/* Page Content */}

      <Outlet />

    {/* Footer */}
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
      <Route index element={

      <div class="container my-24 px-6 mx-auto">


      <section class="mb-32">

        <div class="relative overflow-hidden bg-no-repeat bg-cover"></div>

        <div class="container mx-auto px-6 md:px-12 xl:px-32">
          <div class="text-center text-gray-800">
            <div class="block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12" >
              <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">Something Really Cool <br /><span class="text-red-600">make you click</span></h1>
              <a class="inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-red-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-red-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 " >Get started</a>
              <a class="inline-block px-7 py-3 text-white font-medium text-sm leading-snug bg-transparent text-red-600 font-medium text-xs leading-tight uppercase rounded hover:text-red-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out">Learn more</a>
            </div>
          </div>
        </div>
      </section>


      </div>

      } />
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

      <Router>
      <div className="Main">
        <AppRoute />
      </div>
    </Router>


   

    {/* Modal */}
    <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
      <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
            <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel">
              Modal title
            </h5>
            <button type="button"
              className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body relative p-4">
            <p>This is a vertically centered modal.</p>
          </div>
          <div
            className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
            <button type="button"
              className="inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
              data-bs-dismiss="modal">
              Close
            </button>
            <button type="button"
              className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className=" bg-slate-900/40 pt-[2%] px-[4%] modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenteredScrollable" tabindex="-1" aria-labelledby="exampleModalCenteredScrollable" aria-modal="true" role="dialog">
      <div className=" modal-dialog modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
           
                <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalCenteredScrollableLabel">
                  Upload Academic Report
                  </h5>
                  <button type="button"
                    className="pr-3 btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                    data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  </button>
                </div>
                <div className="modal-body relative p-4">
         
           {/* handles user upload data */}

        <div id='report'>
          <form id="form" onSubmit={handleSubmit}>
            <div className='pb-10 mx-4'>
                <textarea className='
                h-[25rem]
                  pb-[5%]
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                  '  
                  id="resultText" placeholder="Your PDF text will appear here...">
            </textarea>

            <div
            className="mr-2 modal-footer flex flex-shrink-0 flex-wrap items-center justify-center p-4 border-t border-gray-200 rounded-b-md ">
           
            <input type="file" id="inpFile"></input>
            <button type="submit" id="submit" className="mt-4 sm-mt-0 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">Upload</button>

        
            </div>
            </div>
          </form>
          
        </div>
            
        

        </div>

        
          <button class="inline-block px-6 py-4 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg  focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">
            Run Report
            </button>

          <div class="offcanvas offcanvas-bottom fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 left-0 right-0 border-none h-4/5 max-h-full" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
            <div class="offcanvas-header flex items-center justify-between p-4">
              <h5 class="offcanvas-title mb-0 leading-normal font-semibold" id="offcanvasBottomLabel">Certifications / Minor Report</h5>
              <button type="button" class="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body flex-grow p-4 overflow-y-auto small">
              <Req_api/>
            </div>
          </div>
        </div>
      </div>
    </div>
    
       
    </div>
    
  )

}

export default App