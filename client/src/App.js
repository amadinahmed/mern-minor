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

      <nav className="flex items-center justify-between flex-wrap bg-gray-100 text-gray-600 p-6">
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <span className="font-semibold text-xl tracking-tight"><Link to="/" style={linkStyle}>PSU Certifications and Minor Report</Link></span>
        </div>
        <div className="block lg:hidden">
         
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            
            <p className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            <Link to="/about" style={linkStyle}> Team Page</Link>
            </p>
            <p className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            <Link to="/instruction" style={linkStyle}> Instruction</Link>
            </p>
            <p className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
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

      <div className=" overflow-x-hidden container my-24 px-6 mx-auto">
        <section className="mb-32">
          <div className="relative overflow-hidden bg-no-repeat bg-cover"></div>
            <div className="container mx-auto px-6 md:px-12 xl:px-32">
              <div className="text-center text-gray-800">
                <div className="block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12" >
                  <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">Penn State University  <br /><span class="text-blue-600">Certifications and Minor Report</span></h1>
                    <a className="inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 "  data-bs-toggle="modal" data-bs-target="#exampleModalCenteredScrollable" >Get started</a>
                <a className="inline-block px-7 py-3  font-medium text-sm leading-snug bg-transparent text-black-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-blue-200 transition duration-150 ease-in-out"><Link to="/instruction"> Learn more</Link></a>
             </div>
            </div>
          </div>
        </section>
        <div className="container my-24 px-6 mx-auto">


  <section className="mb-32 text-gray-800 text-center">

    <h2 className="text-3xl font-bold mb-12 text-center"> Certifications And Minors</h2>

    <div className="grid lg:grid-cols-3 gap-6 xl:gap-x-12">
      <div className="mb-6 lg:mb-0">
        <div>
          <div
            className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6"
            data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img src="https://bulletins.psu.edu/gallery/American_Studies_AMSTD_UMNR.png"
              className="w-full" alt="Louvre" />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                ></div>
            </a>
          </div>

          <h5 className="text-lg font-bold mb-3">AMERICAN STUDIES, MINOR</h5>
          <div className="mb-3 text-red-600 font-medium text-sm flex items-center justify-center">
            <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"/></svg>AMST
          </div>
          
          <p className="text-gray-500">
          American Studies examines the country’s history in a way that emphasizes culture – literature, art & architecture, film, folklore, music, and media. While discovering America’s past, students learn to think critically – to analyze and evaluate information; to write and speak clearly and expressively; and to conduct research.
          </p>
        </div>
      </div>

      <div className="mb-6 lg:mb-0">
        <div>
          <div
            className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6"
            data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img src="https://bulletins.psu.edu/gallery/Anthropology_ANTH_UMNR.jpg"
              className="w-full" alt="Louvre" />
            <a href="#!">
              <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                ></div>
            </a>
          </div>

          <h5 class="text-lg font-bold mb-3">ANTHROPOLOGY, MINOR</h5>
          <div class="mb-3 text-blue-600 font-medium text-sm flex items-center justify-center">
            <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"/></svg>ANTH
          </div>
        
          <p className="text-gray-500">
          Anthropology is the study of humanity - our biology, behavior, cultural complexity, and evolution. Anthropologists study living people across cultures and populations; past people through the fossil, archaeological, and historical records; as well as living and extinct nonhuman primates. Anthropologists document, describe, and seek to understand biological and cultural variation in humans both past and present as a way to understand and explain the human condition. The field is divided into several integrated areas of study. 
          </p>
        </div>
      </div>

      <div className="mb-0">
        <div>
          <div
            className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6"
            data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img src="https://bulletins.psu.edu/gallery/CJ_UMNR2.jpg"
              className="w-full" alt="Louvre" />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                ></div>
            </a>
          </div>

          <h5 className="text-lg font-bold mb-3">CRIMINAL JUSTICE, MINOR</h5>
          <div className="mb-3 text-yellow-500 font-medium text-sm flex items-center justify-center">
            <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zM48 400v-64c35.35 0 64 28.65 64 64H48zm0-224v-64h64c0 35.35-28.65 64-64 64zm272 176c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96zm272 48h-64c0-35.35 28.65-64 64-64v64zm0-224c-35.35 0-64-28.65-64-64h64v64z"/></svg>CRIMJ
          </div>
          
          <p className="text-gray-500">
          Criminal justice is the study of the adult and juvenile justice systems, including law enforcement, the courts, and corrections. It is interdisciplinary and includes understanding the intersections of law, public policy, and behavioral science, in an effort to understand crime as a social problem and improve these systems for the good of society.
          </p>
        </div>
      </div>
    </div>
    
    
  </section>
 
