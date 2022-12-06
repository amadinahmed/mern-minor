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
    <footer className="text-center lg:text-left bg-gray-100 text-gray-600">
  <div className="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300">
    <div className="mr-12 hidden lg:block">
      <span>Get connected with us: Contact Penn State Abington Computer Science Department.</span>
    </div>
    <div className="flex justify-center">
   
    </div>
  </div>
  <div className="mx-6 py-10 text-center md:text-left">
    <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="">
        <h6 className="
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
        Find Out the classes need to complete your Minors and Certifications.
        </p>
      </div>
      <div className="">
        <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
        <Link to="/instruction" > Instruction</Link>
        </h6>
      </div>
      <div className="">
        <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
        <Link to="/ferpa"> FERPA </Link>
        </h6>
      </div>
      <div className="">
        <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
        <Link to="/about"> Team Page</Link>
        </h6>
  
      </div>
    </div>
    
  </div>
  <div className="text-center p-6 bg-gray-200">
    <span>© PSU :</span>
    <a className="text-gray-600 font-semibold"> Certifications and Minor Report</a>
  </div>
</footer>
  );
}

export default Footer;