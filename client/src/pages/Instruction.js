import React from "react";
import "./css/Instruction.css"
  
const Instruction = () => {
  return (
   
      <div className="px-10 py-10">
        <h1 className=" text-5xl font-bold mt-0 mb-6">Instructions</h1>
        <p className="pt-10">
          
        <p className="font-bold">User Instructions:</p>

        <br/>

        For the best user experience please use the following instructions:

        ANY INFORMATION TAKEN FROM YOUR ACADEMIC RECORD IS NOT STORED WITHIN OUR SYSTEM

        <br/>
        <br/>

        Please upload your Academic Requirements document, preferably in PDF format.
        Upon hitting upload, the tracker will compare your academic requirements against that of any applicable minor or certificate program. It will then display your progress with any relevant programs and provide a general list of the following classes for further discussion with your advisor.
        If you have any questions please contact your advisor for further assistance.

        <br/>
        <br/>

        <p className="font-bold">FERPA DISCLAIMER:</p>
        <br/>
        By clicking “RUN REPORT” you are consenting to:
        The MCT parsing and utilizing your course history to compare against existing university academic programs.
        The MCT comparing your course history to provide a recommendation for next steps.


        <br/>
        <br/>
          

        
        ANY INFORMATION TAKEN FROM YOUR ACADEMIC RECORD IS NOT STORED WITHIN OUR SYSTEM

        </p>
      </div>  
      
  );
};
  
export default Instruction;