<div className="container my-24 px-6 mx-auto">
  
  
  <section className="mb-32 text-gray-800">


    <div className="container mx-auto xl:px-32 text-center lg:text-left">
      <div className="grid lg:grid-cols-2 flex items-center">
        <div className="mb-12 lg:mb-0">
          <div
            className="block rounded-lg shadow-lg px-6 py-12 lg:py-6 xl:py-12 md:px-12 lg:-mr-14"
          >
          <h3 className="text-2xl font-bold mb-3">Understanding the Problem</h3>
          <h5 className="text-lg text-blue-600 font-bold mb-12 lg:mb-10 xl:mb-12">Dr. David Hutson</h5>

          <p className="font-bold mb-4">Idea: </p>
          <p className="text-gra-500 mb-6">
          The lack of knowledge among advisors and faculty regarding the program requirements for specific minors outside of their own fields of study can create challenges for students seeking to pursue those minors. This can lead to misunderstandings and miscommunications, and ultimately hinder the success of the students in achieving their academic goals.

          </p>

          <p className="font-bold mb-4">Problem: </p>
          <p class="text-gra-500 mb-6">
          Despite having satisfied the necessary requirements for minors and certificates, many students fail to receive them due to a lack of proper declaration. This can be attributed to a lack of awareness or understanding of the declaration process, and ultimately results in a waste of the students' effort and potential. 

          </p>

          <p class="font-bold mb-4">
          Solution: 
          </p>
          <p className="text-gra-500">
     
          A tool that provides visual representations of the progress of students' minor and certificate programs, based on the courses they have taken, can help them to understand their current status and identify any gaps or deficiencies. This can enable them to make informed decisions and take appropriate actions to ensure the successful completion of their programs.
          </p>
          </div>
        </div>

        <div className='pl-[10%]'>
          <img
            src="https://www.abington.psu.edu/sites/abington/files/styles/person_headshot/public/david_hutson_headshot.png?itok=fWJM7YAs"
            className="w-full rounded-lg shadow-lg"
            alt=""
          />
        </div>
      </div>
    </div>
   
  </section>
  

</div>



</div>
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

  const [message, setMessage] = useState();


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
        pointer_val = pointer_val + 56
        console.log(pointer_val)
        resultText.value = resultText.value.slice(pointer_val)
        //console.log(resultText.value)
        var array = resultText.value.toString().split("\n");
        //console.log(array)
        
        const mappedOutput = array.map(line => {
            const splitLine = line.split(' ');
            if (splitLine.length < 2) {
              return '';
            }
            return splitLine[0] + ' ' + splitLine[1];
          });
          console.log(mappedOutput);
        
        const output = mappedOutput.map(str => {
          const splitStr = str.split(' ');
              if (splitStr.length < 2) {
                return '';
              }
          let secondWord = splitStr[1];
          let index = 0;
            while (index < secondWord.length && !secondWord[index].match(/\d/)) {
              index++;
            }
            secondWord = secondWord.substring(0, index + 3);
            return `${splitStr[0]} ${secondWord}`;
          });
        
        console.log(output);
        setMessage(output)
        console.log(message)
        
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
    <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter" tabIndex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
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

    <div className=" bg-slate-900/40 pt-[2%] px-[4%] modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenteredScrollable" tabIndex="-1" aria-labelledby="exampleModalCenteredScrollable" aria-modal="true" role="dialog">
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

        
          <button className="inline-block px-6 py-4 bg-blue-600 text-white font-medium text-md leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg  focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">
            Continue
            </button>
          <div className="offcanvas offcanvas-bottom fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 left-0 right-0 border-none h-4/5 max-h-full" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
            <div className="offcanvas-header flex items-center justify-between p-4">
              <h5 className="offcanvas-title mb-0 leading-normal font-semibold" id="offcanvasBottomLabel">Certifications / Minor Report</h5>
              <button type="button" className="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body flex-grow p-4 overflow-x-hidden overflow-y-auto small">
              <Req_api attribute={message} />
            </div>
          </div>
        </div>
      </div>
    </div>
    
       
    </div>
    
  )

}

export default App