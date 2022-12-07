import React from "react";
  
const About = () => {
  return (
    <div className="px-10 py-10">
        <h1 className=" text-5xl font-bold mt-0 mb-6">Team Page</h1>
        <p className="pt-10">
          
        This product is a Penn State minor and certificate tracker. Penn State offers a wide variety of minors and certificates. Many students have taken the correct courses to qualify for a minor but are unaware and never declare their minor in LionPath. 

        <br/>
        <br/>

        This web-based application allows a student to upload their academic report and informs them what minors they qualify or are close to qualifying for. This will analyze a student’s academic history and compare them to a database of potential minors. 

        <br/>
        <br/>
        
        Team Members
        <ul className="pl-6 list-disc">
        <br/>
        <li> Amadin</li>
        <li> Parth</li>
        <li> Andrew</li>
        <li> Emily</li>
       </ul>
        <br/>

        <br/>
          
          Github: <a target="_blank" rel="noopener noreferrer" href="https://github.com/amadinahmed/mern-minor">https://github.com/amadinahmed/mern-minor</a>
          <br/>
          Deployment and Installation: <a target="_blank" rel="noopener noreferrer" href="https://www.notion.so/Deployment-and-Installation-Plan-56b739efd42f4458ab099fdaea6f8a6c">https://www.notion.so/Deployment-and-Installation-Plan-56b739efd42f4458ab099fdaea6f8a6c</a>

        </p>
      </div>  
  );
};
  
export default About;