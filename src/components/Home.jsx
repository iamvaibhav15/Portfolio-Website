import React from 'react'
import pic from "/Image/Vaibhav.png"
import { FaLinkedinIn } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { ReactTyped } from "react-typed";
import { BiLogoGmail } from "react-icons/bi";

function Home() {
    const socialMedia = [
        { id: 1, icon: <BiLogoGmail size={28} />, link: "", color: "hover:text-red-400" },
        { id: 2, icon: <FaLinkedinIn size={28} />, link: "https://www.linkedin.com/in/im-vaibhav15/", color: "hover:text-blue-500" },
        { id: 3, icon: <BsYoutube size={28} />, link: "", color: "hover:text-red-600" },
        { id: 4, icon: <FaTelegramPlane size={28} />, link: "", color: "hover:text-blue-400" }
      ];

    const skills = [
        {id:1,icon:<FaReact size={28} />, color: "hover:text-blue-400"},
        {id:2,icon:<SiExpress size={28} />, color: "hover:text-grey-400"},
        {id:3,icon:<SiMongodb size={28} />, color: "hover:text-green-400"},
        {id:4,icon:<SiPython size={26} />, color: "hover:text-blue-200"},
        {id:5,icon:<RiJavascriptFill size={32} />, color: "hover:text-yellow-500"}
    ]
  return (
    <>
      <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <div className='flex flex-col md:flex-row' >
            <div className='md:w-1/2 mt-12 md:mt-24 space-y-4 order-2 md:order-1'>
                <span className='text-xl'>Welcome In My Feed</span>
                <div className='flex space-x-2 md:space-x-3 text-2xl md:text-4xl'>
                    <h1>Hello! I'm </h1>
                    {/* <span className='text-blue-300 font-bold'> Developer</span> */}
                    <ReactTyped
                        className='text-500'  
                        strings={[`a <span class="text-violet-500 font-bold">Developer</span>`,
                            `a <span class="text-pink-500 font-bold">Freelancer</span>`,
                            `a <span class="text-blue-500 font-bold">Programmer</span>`,
                            `an <span class="text-cyan-500 font-bold">Engineer</span>`
                        ]}
                        typeSpeed={80}
                        backDelay={1000}
                        backSpeed={80}
                        loop={true}
                        />
                </div>
                <p className="text-justify">
                    My Name is Vaibhav Varshney 🚀 Web Developer | MERN Stack Enthusiast | IT Professional
                    <br /><br />
                    I specialize in building <strong>impactful and visually appealing</strong> web applications using 
                    <strong> MongoDB, Express.js, React, and Node.js</strong>. With expertise in both 
                    <strong> front-end and back-end development</strong>, I focus on delivering 
                    <strong> high-quality, scalable, and user-friendly</strong> solutions.
                    <br /><br />
                    Passionate about solving complex problems and optimizing user experiences, I thrive on turning ideas into reality. <br /><br />
                    Let’s connect and create something amazing! 😊
                </p>

                <br />
                <div className='flex flex-col justify-between items-center space-y-6 md:space-y-0 md:flex-row'>
                    <div className="space-y-3">
                        <h1 className="font-bold text-center">Available on</h1>
                        <ul className="flex space-x-3">
                            {socialMedia.map(({ id, icon, link, color }) => (
                            <a key={id} target="_blank" href={link}>
                                <li className={`hover:scale-110 duration-200 rounded-full cursor-pointer ${color}`}>
                                {icon}
                                </li>
                            </a>
                            ))}
                        </ul>
                    </div>

                    <div className='space-y-3'>
                        <h1 className='font-bold text-center'>Working on</h1>
                        <ul className='flex space-x-3'>
                            {skills.map(({id,icon,color})=>
                                <li key={id} className={`hover:scale-110 duration-200 rounded-full cursor-pointer ${color}`}>{icon}</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>

            <div className='md:w-1/2 mt-8 md:mt-0 md:pt-8 md:pl-40 order-1'>
                <img src={pic} alt="Right-section-image" className='rounded-full w-[600px] h-[450px] md:h-[550px]' />
            </div>
        </div>
        <br/>
        <hr/>
      </div>
    </>
  )
}

export default Home