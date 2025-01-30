import React from "react";

function About() {
  return (
    <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
        Hello, I'm Vaibhav Varshney, a web developer with a passion for the MERN Stack. With a background in IT, I focus on building impactful and visually appealing software solutions. I have experience in front-end and back-end development, creating responsive web applications, and working with technologies like MongoDB, Express.js, React, and Node.js. I strive to deliver high-quality projects that make a lasting impression.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <ul>
          <li>10 <sup>th</sup> , Brij Bushan Lal Public School Bareilly , 2019</li>
          <li>Result : 88.2 % </li>
          <li>12 <sup>th</sup> , Kendriya Vidyalaya I.V.R.I. Bareilly , 2021 </li>
          <li>Result : 91.8 % </li>
          <li>B.Tech , Indian Institute of Information Technology Surat , 2026</li>
          <li>CGPA : 8.1 </li>

        </ul>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <ul>
          <li>Proficient in Programming Languages like [Python , C++ , JavaScript]</li>
          <li>Experienced with Front-end Development, Backend Development And Machine Learning</li>
          <li>Excellent problem-solving skills Effective communicator and collaborator</li>
        </ul> 
        <br />
        {/* <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <span>
          [Job Title], [Company/Organization], [Dates] [Brief description of
          responsibilities and achievements] [Job Title],
          [Company/Organization], [Dates] [Brief description of responsibilities
          and achievements] [Freelance/Contract Work], [Client/Organization],
          [Dates] [Brief description of projects and contributions]
        </span>
        <br /> */}
        <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <ul>
          <li>
            Python Proggramming Certification , GUVI Geeks , 2023
          </li>
          <li>
            Web Development Certification , Udemy , 2023
          </li>
          <li>
            Machine Learning Certification , GeeksForGeeks , 2024
          </li>
        </ul>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to leverage my skills and creativity to deliver
          innovative ideas & solutions in Front-end Development, Backend Development And Machine Learning Algorithms that exceed client expectations and contribute positively to the digital landscape. I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons.
        </p>
      </div>
    </div>
  );
}

export default About;