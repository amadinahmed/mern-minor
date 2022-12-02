import React from "react";
import "./Footer.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Outlet
} from "react-router-dom";

function Footer(props) {

  return (
    <footer class="text-center lg:text-left bg-gray-100 text-gray-600">
  <div class="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300">
    <div class="mr-12 hidden lg:block">
      <span>Get connected with us: Contact Penn State Abgition Compunter Science Department</span>
    </div>
    <div class="flex justify-center">
   
    </div>
  </div>
  <div class="mx-6 py-10 text-center md:text-left">
    <div class="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div class="">
        <h6 class="
            uppercase
            font-semibold
            mb-4
            flex
            items-center
            justify-center
            md:justify-start
          ">
   
   <Link to="/" > Certifications and Minor Report</Link>
        </h6>
        <p>
          Here you can use rows and columns to organize your footer content. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit.
        </p>
      </div>
      <div class="">
        <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
        <Link to="/instruction" > Instruction</Link>
        </h6>
      </div>
      <div class="">
        <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
        <Link to="/ferpa"> FERPA </Link>
        </h6>
      </div>
      <div class="">
        <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
        <Link to="/about"> Team Page</Link>
        </h6>
  
      </div>
    </div>
    
  </div>
  <div class="text-center p-6 bg-gray-200">
    <span>© PSU :</span>
    <a class="text-gray-600 font-semibold"> Certifications and Minor Report</a>
  </div>
</footer>
  );
}

export default Footer;